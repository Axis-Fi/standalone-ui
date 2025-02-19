export class AuctionListPageHandler {
  //TODO: replace with env variable
  private url = "http://localhost:5173";

  constructor() {}

  visit(url?: string) {
    cy.visit(url ?? this.url);
  }

  getAuctionCards() {
    return cy.get('[data-cy="auction-card"]');
  }
  getAuctionCardByAuctionId(id: string) {
    return this.getAuctionCards().filter(`[data-auction-id="${id}"]`);
  }

  getViewAuctionButton(cy: Cypress.Chainable<JQuery<HTMLElement>>) {
    return cy.find('[data-cy="auction-card-button"]');
  }
}
