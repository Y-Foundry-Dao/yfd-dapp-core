import { Text } from '@chakra-ui/react';
import useContractVaultProposal from 'hooks/useContractVaultProposal';

function ProposalStatus({ proposalContract, proposalIndex }: any) {
  const { proposalVoteInfo } = useContractVaultProposal({
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
