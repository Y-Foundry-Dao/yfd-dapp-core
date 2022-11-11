import { useDisclosure } from '@chakra-ui/react';
import ProposalModal from './proposalCreationModal/ProposalModal';
import ProposalModalButton from './proposalCreationModal/ProposalModalButton';
import GovernanceProposals from './governanceProposals/GovernanceProposals';
import VaultProposals from './vaultProposals/VaultProposals';

function ProposalsList() {
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
