import type { NonNullSubgraphAuction } from "@axis-finance/types";
import type { GetAuctionLotsQuery } from "@axis-finance/subgraph-client";

const insertAuction = (
  cachedAuctions: GetAuctionLotsQuery,
  auction: NonNullSubgraphAuction,
): GetAuctionLotsQuery => ({
  ...cachedAuctions,
  batchAuctionLots: cachedAuctions.batchAuctionLots.concat(auction!),
});

export { insertAuction };
