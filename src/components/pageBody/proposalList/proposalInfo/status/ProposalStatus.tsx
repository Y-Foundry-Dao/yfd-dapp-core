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
    <Box layerStyle="emergencyVote">
      <>{console.log(proposalVoteInfo.vote_state)}</>
      <>{console.log(proposalVoteInfo.expiration)}</>
      <>{console.log(currentBlockHeight)}</>
      <Text>
        Current Voting Status: {Object.keys(proposalVoteInfo.vote_state)[0]}
      </Text>
      {proposalVoteInfo.vote_state.InProgress && (
        <Text>Voting Still In Progress</Text>
      )}
      {currentBlockHeight > proposalVoteInfo.expiration ? (
        <>
          {proposalVoteInfo.vote_state.NotFinalized && (
            <Button
              onClick={async () => {
                await handleClickFinalizeProposal(proposalIndex);
              }}
            >
              Finalize Proposal
            </Button>
          )}
        </>
      ) : null}
    </Box>
  );
}

export default ProposalStatus;
