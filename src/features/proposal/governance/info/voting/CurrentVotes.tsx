import useContractGovernanceProposal from 'hooks/useContractGovernanceProposal';
import useContractVaultProposal from 'hooks/useContractVaultProposal';
import React from 'react';

function CurrentVotes({ proposalContract, proposalIndex }: any) {
  const { proposalVoteInfo } = useContractGovernanceProposal({
    proposalContract,
    proposalIndex
  });
  return <>{/* {console.log(proposalVoteInfo)} */}</>;
}

export default CurrentVotes;
