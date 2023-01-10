import {
  Button,
  Popover,
  PopoverTrigger,
  Flex,
  Box,
  Tooltip
} from '@chakra-ui/react';
import { useRecoilValueLoadable } from 'recoil';
import { myYFD, myFYFD } from '@utilities/myValues';

import {
  selectMinFYFDVaultProp,
  selectMinFYFDGovProp,
  selectMinFYFDEmergencyProp
} from '@recoil/governance/parameters/selectors';

import { Icons } from '@var/icons';
import styles from '@scss/app.module.scss';

import FyfdPopoverEmpty from './PopoverEmpty';
import FyfdPopoverBalance from './PopoverBalance';

let styleVote = 'material-symbols-outlined';
let styleProposal = 'material-symbols-outlined';
let styleGuardian = 'material-symbols-outlined';

export default function LockYFDMenu() {
  const balanceYFD = myYFD();
  const balancefYFD = myFYFD();
  const minFYFDVaultProp = useRecoilValueLoadable(selectMinFYFDVaultProp);
  const minFYFDGovProp = useRecoilValueLoadable(selectMinFYFDGovProp);
  const minFYFDEmergencyProp = useRecoilValueLoadable(
    selectMinFYFDEmergencyProp
  );

  const vKey = Object.keys(minFYFDVaultProp.contents.parameter_type)[0];
  const minVaultValue =
    minFYFDVaultProp.contents.parameter_type[vKey].value.toString();
  const minVaultName = minFYFDVaultProp.contents.name;
  console.log(minVaultName + ': ' + minVaultName);

  const gKey = Object.keys(minFYFDGovProp.contents.parameter_type)[0];
  const minGovName =
    minFYFDGovProp.contents.parameter_type[vKey].value.toString();
  const minGovValue = minFYFDGovProp.contents.name;
  console.log(minGovName + ': ' + minGovValue);

  const eKey = Object.keys(minFYFDEmergencyProp.contents.parameter_type)[0];
  const minEmergencyName =
    minFYFDEmergencyProp.contents.parameter_type[eKey].value.toString();
  const minEmergencyValue = minFYFDEmergencyProp.contents.name;
  console.log(minEmergencyName + ': ' + minEmergencyValue);

  /*
  console.log(
    '{MENU.tsx} Vault Proposal Minimum ( ' + vaultMinimum + ' ) FYFD: ',
    JSON.stringify(minFYFDVaultProp)
  );
  console.log(
    '{MENU.tsx} Vault Proposal Minimum FYFD: ',
    JSON.stringify(minFYFDGovProp)
  );
  console.log(
    '{MENU.tsx} Emergency Proposal Minimum FYFD: ',
    JSON.stringify(minFYFDEmergencyProp)
  );
  */

  if (minGovValue < +balancefYFD) {
    styleVote = styleVote + ' ' + styles['icon-create'];
  }

  if (minVaultValue < +balancefYFD) {
    styleProposal = styleProposal + ' ' + styles['icon-create'];
  }

  if (minEmergencyValue < +balancefYFD) {
    styleGuardian = styleGuardian + ' ' + styles['icon-create'];
  }

  //  console.log('BalancefYFD', BalancefYFD);
  if (1 > +balancefYFD) {
    return (
      <Popover placement="bottom-end">
        <PopoverTrigger>
          <Button className={styles.menuButton}>Lock $YFD</Button>
        </PopoverTrigger>
        <FyfdPopoverEmpty />
      </Popover>
    );
  } else {
    return (
      <Popover>
        <PopoverTrigger>
          <Button className={styles.stakeYfd}>
            <Flex className={styles.stakeYfdIcons}>
              <Box className={styles.stakeYfdIcon}>
                <Tooltip
                  label={minGovName}
                  aria-label={minGovName}
                  placement="top"
                >
                  <span className={styleVote}>{Icons.vote}</span>
                </Tooltip>
              </Box>
              <Box className={styles.stakeYfdIcon}>
                <Tooltip
                  label={minVaultName}
                  aria-label={minVaultName}
                  placement="top"
                >
                  <span className={styleProposal}>{Icons.proposal}</span>
                </Tooltip>
              </Box>
              <Box className={styles.stakeYfdIcon}>
                <Tooltip
                  label={minEmergencyName}
                  aria-label={minEmergencyName}
                  placement="top"
                >
                  <span className={styleGuardian}>{Icons.guardian}</span>
                </Tooltip>
              </Box>
            </Flex>
          </Button>
        </PopoverTrigger>
        <FyfdPopoverBalance />
      </Popover>
    );
  }
}
