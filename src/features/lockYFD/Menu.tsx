import { useEffect } from 'react';
import { useRecoilValue, useRecoilValueLoadable, useRecoilState } from 'recoil';
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

//import FyfdPopoverEmpty from './PopoverEmpty';
//import FyfdPopoverBalance from './PopoverBalance';
import {
  currentContractForgeAtom,
  currentContractGovTokenAtom
} from '@recoil/chainInfo/atoms';
import useChainInfo from 'hooks/useChainInfo';
import PopoverEmpty from './PopoverEmpty';
import queryMsg from '@utilities/messagesQuery/queryMsg';
import queryBalance from '@utilities/messagesQuery/cw20/queryBalance';
import { result } from 'lodash';

const styleVote = 'material-symbols-outlined';
const styleProposal = 'material-symbols-outlined';
const styleGuardian = 'material-symbols-outlined';

type BalanceResponse = {
  balance: string;
};

async function getBalanceYFD(address: string, token: any) {
  const result: BalanceResponse = await queryMsg(token, queryBalance(address));
  const balance = result.balance;
  return balance;
}

export default function LockYFDMenu() {
  const { currentContractForge } = useChainInfo();
  const { currentContractGovToken } = useChainInfo();
  const address = useRecoilValue(addressConnectedAtom);
  const [forge, setForge] = useRecoilState(currentContractForgeAtom);
  const [token, setToken] = useRecoilState(currentContractGovTokenAtom);
  setForge(currentContractForge);
  setToken(currentContractGovToken);
  useEffect(() => {
    const balanceYFD = getBalanceYFD(address, token);
    console.log('{ LOCKYFD MENU } Balance YFD: ', balanceYFD);
  }, [token]);

  return <PopoverEmpty />;
}
