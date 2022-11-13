import useContractVaultProposal from 'hooks/useContractVaultProposal';
import React from 'react';

function CurrentVotes({ proposalContract, proposalIndex }: any) {
  const { proposalVoteInfo } = useContractVaultProposal({
    proposalContract,
    proposalIndex
  });
  return <>{/* {console.log(proposalVoteInfo)} */}</>;
}

export default CurrentVotes;
