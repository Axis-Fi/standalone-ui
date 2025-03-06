import { stubGetAuctionByTokenAddressQuery } from "../../src/mocks/stubs/get-auction-by-token-address-query";
import { AUCTION_TOKEN_ADDRESS } from "../../../../app-config";
import { COMPONENTS, URLS } from "../constants";

//TODO: improve this
const TEST_CHAIN_ID = "84532";

const [mockAuction] = stubGetAuctionByTokenAddressQuery({
  baseTokenAddress: AUCTION_TOKEN_ADDRESS,
}).batchAuctionLots;

describe("Price Discovery Auction Page", () => {
  describe("Status: Live", () => {
    beforeEach(() => {
      cy.visit(URLS.AUCTION_PAGE_URL(TEST_CHAIN_ID, mockAuction.lotId));
    });
    it("Should render the auction page", () => {
      cy.get(COMPONENTS.AUCTION_PAGE).should("exist");
    });

    it("Should have a bid card", () => {
      cy.get(COMPONENTS.AUCTION_BID_CARD).should("exist");
    });

    it("Should be able to approve balance", () => {});
  });
});
