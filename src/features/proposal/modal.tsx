import { useRecoilValue } from 'recoil';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Flex,
  Box,
  Spacer
} from '@chakra-ui/react';
import ProposalTypeSelector from './create/TypeSelector';
import { inputProposalType } from 'recoil/input/atoms';
import CreationFormWhitelistTokenAddress from './governance/create/CreationFormWhitelistTokenAddress';
import CreationFormParameter from './governance/create/CreationFormParameter';
import CreationFormSpend from './governance/create/CreationFormSpend';
import FormProposalVault from './vault/Create';
import CreationFormText from './text/Create';
import CreationRoleWhitelist from './role/Create';
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
          <Flex direction="row">
            <Box>
              <span
                className={
                  'material-symbols-outlined ' + styles['iconProposalCreate']
                }
              >
                {Icons.propose}
              </span>
            </Box>
            <Box width="50%">
              <span className={styles['text-header-proposal-create']}>
                Create Proposal
              </span>
            </Box>
            <Box>
              <ProposalTypeSelector />
            </Box>
          </Flex>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {/* <ProposalCreationForm onClose={onClose} /> */}
          {proposalTypeSelected === 'vault' && (
            <FormProposalVault onClose={onClose} />
          )}
          {proposalTypeSelected === 'governanceWhitelistRole' && (
            <CreationRoleWhitelist onClose={onClose} />
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
