import { Box, Flex, Heading } from '@chakra-ui/react';
import ProposalsList from './proposal/ProposalsList';

function PageBody() {
  return (
    <Box layerStyle={'pageBody'} textStyle={'pageBody'}>
      <Flex direction="column" alignItems="center" gap={5}>
        <Heading as="h1" size="xl">
          Foundry
        </Heading>
        <ProposalsList />
      </Flex>
    </Box>
  );
}

export default PageBody;
