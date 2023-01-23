import { Text } from '@chakra-ui/react';
import useContractVaultProposal from 'hooks/useContractVaultProposal';
import NoticeLoading from 'components/NoticeLoading';

function ProposalStatus({ proposalContract, proposalIndex }: any) {
  const { proposalVoteInfo } = useContractVaultProposal({
    proposalContract
  });
  return (
    <>
      {proposalVoteInfo.vote_state === undefined ? (
        <NoticeLoading />
      ) : (
        <Text textStyle="voteStatus">
          {Object.keys(proposalVoteInfo.vote_state)[0]}
        </Text>
      )}
    </>
  );
}

export default ProposalStatus;
