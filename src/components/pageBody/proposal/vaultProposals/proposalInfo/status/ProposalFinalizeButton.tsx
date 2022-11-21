import { Button } from '@chakra-ui/react';
import useContractVaultProposal from 'hooks/useContractVaultProposal';
import useHandleClicks from 'hooks/useHandleClicks';
import { useRecoilValue } from 'recoil';
import { currentBlockHeightAtom } from 'recoil/chainInfo/atoms';

function ProposalFinalizeButton({ proposalContract, proposalIndex }: any) {
  const currentBlockHeight = useRecoilValue(currentBlockHeightAtom);
  const { handleClickFinalizeVaultProposal } = useHandleClicks();
  const { proposalVoteInfo, vaultProposalInfo } = useContractVaultProposal({
    proposalContract,
    proposalIndex
  });
  const isVoteNotFinalized = () => {
    if (proposalVoteInfo.vote_state?.NotFinalized) {
      return true;
    } else {
      return false;
    }
  };
  const isCurrentBlockAfterClosingBlock = () => {
    return currentBlockHeight > vaultProposalInfo.closing_block;
  };
  const isProposalAbleToFinalize = () => {
    return isCurrentBlockAfterClosingBlock() && isVoteNotFinalized();
  };
  if (isProposalAbleToFinalize()) {
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
}

export default ProposalFinalizeButton;
