import { Auction } from "@axis-finance/types";
import allowlists from "./allowlists";

/**
 * Returns the existing allowlist file if it exists locally
 */
export function getAllowlistByAuctionId(id: Auction["id"]) {
  return allowlists[id];
}

/**
 * Overrides an auction allowlist property with a local allowlist file
 */
export function overrideAllowlist(auction: Auction): Auction {
  const _auction = auction;
  const allowlist = getAllowlistByAuctionId(auction.id);

  if (!allowlist) return auction;

  if (auction.info === null) {
    _auction.info = {
      links: [],
      allowlist: [],
    };
  }

  const mappedAllowlist = allowlist.map((values) => ({ values }));

  return {
    ..._auction,
    info: {
      ..._auction.info,
      links: _auction.info?.links ?? [],
      allowlist: mappedAllowlist,
    },
  };
}
