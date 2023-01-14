import {
  Button,
  Popover,
  PopoverTrigger,
  Flex,
  Box,
  Tooltip
} from '@chakra-ui/react';
import { useRecoilValueLoadable } from 'recoil';
import { MyYFD, MyFYFD } from '@utilities/MyValues';

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
  const balanceYFD = MyYFD();
  const balancefYFD = MyFYFD();
  /*
  const minFYFDVaultProp = useRecoilValueLoadable(selectMinFYFDVaultProp);
  const minFYFDGovProp = useRecoilValueLoadable(selectMinFYFDGovProp);
  const minFYFDEmergencyProp = useRecoilValueLoadable(
    selectMinFYFDEmergencyProp
  );
  */
  const minFYFDVaultProp = 0;
  const minFYFDGovProp = 0;
  const minFYFDEmergencyProp = 0;

  if (
    minFYFDVaultProp.state &&
    typeof minFYFDVaultProp.contents &&
    minFYFDGovProp.state &&
    minFYFDGovProp.contents &&
    minFYFDEmergencyProp.state &&
    minFYFDEmergencyProp.contents
  ) {
    const vKey = Object.keys(minFYFDVaultProp.contents.parameter_type)[0];
    const minVaultValue =
      minFYFDVaultProp.contents.parameter_type[vKey].value.toString();
    const minVaultName = minFYFDVaultProp.contents.name || undefined;
    console.log(minVaultName + ': ' + minVaultValue);

    const gKey = Object.keys(minFYFDGovProp.contents.parameter_type)[0];
    const minGovValue =
      minFYFDGovProp.contents.parameter_type[vKey].value.toString();
    const minGovName = minFYFDGovProp.contents.name;
    console.log(minGovName + ': ' + minGovValue);

    const eKey = Object.keys(minFYFDEmergencyProp.contents.parameter_type)[0];
    const minEmergencyValue =
      minFYFDEmergencyProp.contents.parameter_type[eKey].value.toString();
    const minEmergencyName = minFYFDEmergencyProp.contents.name || undefined;
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
  } else {
    console.warn('Governance parameters are not yet loaded');
    console.error('minFYFDVaultProp.state is undefined');
    return <></>;
  }
}
