import { AuctionPageHandler } from "../page-handlers/AuctionPageHandler";
import { stubGetAuctionByTokenAddressQuery } from "../../src/mocks/stubs/get-auction-by-token-address-query";
import { AUCTION_TOKEN_ADDRESS } from "../../../../app-config";

//TODO: improve this
const TEST_CHAIN_ID = 84532;

const [firstAuction] = stubGetAuctionByTokenAddressQuery({
  baseTokenAddress: AUCTION_TOKEN_ADDRESS,
}).batchAuctionLots;

describe("Fixed Price Batch Page", () => {
  describe("Status: Live", () => {
    const auctionPage = new AuctionPageHandler();

    it("Should render the auction page", () => {
      auctionPage.visitAuction(TEST_CHAIN_ID, +firstAuction.lotId);
      auctionPage.getRoot().should("exist");
    });

    it("Should have a bid card", () => {
      auctionPage.visitAuction(TEST_CHAIN_ID, +firstAuction.lotId);
      auctionPage.getBidCard().should("exist");
    });
  });
});
