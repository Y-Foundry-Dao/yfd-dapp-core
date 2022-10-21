import { Button } from '@chakra-ui/react';

function ProposalModalButton({ onOpen }: any) {
  return (
    <Button size="lg" bg="color2" onClick={onOpen}>
      Create Proposal
    </Button>
  );
}

export default ProposalModalButton;
