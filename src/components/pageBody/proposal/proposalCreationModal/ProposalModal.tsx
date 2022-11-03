import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react';
import ProposalCreationForm from './proposalCreationForm/ProposalCreationForm';

function ProposalModal({ isOpen, onClose }: any) {
  return (
    <Modal size={['lg', '2xl', '3xl', '4xl']} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Submit your own proposal</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <ProposalCreationForm onClose={onClose} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default ProposalModal;
