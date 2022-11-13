import { Button } from '@chakra-ui/react';
import useContractVaultProposal from 'hooks/useContractVaultProposal';
import useHandleClicks from 'hooks/useHandleClicks';
import { useRecoilValue } from 'recoil';
import { currentBlockHeightAtom } from 'recoil/chainInfo/atoms';

function ProposalFinalizeButton({ proposalContract, proposalIndex }: any) {
  const currentBlockHeight = useRecoilValue(currentBlockHeightAtom);
  const { handleClickFinalizeVaultProposal } = useHandleClicks();
  const { proposalVoteInfo } = useContractVaultProposal({
    proposalContract
  });
  const voteNotFinalized = proposalVoteInfo.vote_state?.NotFinalized;
  const quorumBlock = proposalVoteInfo.quorum_block;
  if (quorumBlock) {
    if (voteNotFinalized) {
      return (
        <Button
          onClick={async () => {
            await handleClickFinalizeVaultProposal(proposalIndex);
          }}
        >
          Finalize Proposal
        </Button>
      );
    } else {
      return null;
    }
  } else {
    return null;
  }
}

export default ProposalFinalizeButton;
