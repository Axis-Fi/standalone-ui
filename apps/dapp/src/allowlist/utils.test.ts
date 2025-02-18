import { describe, it, expect } from "vitest";
import { overrideAllowlist } from "./utils";
import { getBatchAuctionMock } from "src/stories/mocks/batch-auction";

const SAMPLE_ALLOWLIST = [
  ["0x0000000000000000000000000000000000000000", "300000000000000000"],
  ["0x0000000000000000000000000000000000000001", "1777777700000000000"],
];

describe("Allowlist Overrides", () => {
  it("overrides an allowlist if file is present", () => {
    const mockAuction = getBatchAuctionMock();
    const result = overrideAllowlist(mockAuction, SAMPLE_ALLOWLIST);

    const allowlist = result?.info?.allowlist;

    expect(Array.isArray(allowlist)).toBe(true);

    allowlist?.forEach((element) => {
      expect(element).toHaveProperty("values");
      expect(Array.isArray(element.values)).toBe(true);

      element.values.forEach((value) => {
        expect(typeof value).toBe("string");
      });
    });
  });

  it("keeps auction unchanged if no allowlist for that id is present", () => {
    const mockAuction = getBatchAuctionMock({
      id: "blast-sepolia-0x1234567890123456789012345678901234567890-2",
    });
    const result = overrideAllowlist(mockAuction);
    const allowlist = result?.info?.allowlist;

    expect(result).toEqual(mockAuction);
    expect(allowlist).toBe(undefined);
  });
});
