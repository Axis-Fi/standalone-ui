/** The allowlists exported from this file will override the metadata server's allowlists
 *
 *  The object key should be the auction id, which can be retrieved from the subgraph: 
 *    1) Obtain the subgraph URL for the auction chain here: https://github.com/Axis-Fi/ui-libs/tree/main/packages/deployments/src/chains
 *    2) Obtain the subgraph version from https://github.com/Axis-Fi/ui-libs/blob/main/packages/deployments/src/subgraph-config.ts
 *    3) Run the following query replacing the base token with your token address:
 *
 *      query getBatchAuctionLotsByBaseTokenAddress {
          batchAuctionLots(where: { baseToken: "0x0000000000000000000000000000000000000000" }) {
		        id
          }
        }

    The return id value is the key to be used for the allowlist
 */

export default {
  //Example format
  "blast-sepolia-0x1234567890123456789012345678901234567890-1": [
    ["0x0000000000000000000000000000000000000000", "300000000000000000"],
    ["0x0000000000000000000000000000000000000001", "1777777700000000000"],
  ],
} as Record<string, Array<string[]>>;
