import { Text } from '@chakra-ui/react';
import useContractVaultProposal from 'hooks/useContractVaultProposal';
import styleLoader from '@scss/loader.module.scss';

function ProposalStatus({ proposalContract, proposalIndex }: any) {
  const { proposalVoteInfo } = useContractVaultProposal({
    proposalContract
  });
  return (
    <>
      {proposalVoteInfo.vote_state === undefined ? (
        <div className={styleLoader.loader}>loading...</div>
      ) : (
        <Text textStyle="voteStatus">
          {Object.keys(proposalVoteInfo.vote_state)[0]}
        </Text>
      )}
    </>
  );
}

export default ProposalStatus;
