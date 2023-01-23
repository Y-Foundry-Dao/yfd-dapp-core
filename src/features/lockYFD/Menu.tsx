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

const styleVote = 'material-symbols-outlined';
const styleProposal = 'material-symbols-outlined';
const styleGuardian = 'material-symbols-outlined';

export default function LockYFDMenu() {
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
