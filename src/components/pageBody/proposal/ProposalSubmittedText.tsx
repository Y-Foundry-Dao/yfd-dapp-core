import { Text } from '@chakra-ui/react';

function ProposalSubmittedText({ onClose }: any) {
  return (
    <Text cursor="pointer" onClick={onClose}>
      Submitted! Click here to close
    </Text>
  );
}

export default ProposalSubmittedText;
