const BASE_URL = Cypress.env("VITE_APP_URL");

// Mainnet chain ID for mainnet build testing
const blastSepoliaChainId = "168587773";

// Testnet chain ID for testnet build testing
const baseChainId = "8453";

const LAUNCH_ID =
  Cypress.env("VITE_TESTNET") === "true" ? blastSepoliaChainId : baseChainId;

const HOME = `${BASE_URL}/#`;

const URLS = {
  HOME,
  REFERRALS: `${HOME}/refer`,
  LAUNCH: `${HOME}/${LAUNCH_ID}/0`,

  /** TESTNET ONLY PAGES */
  FAUCET: `${HOME}/faucet`,
  DEPLOY: `${HOME}/deploy`,
  AUCTION_PAGE_URL: (chainId: string, lotId: string) =>
    HOME + "/" + chainId + "/" + lotId,
} as const;

const COMPONENTS = {
  //Auction List Page
  AUCTION_CARDS: "[data-cy='auction-card']",
  AUCTION_CARD: (id: string) => `[data-auction-id="${id}"]`,
  AUCTION_CARD_BUTTON: "[data-cy='auction-card-button']",
  //Auction Page
  AUCTION_PAGE: "#__AXIS_LAUNCH_PAGE__",
  AUCTION_BID_CARD: "#auction-bid-card",
  AMOUNT_INPUT: "[data-testid='bid-amount-input']",
  PRICE_INPUT: "[data-testid='bid-price-input']",
  BID_SUBMIT_BUTTON: "[data-testid='bid-submit-button']",
  TX_DIALOG_TRIGGER_BUTTON: "[data-testid='tx-dialog-trigger-button']",
  TX_DIALOG_CONFIRM_BUTTON: "[data-testid='tx-dialog-confirm-button']",
};

export { URLS, COMPONENTS };
