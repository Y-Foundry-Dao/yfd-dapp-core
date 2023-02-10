import { Box, Tooltip } from '@chakra-ui/react';
import { useRecoilValue, useRecoilState, useRecoilValueLoadable } from 'recoil';
import {
  addressCanProposeGovAtom,
  addressCanProposeVaultAtom
} from '@recoil/connected/address/atoms';

import { Icons } from '@var/icons';
import styles from '@scss/app.module.scss';
let styleProposal = 'material-symbols-outlined';

export default function IconProposal() {
  const canProposeGov = useRecoilValue(addressCanProposeGovAtom);
  const canProposeVault = useRecoilValue(addressCanProposeVaultAtom);
  if (canProposeGov || canProposeVault) {
    styleProposal = styleProposal + ' ' + styles['icon-create'];
    return (
      <>
        <Box className={styles.stakeYfdIcon}>
          <Tooltip label="Propose" aria-label="Propose" placement="top">
            <span className={styleProposal}>{Icons.proposal}</span>
          </Tooltip>
        </Box>
      </>
    );
  }
  return <></>;
}
