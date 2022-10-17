import { Button, Flex, Heading } from '@chakra-ui/react';
import useHandleClicksProposal from 'hooks/useHandleClicksProposal';
import InputEmergencyExpiration from './inputs/InputEmergencyExpiration';
import InputEmergencyJustification from './inputs/InputEmergencyJustification';

function EmergencyVote({ proposalIndex }: any) {
  const { handleClickEmergencyEndProposal } = useHandleClicksProposal({
    proposalIndex
  });
  return (
    <Flex
      layerStyle="emergencyVote"
      direction="column"
      align="center"
      rowGap={4}
    >
      <Heading color="red.800" as="h4" size="md">
        Emergency Vote to End Proposal
      </Heading>
      <InputEmergencyExpiration proposalIndex={proposalIndex} />
      <InputEmergencyJustification proposalIndex={proposalIndex} />
      <Button onClick={async () => await handleClickEmergencyEndProposal()}>
        Initiate Emergency Vote
      </Button>
    </Flex>
  );
}

export default EmergencyVote;
