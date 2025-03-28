import { useEffect, useState } from "react";
import type { PropsWithAuction } from "@axis-finance/types";
import { Badge, Metric } from "@repo/ui";
import { getCountdown } from "utils";

export function CountdownChip({ auction }: PropsWithAuction) {
  const [timeRemaining, setTimeRemaining] = useState<string | null>(null);

  const startDate = new Date(Number(auction.start) * 1000);

  const endDate = new Date(Number(auction.conclusion) * 1000);

  const now = new Date();

  const isOngoing = startDate <= now && endDate > now;

  const hasntStarted = startDate > now;

  const inProgress = hasntStarted || isOngoing;

  const targetDate = hasntStarted ? startDate : endDate;

  // Immediately set the countdown if the auction is ongoing
  useEffect(() => {
    if (inProgress) {
      setTimeRemaining(getCountdown(targetDate));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Refresh the countdown every second
  useEffect(() => {
    const interval = setInterval(() => {
      if (inProgress) {
        setTimeRemaining(getCountdown(targetDate));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [startDate, endDate, isOngoing]);

  if (!inProgress) return null;

  return (
    <Badge size={"s"} className="">
      <Metric
        size={"s"}
        className="text-center"
        isLabelSpaced
        label={hasntStarted ? "Upcoming in" : "Remaining"}
        childrenClassName="min-w-[120px]"
      >
        {timeRemaining}
      </Metric>
    </Badge>
  );
}
