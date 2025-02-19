import { stubGetAuctionByTokenAddressQuery } from "../../src/mocks/stubs/get-auction-by-token-address-query";
import { AuctionListPageHandler } from "../page-handlers/AuctionListPageHandler";
import { AuctionPageHandler } from "../page-handlers/AuctionPageHandler";
import { AUCTION_TOKEN_ADDRESS } from "../../../../app-config";

const [firstAuction] = stubGetAuctionByTokenAddressQuery({
  baseTokenAddress: AUCTION_TOKEN_ADDRESS,
}).batchAuctionLots;

describe("Auction List Page", () => {
  const auctionListPage = new AuctionListPageHandler();
  const auctionPage = new AuctionPageHandler();

  it("Should load the root page", () => {
    auctionListPage.visit();
  });

  it("Should load multiple auctions", () => {
    auctionListPage.visit();
    auctionListPage.getAuctionCards().should("have.length", 2);
  });

  it("Should enter an auction page", () => {
    auctionListPage.visit();

    const auctionCard = auctionListPage.getAuctionCardByAuctionId(
      firstAuction.id,
    );
    auctionListPage.getViewAuctionButton(auctionCard).click();

    auctionPage.getRoot().should("exist");
  });
});
