import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react';
import ProposalCreationForm from './proposalCreationForm/VaultProposalCreationForm';
import ProposalTypeSelector from './proposalTypeSelector/ProposalTypeSelector';

function ProposalModal({ isOpen, onClose }: any) {
  return (
    <Modal
      size={['lg', '2xl', '3xl', '4xl']}
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      useInert={false}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Submit your own proposal</ModalHeader>
        <ProposalTypeSelector />
        <ModalCloseButton />
        <ModalBody>
          <ProposalCreationForm onClose={onClose} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default ProposalModal;
