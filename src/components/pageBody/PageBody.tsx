import { Flex, Heading } from '@chakra-ui/react';
import ProposalSubmit from './proposal/ProposalSubmit';
import StakeYFD from './stake/StakeYFD';

function PageBody() {
  return (
    <Flex direction="column" alignItems="center" gap={5}>
      <Heading as="h1" size="xl">
        Foundry
      </Heading>
      <StakeYFD />
      <ProposalSubmit />
    </Flex>
  );
}

export default PageBody;
