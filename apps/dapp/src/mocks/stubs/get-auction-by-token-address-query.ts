import type { GetAuctionLotsQuery } from "@axis-finance/subgraph-client";
import { getUnixTime, addDays } from "date-fns";

export const stubGetAuctionByTokenAddressQuery = (): GetAuctionLotsQuery => {
  const startDate = new Date();
  const endDate = addDays(startDate, 7);
  const startTimestamp = getUnixTime(startDate).toString();
  const conclusionTimestamp = getUnixTime(endDate).toString();

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
        start: startTimestamp,
        info: [
          {
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
          },
        ],
        conclusion: conclusionTimestamp,
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
          totalSupply: "10000000000000000000000000",
          address: "0x0c5cd8f8e7d6995a67568f87969332f5c902e520",
          decimals: "18",
          symbol: "AFX",
          name: "Aphex",
        },
        quoteToken: {
          name: "USD Coin",
          symbol: "USDC",
          decimals: "18",
          address: "0x4c9d75fbdf764d05df654340a48f85bc0216f8ab",
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
      },
      {
        id: "base-sepolia-0xba0000c28179ce533233a943d432eddd154e62a3-35",
        chain: "base-sepolia",
        auctionHouse: "0xba0000c28179ce533233a943d432eddd154e62a3",
        aborted: null,
        cancelled: null,
        lotId: "35",
        createdBlockNumber: "22793846",
        createdBlockTimestamp: "1741355980",
        createdDate: "2025-03-07T13:59:40.000Z",
        createdTransactionHash:
          "0x83b7d149afaacb7b0dffbd827fd040d4a899ad7fa5066be7e1ab2ab45091be0f",
        capacityInitial: "200000",
        start: startTimestamp,
        info: [
          {
            key: "EMPA-84532_0x0c5CD8F8e7D6995A67568f87969332f5C902e520_1741356712208",
            name: "Testoor",
            description: "testing sealed bid",
            tagline: "Testing stuff",
            links: [
              {
                linkId: "payoutTokenLogo",
                url: "https://avatars.githubusercontent.com/u/158601375?s=200&v=4",
              },
              {
                linkId: "projectBanner",
                url: "https://cdn.dribbble.com/users/2984251/screenshots/9704093/media/b3fdc6ffea4f1868710b6c51cb1b2171.png?resize=400x0",
              },
            ],
          },
        ],
        conclusion: conclusionTimestamp,
        auctionType: "EMPA",
        seller: "0x62a665d3f9fc9a968dc35a789122981d9109349a",
        derivativeType: null,
        wrapDerivative: false,
        callbacks: "0x0000000000000000000000000000000000000000",
        curator: null,
        curatorApproved: false,
        curatorFee: "0",
        protocolFee: "0",
        referrerFee: "0",
        capacity: "200000",
        sold: "0",
        purchased: "0",
        lastUpdatedBlockNumber: "22793846",
        lastUpdatedBlockTimestamp: "1741355980",
        lastUpdatedDate: "2025-03-07T13:59:40.000Z",
        lastUpdatedTransactionHash:
          "0x83b7d149afaacb7b0dffbd827fd040d4a899ad7fa5066be7e1ab2ab45091be0f",
        linearVesting: null,
        baseToken: {
          totalSupply: "10000000000000000000000000",
          address: "0x0c5cd8f8e7d6995a67568f87969332f5c902e520",
          decimals: "18",
          symbol: "AFX",
          name: "Aphex",
        },
        quoteToken: {
          name: "USD Coin",
          symbol: "USDC",
          decimals: "18",
          address: "0x4c9d75fbdf764d05df654340a48f85bc0216f8ab",
        },
        created: {
          infoHash:
            "bafkreia2piufexe3znat5detpixkwswqb5ilxodhztikikfp2vo326dfou",
        },
        curated: null,
        maxBidId: "0",
        bids: [],
        bidsDecrypted: [],
        bidsClaimed: [],
        bidsRefunded: [],
        encryptedMarginalPrice: {
          id: "base-sepolia-0xba0000c28179ce533233a943d432eddd154e62a3-35",
          status: "created",
          settlementSuccessful: false,
          minPrice: "11",
          minFilled: "100000",
          minBidSize: "10",
          marginalPrice: null,
          hasPartialFill: null,
        },
        fixedPrice: null,
        settled: null,
      },
    ],
  };
};
