import { Box, Flex, Heading } from '@chakra-ui/react';
import ProposalSubmit from './proposal/ProposalSubmit';
import ProposalList from './proposalList/ProposalList';

function PageBody() {
  return (
    <Box layerStyle={'pageBody'}>
      <Flex direction="column" alignItems="center" gap={5}>
        <Heading as="h1" size="xl">
          Foundry
        </Heading>
        <ProposalSubmit />
        <ProposalList />
      </Flex>
    </Box>
  );
}

export default PageBody;
