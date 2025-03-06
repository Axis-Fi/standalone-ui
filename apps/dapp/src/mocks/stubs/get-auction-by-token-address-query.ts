import type { GetAuctionLotsQuery } from "@axis-finance/subgraph-client";

export const stubGetAuctionByTokenAddressQuery = (overrides: {
  baseTokenAddress: GetAuctionLotsQuery["batchAuctionLots"][0]["baseToken"]["address"];
}): GetAuctionLotsQuery => {
  const { baseTokenAddress } = overrides;
  const chain = "base-sepolia";

  return {
    batchAuctionLots: [
      {
        id: "base-sepolia-0xba0000c28179ce533233a943d432eddd154e62a3-34",
        chain: "base-sepolia",
        auctionHouse: "0xba0000c28179ce533233a943d432eddd154e62a3",
        aborted: null,
        cancelled: null,
        lotId: "34",
        createdBlockNumber: "22758972",
        createdBlockTimestamp: "1741286232",
        createdDate: "2025-03-06T18:37:12.000Z",
        createdTransactionHash:
          "0x96f0b28dd7a5ac68b5546f97a58a652fa81dac8c88363e368aba939b222bd0c7",
        capacityInitial: "1000000",
        start: "1741286700",
        info: {
          key: "FPBA-84532_0x0c5CD8F8e7D6995A67568f87969332f5C902e520_1741286700000",
          name: "Testing",
          description: "chad e2e testing",
          tagline: "Finally E2E",
          links: [
            {
              linkId: "payoutTokenLogo",
              url: "https://i0.wp.com/liveforlivemusic.com/wp-content/uploads/2014/10/aphex-twin-logo.jpg",
            },
            {
              linkId: "projectBanner",
              url: "https://lh4.googleusercontent.com/proxy/sINDdQmXIOhTjVT5hWn0Qs5JKFC1C-nmGV4KrsKCe9SkzDzPQHYbwibmPz8_VyWJmH1JODcXw36_hlRStEWmUhZCxEPiH1aR-ELsyCGrrHLxrlgltblIlHLfs3ScjQ",
            },
          ],
          allowlist: [],
        },
        conclusion: "1741377600",
        auctionType: "FPBA",
        seller: "0x62a665d3f9fc9a968dc35a789122981d9109349a",
        derivativeType: null,
        wrapDerivative: false,
        callbacks: "0x0000000000000000000000000000000000000000",
        curator: null,
        curatorApproved: false,
        curatorFee: "0",
        protocolFee: "0",
        referrerFee: "0",
        capacity: "1000000",
        sold: "0",
        purchased: "0",
        lastUpdatedBlockNumber: "22758972",
        lastUpdatedBlockTimestamp: "1741286232",
        lastUpdatedDate: "2025-03-06T18:37:12.000Z",
        lastUpdatedTransactionHash:
          "0x96f0b28dd7a5ac68b5546f97a58a652fa81dac8c88363e368aba939b222bd0c7",
        linearVesting: null,
        baseToken: {
          totalSupply: "100000000",
          address: "0x0c5cd8f8e7d6995a67568f87969332f5c902e520",
          decimals: 18,
          symbol: "AFX",
          name: "Aphex",
          logoURI:
            "https://i0.wp.com/liveforlivemusic.com/wp-content/uploads/2014/10/aphex-twin-logo.jpg",
          chainId: 84532,
        },
        quoteToken: {
          name: "USD Coin",
          symbol: "USDC",
          logoURI:
            "https://storage.bondprotocol.finance/6e41a561-e275-4698-bc36-548d30a80e96-bucket/USDC.png",
          decimals: 18,
          address: "0x4c9d75fbdf764d05df654340a48f85bc0216f8ab",
          mintable: true,
          chainId: 84532,
        },
        created: {
          infoHash:
            "bafkreign7zicvczcdkdwb3ycrwbtmke6rbspm5b3ks4upnfrlbu3jink74",
        },
        curated: null,
        maxBidId: "0",
        bids: [],
        bidsDecrypted: [],
        bidsClaimed: [],
        bidsRefunded: [],
        encryptedMarginalPrice: null,
        fixedPrice: {
          id: "base-sepolia-0xba0000c28179ce533233a943d432eddd154e62a3-34",
          status: "created",
          settlementSuccessful: false,
          price: "20",
          minFilled: "500000",
          hasPartialFill: null,
          partialBidId: null,
        },
        settled: null,
        chainId: 84532,
        status: "live",
        formatted: {
          startDate: "2025-03-06T18:45:00.000Z",
          endDate: "2025-03-07T20:00:00.000Z",
          startFormatted: "2025.03.06 - 18:45 GMT+0",
          endFormatted: "2025.03.07 - 20:00 GMT+0",
          startDistance: "18 minutes",
          endDistance: "1 day",
          sold: "0",
          purchased: "0",
          purchasedDecimal: 0,
          capacity: "1,000,000",
          totalSupply: "100,000,000",
          tokenPairSymbols: "USDC/AFX",
          price: "20",
          totalBids: 0,
          totalBidsClaimed: 0,
          totalBidAmountFormatted: "0",
          totalBidAmountDecimal: 0,
          uniqueBidders: 0,
          cleared: false,
          minFilled: "500,000",
        },
        isSecure: true,
      },
    ],
  };
};
