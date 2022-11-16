import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { currentBlockHeightAtom } from 'recoil/chainInfo/atoms';
import { add, formatDuration, intervalToDuration } from 'date-fns';

const useVaultProposalInfo = ({ vaultProposalInfo }: any) => {
  const [blocksUntilVoteClosed, setBlocksUntilVoteClosed] = useState(0);
  const [timeUntilVoteClosed, setTimeUntilVoteClosed] = useState<any>('');

  const closingBlock = vaultProposalInfo.closing_block;
  const currentBlockHeight = useRecoilValue(currentBlockHeightAtom);
  const currentDate = Date.now();

  const getBlocksUntilVoteClosed = () => {
    if (currentBlockHeight) {
      return closingBlock - currentBlockHeight;
    } else {
      return 0;
    }
  };

  const getEstimatedTimeUntilVoteClose = () => {
    // if block has already passed expiration then return complete instead of the negative number
    if (blocksUntilVoteClosed <= 0) {
      return 'Voting Time Ended';
    }
    // estimated 6 seconds per block times amount of blocks until vote closing
    const secondsUntilVoteClose = blocksUntilVoteClosed * 6;

    const voteClosedAt = add(currentDate, { seconds: secondsUntilVoteClose });

    const durationUntilVoteClosed = intervalToDuration({
      start: currentDate,
      end: voteClosedAt
    });
    const timeUntilVoteClosedFormatted = formatDuration(
      durationUntilVoteClosed
    );
    console.log(timeUntilVoteClosedFormatted);

    return timeUntilVoteClosedFormatted;
  };

  const setBlocksUntilVoteClosedToState = () => {
    const blocks = getBlocksUntilVoteClosed();
    setBlocksUntilVoteClosed(blocks);
  };

  const setTimeUntilVoteClosedToState = () => {
    const time = getEstimatedTimeUntilVoteClose();
    console.log('time in set', time);
    setTimeUntilVoteClosed(time);
  };

  useEffect(() => {
    setBlocksUntilVoteClosedToState();
  }, [currentBlockHeight]);

  useEffect(() => {
    setTimeUntilVoteClosedToState();
  }, [blocksUntilVoteClosed]);

  return {
    blocksUntilVoteClosed,
    timeUntilVoteClosed
  };
};

export default useVaultProposalInfo;
