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
import { minFYFDVaultPropAtom } from '@recoil/governance/parameters/atoms';

export default function PopoverIconProposal() {
  const {
    isOpen: isOpenProposalCreate,
    onOpen: onOpenProposalCreate,
    onClose: onCloseProposalCreate
  } = useDisclosure();
  const canProposeVault = useRecoilValue(addressCanProposeVaultAtom);
  const canProposeGov = useRecoilValue(addressCanProposeGovAtom);
  const minFYFDVaultProp = useRecoilValue(minFYFDVaultPropAtom);

  const title = minFYFDVaultProp + ' fYFD required';
  const styleIcon = 'material-symbols-outlined ' + styles.iconLockYFD;

  function loadModalPropose() {
    if (canProposeVault || canProposeGov) {
      return <ProposalModalButton onOpen={onOpenProposalCreate} />;
    } else {
      return (
        <span title={title} className={styleIcon}>
          {Icons.propose}
        </span>
      );
    }
  }

  return (
    <>
      <WrapItem className={styles['lockAction']}>
        <SimpleGrid>
          <ProposalModal
            isOpen={isOpenProposalCreate}
            onClose={onCloseProposalCreate}
          />
          <GridItem>{loadModalPropose()}</GridItem>
          <GridItem>Propose</GridItem>
        </SimpleGrid>
      </WrapItem>
    </>
  );
}
