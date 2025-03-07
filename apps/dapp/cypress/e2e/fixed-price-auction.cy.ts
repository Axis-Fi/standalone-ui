import { stubGetAuctionByTokenAddressQuery } from "../../src/mocks/stubs/get-auction-by-token-address-query";
import { AUCTION_TOKEN_ADDRESS } from "../../../../app-config";
import { COMPONENTS, TRANSACTION_TIMEOUT_MS, URLS } from "../constants";

//TODO: improve this
const TEST_CHAIN_ID = "84532";

const [mockAuction] = stubGetAuctionByTokenAddressQuery({
  baseTokenAddress: AUCTION_TOKEN_ADDRESS,
}).batchAuctionLots;

describe("Fixed Price Auction", () => {
  describe("Status: Live", () => {
    beforeEach(() => {
      cy.visit(URLS.AUCTION_PAGE_URL(TEST_CHAIN_ID, mockAuction.lotId));
      cy.connectWallet();
    });

    it("Should be able to bid", () => {
      cy.get(COMPONENTS.AMOUNT_INPUT).type("1000");

      cy.get(COMPONENTS.BID_SUBMIT_BUTTON).click();

      cy.get(COMPONENTS.BID_SUBMIT_BUTTON, { timeout: TRANSACTION_TIMEOUT_MS })
        .should("have.text", "BID")
        .click();

      cy.get(COMPONENTS.TX_DIALOG_CONFIRM_BUTTON).click();

      cy.get(COMPONENTS.TX_DIALOG_TITLE, {
        timeout: TRANSACTION_TIMEOUT_MS,
      }).should("have.text", "Transaction Confirmed");
    });
  });
});
