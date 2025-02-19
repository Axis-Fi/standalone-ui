const BASE_URL = "http://localhost:5173/#";

export class AuctionPageHandler {
  getRoot() {
    return cy.get("#__AXIS_LAUNCH_PAGE__");
  }

  visitAuction(chainId: number, lotId: number) {
    cy.visit(BASE_URL + "/" + chainId + "/" + lotId);
  }

  getBidCard() {
    return cy.get("#auction-bid-card");
  }

  getBidInput() {}
}
