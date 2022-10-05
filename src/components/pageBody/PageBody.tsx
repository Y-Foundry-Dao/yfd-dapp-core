import { Box, Flex, Heading } from '@chakra-ui/react';
import ProposalSubmit from './proposal/ProposalSubmit';
import ProposalList from './proposalList/ProposalList';
import StakeYFD from './stake/StakeYFD';

function PageBody() {
  return (
    <Box
      w="100%"
      // bgGradient={[
      //   'linear(to-tr, orange.700, yellow.400)',
      //   'linear(to-t, orange.50, teal.200)',
      //   'linear(to-b, orange.50, orange.300)'
      // ]}
    >
      <Flex direction="column" alignItems="center" gap={5}>
        <Heading as="h1" size="xl">
          Foundry
        </Heading>
        <StakeYFD />
        <ProposalSubmit />
        <ProposalList />
      </Flex>
    </Box>
  );
}

export default PageBody;
