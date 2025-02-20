import { stubGetAuctionByTokenAddressQuery } from "../../src/mocks/stubs/get-auction-by-token-address-query";
import { AUCTION_TOKEN_ADDRESS } from "../../../../app-config";
import { URLS, COMPONENTS } from "../constants";

const [firstAuction] = stubGetAuctionByTokenAddressQuery({
  baseTokenAddress: AUCTION_TOKEN_ADDRESS,
}).batchAuctionLots;

describe("Auction List Page", () => {
  it("Should load the root page", () => {
    cy.visit(URLS.HOME);
  });

  it("Should load multiple auctions", () => {
    cy.visit(URLS.HOME);
    cy.get(COMPONENTS.AUCTION_CARDS).should("have.length", 2);
  });

  it("Should enter an auction page", () => {
    cy.visit(URLS.HOME);

    cy.get(COMPONENTS.AUCTION_CARDS)
      .filter(COMPONENTS.AUCTION_CARD(firstAuction.id))
      .find(COMPONENTS.AUCTION_CARD_BUTTON)
      .click();

    cy.get(COMPONENTS.AUCTION_PAGE).should("exist");
  });
});
