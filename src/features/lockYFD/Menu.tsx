import { useEffect } from 'react';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';
import {
  Button,
  Popover,
  PopoverTrigger,
  Flex,
  Box,
  Tooltip
} from '@chakra-ui/react';
import { addressConnectedAtom } from '@recoil/governance/parameters/atoms';
// import { myYFD, myFYFD } from '@utilities/myValues';

import {
  selectMinFYFDVaultProp,
  selectMinFYFDGovProp,
  selectMinFYFDEmergencyProp
} from '@recoil/governance/parameters/selectors';

import { Icons } from '@var/icons';
import styles from '@scss/app.module.scss';

<<<<<<< HEAD
//import FyfdPopoverEmpty from './PopoverEmpty';
//import FyfdPopoverBalance from './PopoverBalance';
import { selectMyFYFD, selectMyYFD } from '@recoil/connected/balance/selectors';

=======
>>>>>>> origin/fix-types
const styleVote = 'material-symbols-outlined';
const styleProposal = 'material-symbols-outlined';
const styleGuardian = 'material-symbols-outlined';

export default function LockYFDMenu() {
  const balanceYFD = useRecoilValueLoadable(selectMyYFD);
  const balancefYFD = useRecoilValueLoadable(selectMyFYFD);
  //  const minFYFDVaultProp = useRecoilValueLoadable(selectMinFYFDVaultProp);
  //const minFYFDGovProp = useRecoilValueLoadable(selectMinFYFDGovProp);
  //const minFYFDEmergencyProp = useRecoilValueLoadable(
  // selectMinFYFDEmergencyProp
  //);
  return (
    <>
      <Popover placement="bottom-end">
        <PopoverTrigger>
          <Button className={styles.menuButton}>Lock $YFD</Button>
        </PopoverTrigger>
      </Popover>
    </>
  );
}
