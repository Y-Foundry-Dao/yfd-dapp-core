import ProposalInfo from './proposalInfo/ProposalInfo';
import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  useDisclosure
} from '@chakra-ui/react';
import FinderContractLink from 'components/basic/finder/FinderContractLink';
import useContractForge from 'hooks/useContractForge';
import EmergencyProposal from './emergencyList/EmergencyProposal';
import ProposalStatus from './proposalInfo/status/ProposalStatus';
import ProposalModal from '../proposal/ProposalModal';
import ProposalModalButton from '../proposal/ProposalModalButton';

function ProposalList() {
  const { proposals, emergencies } = useContractForge();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {proposals.length === 0 ? (
        'no proposals'
      ) : (
        <>
          <HStack>
            <Heading as="h2" size="lg">
              Current Proposals
            </Heading>
            <ProposalModalButton onOpen={onOpen} />
            <ProposalModal isOpen={isOpen} onClose={onClose} />
          </HStack>

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
                  <ProposalStatus
                    proposalContract={proposal.addr}
                    proposalIndex={proposal.index}
                  />
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
