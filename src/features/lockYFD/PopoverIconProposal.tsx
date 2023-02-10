import {
  useDisclosure,
  WrapItem,
  SimpleGrid,
  GridItem
} from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';

import { Icons } from '@var/icons';
import styles from '@scss/app.module.scss';

import ProposalModal from '@features/proposal/modal';
import ProposalModalButton from '@features/proposal/create/ButtonModelOpen';
import {
  addressCanProposeGovAtom,
  addressCanProposeVaultAtom
} from '@recoil/connected/address/atoms';

export default function PopoverIconProposal() {
  const {
    isOpen: isOpenProposalCreate,
    onOpen: onOpenProposalCreate,
    onClose: onCloseProposalCreate
  } = useDisclosure();
  const canProposeVault = useRecoilValue(addressCanProposeVaultAtom);
  const canProposeGov = useRecoilValue(addressCanProposeGovAtom);

  function loadModalPropose() {
    if (canProposeVault || canProposeGov) {
      return <ProposalModalButton onOpen={onOpenProposalCreate} />;
    } else {
      const styleIcon = 'icon-enable material-symbols-outlined';
      return <span className={styleIcon}>{Icons.propose}</span>;
    }
  }

  return (
    <>
      <WrapItem className={styles['lockAction']}>
        <SimpleGrid>
          <GridItem>{loadModalPropose()}</GridItem>
          <ProposalModal
            isOpen={isOpenProposalCreate}
            onClose={onCloseProposalCreate}
          />
          <GridItem>Propose</GridItem>
        </SimpleGrid>
      </WrapItem>
    </>
  );
}
