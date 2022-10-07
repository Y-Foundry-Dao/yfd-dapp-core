import ProposalInfo from './ProposalInfo';
import { Box, Divider, Flex, Heading } from '@chakra-ui/react';
import FinderContractLink from 'components/basic/finder/FinderContractLink';
import useContractForge from 'hooks/useContractForge';

function ProposalList() {
  const { proposals } = useContractForge();

  return (
    <>
      {proposals.length === 0 ? (
        'no proposals'
      ) : (
        <>
          <Heading as="h2" size="lg">
            Current Proposals
          </Heading>
          <Flex wrap="wrap" gap={5} justifyContent="center">
            {proposals.map((proposal: any) => {
              return (
                <Box
                  key={proposal.addr}
                  maxW="45%"
                  my={6}
                  p={5}
                  borderRadius="md"
                  bg="blue.700"
                >
                  <FinderContractLink contract={proposal.addr} />
                  <Divider my={4} />
                  <ProposalInfo proposalContract={proposal.addr} />
                </Box>
              );
            })}
          </Flex>
        </>
      )}
    </>
  );
}

export default ProposalList;
