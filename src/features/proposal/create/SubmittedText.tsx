import { Text } from '@chakra-ui/react';

function ProposalSubmittedText({ onClose }: any) {
  return (
    <Text cursor="pointer" onClick={onClose}>
      Submitted! Click here to Close.
    </Text>
  );
}

export default ProposalSubmittedText;
