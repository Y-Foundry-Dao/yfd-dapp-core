import ProposalInfo from './governanceProposals/proposalList/proposalInfo/ProposalInfo';
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
import ProposalStatus from './governanceProposals/proposalList/proposalInfo/status/ProposalStatus';
import ProposalModal from './proposalCreationModal/ProposalModal';
import ProposalModalButton from './proposalCreationModal/ProposalModalButton';
import ProposalListAccordions from './governanceProposals/proposalList/ProposalListAccordions';
import EmergencyListAccordions from './emergencyList/EmergencyListAccordions';
import GovernanceProposals from './governanceProposals/GovernanceProposals';
import VaultProposals from './vaultProposals/VaultProposals';

function ProposalsList() {
  const { proposals, vaultProposals } = useContractForge();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <ProposalModalButton onOpen={onOpen} />
      <ProposalModal isOpen={isOpen} onClose={onClose} />
      <GovernanceProposals />
      <VaultProposals />
    </>
  );
}

export default ProposalsList;
