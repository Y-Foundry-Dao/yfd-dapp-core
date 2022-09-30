import { Button, Box } from '@chakra-ui/react';
import { useConnectedWallet } from '@terra-money/wallet-provider';
import useHandleClicks from 'hooks/useHandleClicks';
import React from 'react';

function ProposalSubmit() {
  const connectedWallet = useConnectedWallet();
  const { handleClickProposal } = useHandleClicks();

  return (
    <Box bg="red.500" maxW="md">
      <Button
        onClick={() => {
          handleClickProposal();
        }}
      >
        ProposalSubmit
      </Button>
    </Box>
  );
}

export default ProposalSubmit;
