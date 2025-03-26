import { graphql, HttpResponse } from "msw";

import { stubGetAuctionByTokenAddressQuery } from "./stubs/get-auction-by-token-address-query";

export const handlers = [
  graphql.query("getBatchAuctionLotsByBaseTokenAddress", () => {
    return HttpResponse.json({
      data: stubGetAuctionByTokenAddressQuery(),
    });
  }),
];
