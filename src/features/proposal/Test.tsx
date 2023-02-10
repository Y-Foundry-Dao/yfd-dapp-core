import { useRecoilValue } from 'recoil';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Flex,
  Box
} from '@chakra-ui/react';
import ProposalTypeSelector from './create/TypeSelector';
import { inputProposalType } from 'recoil/input/atoms';
import CreationFormWhitelistTokenAddress from './token/Create';
import CreationFormParameter from './governance/create/CreationFormParameter';
import CreationFormSpend from './governance/create/CreationFormSpend';
import FormProposalVault from './vault/Create';
import CreationFormText from './text/Create';
import CreationRoleWhitelist from './role/Create';
import styles from '@scss/app.module.scss';
import { Icons } from '@var/icons';

function ProposalModal({
  isOpen: isOpenProposalModal,
  onClose: onCloseProposalModal
}: any) {
  const proposalTypeSelected = useRecoilValue(inputProposalType);
  return (
    <Modal
      size={['lg', '2xl', '3xl', '4xl']}
      isOpen={isOpenProposalModal}
      onClose={onCloseProposalModal}
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
          {proposalTypeSelected === 'vault' && (
            <FormProposalVault onClose={onCloseProposalModal} />
          )}
          {proposalTypeSelected === 'governanceWhitelistRole' && (
            <CreationRoleWhitelist onClose={onCloseProposalModal} />
          )}
          {proposalTypeSelected === 'governanceWhitelistTokenAddress' && (
            <CreationFormWhitelistTokenAddress onClose={onCloseProposalModal} />
          )}
          {proposalTypeSelected === 'governanceText' && (
            <CreationFormText onClose={onCloseProposalModal} />
          )}
          {/*proposalTypeSelected === 'governanceParameter' && (
            <CreationFormParameter onClose={onCloseProposalModal} />
          )}
          {proposalTypeSelected === 'governanceSpend' && (
            <CreationFormSpend onClose={onCloseProposalModal} />
          )*/}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default ProposalModal;
