import { useEffect, useState } from 'react';
import {
  addSeconds,
  format,
  formatDuration,
  fromUnixTime,
  intervalToDuration,
  Duration
} from 'date-fns';
import { CHAIN_SECONDS_PER_BLOCK } from 'utilities/variables/variables';
import convertFromBase from 'utilities/converters/convertFromBase';
import useChainInfo from './useChainInfo';

// Takes stake information from the stakeYFD list and produces useful values
const useStake = ({ stake }: any) => {
  // TODO: add checks against current block height to ensure accuracy
  const { currentBlockHeight } = useChainInfo();
  const [timeUntilUnlock, setTimeUntilUnlock] = useState<Duration>({});

  const depositTimestampInNanoSeconds = Number(stake.stake.deposit_timestamp);
  const depositTimestampInSeconds = Math.floor(
    depositTimestampInNanoSeconds / 1000000000
  );

  const depositDateInSeconds = fromUnixTime(depositTimestampInSeconds);
  const depositDateFormatted = format(depositDateInSeconds, 'PPPPpp');

  const lockDuration = stake.stake.lock_duration;
  const lockDurationInSeconds = lockDuration * CHAIN_SECONDS_PER_BLOCK;

  const unlockDateInSeconds = addSeconds(
    depositDateInSeconds,
    lockDurationInSeconds
  );
  const unlockDateFormatted = format(unlockDateInSeconds, 'PPPPpp');

  const depositInterval = intervalToDuration({
    start: depositDateInSeconds,
    end: unlockDateInSeconds
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeUntilUnlock = intervalToDuration({
        start: Date.now(),
        end: unlockDateInSeconds
      });
      setTimeUntilUnlock(newTimeUntilUnlock);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const lockDurationFormatted = formatDuration(depositInterval);
  const timeUntilUnlockFormatted = formatDuration(timeUntilUnlock);

  const amountStaked = convertFromBase(
    stake.stake.asset_deposit_amount
  ).toFixed(4);
  return {
    depositDateFormatted,
    unlockDateFormatted,
    lockDurationFormatted,
    timeUntilUnlockFormatted,
    amountStaked
  };
};

export default useStake;
