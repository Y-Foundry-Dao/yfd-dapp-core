import ProposalInfo from './proposalInfo/ProposalInfo';
import { Box, Divider, Flex, Heading } from '@chakra-ui/react';
import FinderContractLink from 'components/basic/finder/FinderContractLink';
import useContractForge from 'hooks/useContractForge';
import EmergencyProposal from './emergencyList/EmergencyProposal';

function ProposalList() {
  const { proposals, emergencies } = useContractForge();

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
                  maxW={{ base: 'none', sm: '75%', md: '60%', lg: '50%' }}
                  my={6}
                  p={5}
                  borderRadius="md"
                  bg="blue.700"
                >
                  <FinderContractLink contract={proposal.addr} />
                  <Divider my={4} />
                  <ProposalInfo
                    proposalContract={proposal.addr}
                    proposalIndex={proposal.index}
                  />
                </Box>
              );
            })}
          </Flex>
          <Heading as="h2" size="lg">
            Current Emergencies
          </Heading>
          <Flex wrap="wrap" gap={5} justifyContent="center">
            {emergencies.map((emergency: any) => {
              return (
                <Box
                  key={emergency.addr}
                  maxW={{ base: 'none', sm: '75%', md: '60%', lg: '50%' }}
                  my={6}
                  p={5}
                  borderRadius="md"
                  bg="red.700"
                >
                  <EmergencyProposal emergency={emergency} />
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
