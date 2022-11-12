import { Button } from '@chakra-ui/react';
import useContractProposal from 'hooks/useContractProposal';
import useContractVaultProposal from 'hooks/useContractVaultProposal';
import useHandleClicks from 'hooks/useHandleClicks';
import { useRecoilValue } from 'recoil';
import { currentBlockHeightAtom } from 'recoil/chainInfo/atoms';

function ProposalFinalizeButton({ proposalContract, proposalIndex }: any) {
  const currentBlockHeight = useRecoilValue(currentBlockHeightAtom);
  const { handleClickFinalizeProposal } = useHandleClicks();
  const { proposalVoteInfo } = useContractVaultProposal({
    proposalContract
  });
  return (
    <>
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
    </>
  );
}

export default ProposalFinalizeButton;
