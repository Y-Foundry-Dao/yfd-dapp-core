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
  balanceYfdConnectedAtom,
  balanceFyfdConnectedAtom
} from '@recoil/connected/address/atoms';
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
import MenuPopoverBalance from './BalanceLUNA';
import { unset } from 'lodash';
import convertFromBase from '@utilities/converters/convertFromBase';

const styleVote = 'material-symbols-outlined';
const styleProposal = 'material-symbols-outlined';
const styleGuardian = 'material-symbols-outlined';

type BalanceResponse = {
  balance: string;
};

async function getBalanceYFD(address: string, token: any) {
  try {
    const result: BalanceResponse = await queryMsg(
      token,
      queryBalance(address)
    );
    return result.balance;
  } catch (error) {
    console.error('ERROR getting YFD Balance: ', error);
    return 0;
  }
}

async function getBalanceFYFD(address: string, forge: any) {
  try {
    const result: BalanceResponse = await queryMsg(
      forge,
      queryBalance(address)
    );
    return result.balance;
  } catch (error) {
    console.error('ERROR getting fYFD Balance: ', error);
    return 0;
  }
}

function MyYFD() {
  const address = useRecoilValue(addressConnectedAtom);
  const token = useRecoilValue(currentContractGovTokenAtom);
  const [yfd, setYFD] = useRecoilState(balanceYfdConnectedAtom);
  getBalanceYFD(address, token).then((result) => {
    setYFD(result.toString());
    return result;
  });
}

export default function LockYFDMenu() {
  const { currentContractForge } = useChainInfo();
  const { currentContractGovToken } = useChainInfo();
  const address = useRecoilValue(addressConnectedAtom);
  const [forge, setForge] = useRecoilState(currentContractForgeAtom);
  const [token, setToken] = useRecoilState(currentContractGovTokenAtom);
  const [yfd, setYFD] = useRecoilState(balanceYfdConnectedAtom);
  const [fyfd, setFYFD] = useRecoilState(balanceFyfdConnectedAtom);
  setForge(currentContractForge);
  setToken(currentContractGovToken);

  const balanceYFD = getBalanceYFD(address, token).then((result) => {
    if (result > 0) {
      const balance = convertFromBase(Number(result)).toFixed(5);
      setYFD(balance);
    }
  });

  const BalanceFYFD = getBalanceFYFD(address, forge).then((result) => {
    if (result > 0) {
      const balance = convertFromBase(Number(result)).toFixed(5);
      setFYFD(balance);
    }
  });

  console.log('{ - YFD -}: ', yfd);
  console.log('{ FYFD: }: ', fyfd);
  return <PopoverEmpty />;
}
