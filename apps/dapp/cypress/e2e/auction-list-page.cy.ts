//import { stubGetAuctionLotsQuery } from "../../src/mocks/stubs/get-auction-lots-query";
import { AuctionListPageHandler } from "../page-handlers/AuctionListPageHandler";
import { AuctionPageHandler } from "../page-handlers/AuctionPageHandler";

//TODO: Fix chain name mismatch and use the id to fetch instead of first
//const auctions = stubGetAuctionLotsQuery({ chain: "base-sepolia" });

describe("Fixed Price Batch", () => {
  const auctionListPage = new AuctionListPageHandler();

  it("Should load the root page", () => {
    auctionListPage.visit();
  });

  it("Should load multiple auctions", () => {
    auctionListPage.visit();
    auctionListPage.getAuctionCards().should("have.length", 2);
  });

  it("Should enter an auction page", () => {
    auctionListPage.visit();

    const firstAuction = auctionListPage.getAuctionCards().first();

    auctionListPage.getViewAuctionButton(firstAuction).click();

    const auctionPage = new AuctionPageHandler();

    auctionPage.getRoot().should("exist");
  });
});
