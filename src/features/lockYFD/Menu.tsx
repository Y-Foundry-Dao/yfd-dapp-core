import {
  Button,
  Popover,
  PopoverTrigger,
  Flex,
  Box,
  Tooltip
} from '@chakra-ui/react';
import { useRecoilValueLoadable } from 'recoil';
// import { myYFD, myFYFD } from '@utilities/myValues';

import {
  selectMinFYFDVaultProp,
  selectMinFYFDGovProp,
  selectMinFYFDEmergencyProp
} from '@recoil/governance/parameters/selectors';

import { Icons } from '@var/icons';
import styles from '@scss/app.module.scss';

import { selectMyFYFD, selectMyYFD } from '@recoil/connected/balance/selectors';

const styleVote = 'material-symbols-outlined';
const styleProposal = 'material-symbols-outlined';
const styleGuardian = 'material-symbols-outlined';

export default function LockYFDMenu() {
  return <>Hello World</>;
}
