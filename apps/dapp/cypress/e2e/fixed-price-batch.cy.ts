import { AuctionListPageHandler } from "../page-handlers/AuctionListPageHandler";
import { AuctionPageHandler } from "../page-handlers/AuctionPageHandler";

describe("Fixed Price Batch Page", () => {
  it("Should render the auction page", () => {
    const listPage = new AuctionListPageHandler();
    listPage.visit();

    const auctionCard = listPage.getFirstAuctionCard();
    listPage.getViewAuctionButton(auctionCard).click();

    const auctionPage = new AuctionPageHandler();

    auctionPage.getRoot().should("exist");
  });
});
