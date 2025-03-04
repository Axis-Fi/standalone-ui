/// <reference types="cypress" />
import { Address } from "viem";
import { TestAccount } from "./test-accounts";

export interface RequestArguments {
  method: string;
  params?: unknown[] | object;
}

export interface EthereumProvider {
  isConnected: () => boolean;
  isMetaMask?: boolean;
  request: (args: RequestArguments) => Promise<unknown>;
  on?: (eventName: string, handler: (...args: any[]) => void) => void;
  removeListener?: (
    eventName: string,
    handler: (...args: any[]) => void,
  ) => void;
  _metamask?: {
    isUnlocked: () => Promise<boolean>;
  };
  // Add any other properties your dApp expects from the provider
}

// Augment the Cypress namespace to include custom commands
declare global {
  interface Window {
    ethereum?: EthereumProvider;
  }
  namespace Cypress {
    interface Chainable {
      shouldNotRenderErrorPage(): Chainable<void>;
      shouldRenderPageWithId(id: string): Chainable<void>;

      mockProvider(): Chainable<void>;
      useAccount(accountName: string): Chainable<TestAccount>;
      connectWallet(accountName?: string): Chainable<void>;
      mineBlocks(numBlocks?: number): Chainable<boolean>;
      increaseTime(seconds: number): Chainable<boolean>;
      impersonate(address: Address): Chainable<boolean>;
      setBalance(address: Address, value: bigint): Chainable<boolean>;
      takeSnapshot(): Chainable<string>;
      revertToSnapshot(snapshotId: string): Chainable<boolean>;
    }
  }
}
