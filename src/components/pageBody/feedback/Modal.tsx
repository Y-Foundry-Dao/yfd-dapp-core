import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';
import FeedbackForm from './Form';

function FeedbackModal({ isOpen, onClose }: any) {
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
        <ModalHeader>Submit your Feedback</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FeedbackForm onClose={onClose} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default FeedbackModal;
