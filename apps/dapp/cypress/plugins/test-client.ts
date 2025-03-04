import {
  createPublicClient,
  createWalletClient,
  createTestClient,
  http,
  Address,
  Hash,
  Hex,
} from "viem";
import { foundry } from "viem/chains";
import { privateKeyToAccount } from "viem/accounts";
import { TEST_ACCOUNTS } from "../test-accounts";

/**
 * Configure viem clients including TestClient for enhanced blockchain testing
 */
export function setupTestClient(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions,
): Cypress.PluginConfigOptions {
  // Default to the first account, but can be overridden in tests
  const defaultAccount = TEST_ACCOUNTS.deployer;
  const testAccount = privateKeyToAccount(defaultAccount.privateKey as Hex);

  // Configure test chain
  const testChain = {
    ...foundry,
    rpcUrls: {
      default: {
        http: [config.env?.NODE_URL || "http://127.0.0.1:8545"],
      },
      public: {
        http: [config.env?.NODE_URL || "http://127.0.0.1:8545"],
      },
    },
  };

  // Create standard clients
  const publicClient = createPublicClient({
    chain: testChain,
    transport: http(),
  });

  const walletClient = createWalletClient({
    chain: testChain,
    transport: http(),
    account: testAccount,
  });

  // Create the TestClient with anvil methods
  const testClient = createTestClient({
    chain: testChain,
    mode: "anvil",
    transport: http(),
  });

  // Register tasks to interact with blockchain
  on("task", {
    // Access to standard account operations
    switchAccount(accountName: string) {
      const account = TEST_ACCOUNTS[accountName];
      if (!account) {
        throw new Error(`Unknown account: ${accountName}`);
      }

      // Return account info for use in tests
      return {
        address: account.address,
        privateKey: account.privateKey,
      };
    },

    // Standard blockchain operations
    async getBalance(address: Address) {
      const balance = await publicClient.getBalance({ address });
      return balance.toString();
    },

    async sendTransaction({ account, to, value, data = "0x" as Hex }) {
      const hash = await walletClient.sendTransaction({
        account,
        to,
        value,
        data,
        kzg: {
          //@ts-expect-error
          blobToKzgCommitment: () => {},
        },
      });
      return hash;
    },

    // TestClient specific operations
    async mineBlock(blocks = 1) {
      await testClient.mine({ blocks });
      return true;
    },

    async increaseTime(seconds: number) {
      await testClient.increaseTime({ seconds });
      return true;
    },

    async impersonateAccount(address: Address) {
      await testClient.impersonateAccount({ address });
      return true;
    },

    async stopImpersonatingAccount(address: Address) {
      await testClient.stopImpersonatingAccount({ address });
      return true;
    },

    async setBalance({ address, value }: { address: Address; value: bigint }) {
      await testClient.setBalance({ address, value });
      return true;
    },

    async resetFork() {
      await testClient.reset();
      return true;
    },

    async setNextBlockTimestamp(timestamp: number) {
      await testClient.setNextBlockTimestamp({ timestamp: BigInt(timestamp) });
      return true;
    },

    async dropTransaction(txHash: Hash) {
      await testClient.dropTransaction({ hash: txHash });
      return true;
    },

    async setCode({ address, bytecode }: { address: Address; bytecode: Hex }) {
      await testClient.setCode({ address, bytecode });
      return true;
    },

    async getBlockNumber() {
      const blockNumber = await publicClient.getBlockNumber();
      return blockNumber.toString();
    },

    async snapshot() {
      const snapshotId = await testClient.snapshot();
      return snapshotId;
    },

    async revert(snapshotId: string) {
      await testClient.revert({ id: snapshotId as Hex });
      return true;
    },
  });

  // Store accounts in Cypress environment for easy access in tests
  if (!config.env) config.env = {};
  config.env.TEST_ACCOUNTS = TEST_ACCOUNTS;
  config.env.CURRENT_ACCOUNT = defaultAccount.address;

  return config;
}
