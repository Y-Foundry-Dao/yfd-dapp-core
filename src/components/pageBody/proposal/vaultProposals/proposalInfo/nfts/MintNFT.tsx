import { Button } from '@chakra-ui/react';
import useHandleClicksProposal from 'hooks/useHandleClicksProposal';

function MintNFT({ proposalContract, proposalIndex }: any) {
  const { handleClickMintNFT } = useHandleClicksProposal({
    proposalContract,
    proposalIndex
  });
  return (
    <Button
      onClick={async () => {
        await handleClickMintNFT();
      }}
    >
      mintNFT
    </Button>
  );
}

export default MintNFT;
