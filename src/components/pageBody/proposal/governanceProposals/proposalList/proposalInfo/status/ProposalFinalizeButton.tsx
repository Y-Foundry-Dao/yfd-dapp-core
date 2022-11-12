import { Button } from '@chakra-ui/react';
import useContractGovernanceProposal from 'hooks/useContractGovernanceProposal';
import useHandleClicks from 'hooks/useHandleClicks';
import { useRecoilValue } from 'recoil';
import { currentBlockHeightAtom } from 'recoil/chainInfo/atoms';

function ProposalFinalizeButton({ proposalContract, proposalIndex }: any) {
  const currentBlockHeight = useRecoilValue(currentBlockHeightAtom);
  const { handleClickFinalizeProposal } = useHandleClicks();
  const { proposalVoteInfo } = useContractGovernanceProposal({
    proposalContract
  });
  const voteNotFinalized = proposalVoteInfo.vote_state?.NotFinalized;
  if (voteNotFinalized) {
    return (
      <Button
        onClick={async () => {
          await handleClickFinalizeProposal(proposalIndex);
        }}
      >
        Finalize Proposal
      </Button>
    );
  } else {
    return null;
  }
}

export default ProposalFinalizeButton;
