/// <reference types="cypress" />
import { Address } from "viem";
import { TestAccount } from "../test-accounts";

Cypress.Commands.add("shouldNotRenderErrorPage", () => {
  // Timeout required because the error page might not appear until the whole page has rendered
  cy.wait(500).get("#__AXIS_ORIGIN_ERROR_PAGE__").should("not.exist");
});

// Generally a test will run faster looking for an expected ID rather than waiting for an error page
Cypress.Commands.add("shouldRenderPageWithId", (id) => {
  cy.get(`#${id}`, { timeout: 10000 }).should("exist");
});

// Mock the wallet provider with the current test account
Cypress.Commands.add("mockProvider", () => {
  const currentAccount = Cypress.env("CURRENT_ACCOUNT");

  cy.window().then((win) => {
    win.ethereum = {
      isConnected: () => true,

      request: ({ method, params }: { method: string; params: any[] }) => {
        return new Promise((resolve, reject) => {
          switch (method) {
            case "eth_chainId":
              resolve("0x7A69"); // Default anvil chain ID (31337 in hex)
              break;
            case "eth_accounts":
            case "eth_requestAccounts":
              resolve([currentAccount]);
              break;
            case "eth_sendTransaction":
              cy.task("sendTransaction", params[0]).then(resolve);
              break;
            case "eth_getBalance":
              cy.task("getBalance", params[0]).then(resolve);
              break;
            default:
              reject(new Error(`Method ${method} not implemented in mock`));
          }
        });
      },
    };
  });
});

// Helper for accessing test accounts
Cypress.Commands.add("useAccount", (accountName: string) => {
  return cy.task<TestAccount>("switchAccount", accountName).then((account) => {
    // Store the current account for use in tests
    Cypress.env("CURRENT_ACCOUNT", account.address);
    Cypress.env("CURRENT_PRIVATE_KEY", account.privateKey);
    return account;
  });
});

// Connect wallet using the current account
Cypress.Commands.add("connectWallet", (accountName = "deployer") => {
  // Switch to the specified account
  cy.useAccount(accountName);

  // Mock the provider
  cy.mockProvider();

  //TODO: is the necessary
  // Click the connect button in your dApp
  //cy.get("[data-cy=connect-wallet]").click();
  // // Wait for connection to be established
  // cy.contains(Cypress.env("CURRENT_ACCOUNT").substring(0, 6)).should(
  //   "be.visible",
  // );
});

// TestClient specific commands
Cypress.Commands.add("mineBlocks", (numBlocks = 1) => {
  return cy.task<boolean>("mineBlock", numBlocks);
});

Cypress.Commands.add("increaseTime", (seconds: number) => {
  return cy.task<boolean>("increaseTime", seconds);
});

Cypress.Commands.add("impersonate", (address: Address) => {
  return cy.task<boolean>("impersonateAccount", address);
});

Cypress.Commands.add("setBalance", (address: Address, value: bigint) => {
  return cy.task<boolean>("setBalance", { address, value });
});

Cypress.Commands.add("takeSnapshot", () => {
  return cy.task<string>("snapshot");
});

Cypress.Commands.add("revertToSnapshot", (snapshotId: string) => {
  return cy.task<boolean>("revert", snapshotId);
});
