import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react';
import ProposalCreationForm from '../proposal/proposalCreationModal/vaultProposalCreationForm/VaultProposalCreationForm';
import ProposalTypeSelector from '../proposal/proposalCreationModal/proposalTypeSelector/ProposalTypeSelector';
import CreationFormWhitelistWalletAddress from '../proposal/proposalCreationModal/governanceProposalCreationForm/CreationFormWhitelistWalletAddress';
import { inputProposalType } from 'recoil/input/atoms';
import { useRecoilValue } from 'recoil';
import CreationFormWhitelistTokenAddress from '../proposal/proposalCreationModal/governanceProposalCreationForm/CreationFormWhitelistTokenAddress';
import CreationFormParameter from '../proposal/proposalCreationModal/governanceProposalCreationForm/CreationFormParameter';
import CreationFormText from '../proposal/proposalCreationModal/governanceProposalCreationForm/CreationFormText';
import CreationFormSpend from '../proposal/proposalCreationModal/governanceProposalCreationForm/CreationFormSpend';
import styles from '@scss/app.module.scss';
import { Icons } from '@var/icons';

function ProposalModal({ isOpen, onClose }: any) {
  const proposalTypeSelected = useRecoilValue(inputProposalType);
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
        <ModalHeader>
          <span
            className={styles['icon-create'] + ' material-symbols-outlined'}
          >
            {Icons.propose}
          </span>
          Create A Proposal
        </ModalHeader>
        <ProposalTypeSelector />
        <ModalCloseButton />
        <ModalBody>
          {/* <ProposalCreationForm onClose={onClose} /> */}
          {proposalTypeSelected === 'vault' && (
            <ProposalCreationForm onClose={onClose} />
          )}
          {proposalTypeSelected === 'governanceWhitelistWalletAddress' && (
            <CreationFormWhitelistWalletAddress onClose={onClose} />
          )}
          {proposalTypeSelected === 'governanceWhitelistTokenAddress' && (
            <CreationFormWhitelistTokenAddress onClose={onClose} />
          )}
          {proposalTypeSelected === 'governanceParameter' && (
            <CreationFormParameter />
          )}
          {proposalTypeSelected === 'governanceText' && <CreationFormText />}
          {proposalTypeSelected === 'governanceSpend' && <CreationFormSpend />}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default ProposalModal;
