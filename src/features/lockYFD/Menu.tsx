import { useRecoilValue, useRecoilState } from 'recoil';
import { addressConnectedAtom } from '@recoil/governance/parameters/atoms';
import {
  balanceYfdConnectedAtom,
  balanceFyfdConnectedAtom
} from '@recoil/connected/address/atoms';

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
import convertFromBase from '@utilities/converters/convertFromBase';

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
  return convertFromBase(
    Number(useRecoilValue(balanceYfdConnectedAtom))
  ).toFixed(5);
}

function MyFYFD() {
  return convertFromBase(
    Number(useRecoilValue(balanceFyfdConnectedAtom))
  ).toFixed(5);
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
    const yfd = Number(result);
    setYFD(yfd);
  });

  const balanceFYFD = getBalanceFYFD(address, forge).then((result) => {
    const fyfd = Number(result);
    setFYFD(fyfd);
  });

  if (Number(fyfd) > 0) {
    return <MenuPopoverBalance />;
  }
  return <PopoverEmpty />;
}
