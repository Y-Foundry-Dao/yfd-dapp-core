import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { addressConnectedAtom } from '@recoil/connected/address/atoms';
import {
  balanceYfdConnectedAtom,
  balanceFyfdConnectedAtom
} from '@recoil/connected/address/atoms';

import {
  currentContractForgeAtom,
  currentContractGovTokenAtom
} from '@recoil/chainInfo/atoms';

import useChainInfo from 'hooks/useChainInfo';
import useMsg from '@hooks/useMsg';
import queryBalance from '@utilities/messagesQuery/cw20/queryBalance';

import MenuPopoverBalance from './MenuPopoverBalance';
import convertFromBase from '@utilities/converters/convertFromBase';
import MenuLockYFD from './Menu';

type BalanceResponse = {
  balance: string;
};

/*
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
*/

export default function LockYFDMenu() {
  const { queryMsg } = useMsg();
  const { currentContractForge, currentContractGovToken } = useChainInfo();
  const forge = useRecoilValue(currentContractForgeAtom);
  const token = useRecoilValue(currentContractGovTokenAtom);
  const address = useRecoilValue(addressConnectedAtom);
  const setYFD = useSetRecoilState(balanceYfdConnectedAtom);
  const setFYFD = useSetRecoilState(balanceFyfdConnectedAtom);

  //  'minFYFDGovPropAtom'
  //
  // 'minFYFDEmergencyPropAtom'

  /*
  setMinFYFDGovProp(mfgp);
  setMinFYFDVaultProp(mfvp);
  setMinFYFDEmergencyProp(mfep);
  */
  try {
    const result = queryMsg(forge, queryBalance(address));
    const yfd = Number(result);
    setYFD(yfd);
  } catch (error) {
    console.error('ERROR getting fYFD Balance: ', error);
    //return 0;
  }

  try {
    const result = queryMsg(token, queryBalance(address));
    const fyfd = Number(result);
    setFYFD(fyfd);
  } catch (error) {
    console.error('ERROR getting YFD Balance: ', error);
    //return 0;
  }

  return <MenuLockYFD />;
}
