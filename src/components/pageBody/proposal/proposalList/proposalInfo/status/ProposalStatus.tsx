import { Box, Button, Text } from '@chakra-ui/react';
import useContractProposal from 'hooks/useContractProposal';
import useHandleClicks from 'hooks/useHandleClicks';
import { useRecoilValue } from 'recoil';
import { currentBlockHeightAtom } from 'recoil/chainInfo/atoms';

function ProposalStatus({ proposalContract, proposalIndex }: any) {
  const currentBlockHeight = useRecoilValue(currentBlockHeightAtom);
  const { handleClickFinalizeProposal } = useHandleClicks();
  const { proposalVoteInfo } = useContractProposal({
    proposalContract
  });
  return (
    <>
      {proposalVoteInfo.vote_state === undefined ? (
        <Text>Loading...</Text>
      ) : (
        <Text textStyle="voteStatus">
          Current Voting Status: {Object.keys(proposalVoteInfo.vote_state)[0]}
        </Text>
      )}
    </>
  );
}

export default ProposalStatus;
