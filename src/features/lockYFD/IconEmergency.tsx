import { useEffect } from 'react';
import { Box, Tooltip } from '@chakra-ui/react';
import { useRecoilValue, useRecoilState, useRecoilValueLoadable } from 'recoil';
import useMsg from '@hooks/useMsg';
import queryGovernanceParameter from '@utilities/messagesQuery/forge/queryGovernanceParameter';

import { minFYFDEmergencyPropAtom } from '@recoil/governance/parameters/atoms';
import { currentContractForgeAtom } from '@recoil/chainInfo/atoms';
import { selectMyFYFD } from '@recoil/connected/balance/selectors';
import { addressCanProposeEmergencyAtom } from '@recoil/connected/address/atoms';
import { Icons } from '@var/icons';
import styles from '@scss/app.module.scss';
import NoticeLoading from '@components/NoticeLoading';

let styleGuardian = 'material-symbols-outlined';
export default function IconEmergency() {
  const canProposeEmergency = useRecoilValue(addressCanProposeEmergencyAtom);

  if (canProposeEmergency) {
    styleGuardian = styleGuardian + ' ' + styles['icon-create'];
    return (
      <>
        <Box className={styles.stakeYfdIcon}>
          <Tooltip label="Protect" aria-label="Protect" placement="top">
            <span className={styleGuardian}>{Icons.guardian}</span>
          </Tooltip>
        </Box>
      </>
    );
  }

  return <></>;
}
