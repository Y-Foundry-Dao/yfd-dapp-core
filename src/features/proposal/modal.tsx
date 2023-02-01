import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react';
import ProposalCreationForm from './vault/Create';
import ProposalTypeSelector from './create/TypeSelector';
import CreationFormWhitelistWalletAddress from './governance/create/CreationFormWhitelistWalletAddress';
import { inputProposalType } from 'recoil/input/atoms';
import { useRecoilValue } from 'recoil';
import CreationFormWhitelistTokenAddress from './governance/create/CreationFormWhitelistTokenAddress';
import CreationFormParameter from './governance/create/CreationFormParameter';
import CreationFormText from './text/Create';
import CreationFormSpend from './governance/create/CreationFormSpend';
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
      preserveScrollBarGap={true}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <span
            className={
              styles['icon-create'] +
              ' ' +
              styles['icon-menu'] +
              ' material-symbols-outlined'
            }
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
