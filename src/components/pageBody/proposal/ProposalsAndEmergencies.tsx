import ProposalInfo from './proposalList/proposalInfo/ProposalInfo';
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
import EmergencyProposal from './emergencyList/emergencyInfo/EmergencyProposalInfo';
import ProposalStatus from './proposalList/proposalInfo/status/ProposalStatus';
import ProposalModal from './proposalCreationModal/ProposalModal';
import ProposalModalButton from './proposalCreationModal/ProposalModalButton';
import ProposalListAccordions from './proposalList/ProposalListAccordions';
import EmergencyListAccordions from './emergencyList/EmergencyListAccordions';

function ProposalsAndEmergencies() {
  const { proposals } = useContractForge();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <ProposalModalButton onOpen={onOpen} />
      <ProposalModal isOpen={isOpen} onClose={onClose} />
      {proposals.length === 0 ? (
        'no proposals'
      ) : (
        <>
          {console.log(proposals)}
          <Heading as="h2" size="lg">
            Current Proposals
          </Heading>
          <ProposalListAccordions proposals={proposals} />
          <Heading as="h2" size="lg">
            Current Emergencies
          </Heading>
          {/* <EmergencyListAccordions emergencies={emergencies} /> */}
        </>
      )}
    </>
  );
}

export default ProposalsAndEmergencies;
