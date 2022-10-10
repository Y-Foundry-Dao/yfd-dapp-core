import { Box, Flex, Heading } from '@chakra-ui/react';
import ProposalSubmit from './proposal/ProposalSubmit';
import ProposalList from './proposalList/ProposalList';
import StakedYFD from './stake/stakedYFD/StakedYFD';

function PageBody() {
  return (
    <Box layerStyle={'pageBody'} textStyle={'pageBody'}>
      <Flex direction="column" alignItems="center" gap={5}>
        <Heading as="h1" size="xl">
          Foundry
        </Heading>
        <StakedYFD />
        <ProposalSubmit />
        <ProposalList />
      </Flex>
    </Box>
  );
}

export default PageBody;
