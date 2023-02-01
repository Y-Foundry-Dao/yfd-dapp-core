import { useEffect } from 'react';
import { Box, Tooltip } from '@chakra-ui/react';
import { useRecoilValue, useRecoilState, useRecoilValueLoadable } from 'recoil';
import useMsg from '@hooks/useMsg';
import queryGovernanceParameter from '@utilities/messagesQuery/forge/queryGovernanceParameter';

import {
  minFYFDVaultPropAtom,
  minFYFDGovPropAtom
} from '@recoil/governance/parameters/atoms';
import { currentContractForgeAtom } from '@recoil/chainInfo/atoms';
import { selectMyFYFD } from '@recoil/connected/balance/selectors';
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

  useEffect(() => {
    if (canProposeGov || canProposeVault) {
      styleProposal = styleProposal + ' ' + styles['icon-create'];
    }
  }, [canProposeGov, canProposeVault]);

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
