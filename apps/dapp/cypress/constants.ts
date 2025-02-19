const BASE_URL = Cypress.env("VITE_APP_URL");

// Mainnet chain ID for mainnet build testing
const blastSepoliaChainId = "168587773";

// Testnet chain ID for testnet build testing
const baseChainId = "8453";

const LAUNCH_ID =
  Cypress.env("VITE_TESTNET") === "true" ? blastSepoliaChainId : baseChainId;

const APP_BASE_URL = "http://localhost:5173/#";

const URLS = {
  HOME: `${BASE_URL}/#/`,
  REFERRALS: `${BASE_URL}/#/refer`,
  LAUNCH: `${BASE_URL}/#/${LAUNCH_ID}/0`,

  /** TESTNET ONLY PAGES */
  FAUCET: `${BASE_URL}/#/faucet`,
  DEPLOY: `${BASE_URL}/#/deploy`,
} as const;

const COMPONENTS = {
  //Auction List Page
  AUCTION_CARDS: "[data-cy='auction-card']",
  AUCTION_CARD: (id: string) => `[data-auction-id="${id}"]`,
  AUCTION_CARD_BUTTON: "[data-cy='auction-card-button']",

  //Auction Page
  AUCTION_PAGE_URL: (chainId: string, lotId: string) =>
    APP_BASE_URL + "/" + chainId + "/" + lotId,
  AUCTION_PAGE: "#__AXIS_LAUNCH_PAGE__",
  AUCTION_BID_CARD: "#auction-bid-card",
};

export { URLS, COMPONENTS };
