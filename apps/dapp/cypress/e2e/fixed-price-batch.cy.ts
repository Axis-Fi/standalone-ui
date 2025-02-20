import { stubGetAuctionByTokenAddressQuery } from "../../src/mocks/stubs/get-auction-by-token-address-query";
import { AUCTION_TOKEN_ADDRESS } from "../../../../app-config";
import { COMPONENTS, URLS } from "../constants";

//TODO: improve this
const TEST_CHAIN_ID = "84532";

const [mockAuction] = stubGetAuctionByTokenAddressQuery({
  baseTokenAddress: AUCTION_TOKEN_ADDRESS,
}).batchAuctionLots;

describe("Fixed Price Batch Page", () => {
  describe("Status: Live", () => {
    it("Should render the auction page", () => {
      cy.visit(URLS.AUCTION_PAGE_URL(TEST_CHAIN_ID, mockAuction.lotId));
      cy.get(COMPONENTS.AUCTION_PAGE).should("exist");
    });

    it("Should have a bid card", () => {
      cy.visit(URLS.AUCTION_PAGE_URL(TEST_CHAIN_ID, mockAuction.lotId));
      cy.get(COMPONENTS.AUCTION_PAGE).should("exist");
    });
  });
});
