import React, { useEffect, useState } from 'react';
import { useConnectedWallet, useLCDClient } from '@terra-money/wallet-provider';
import {
  useRecoilState,
  useRecoilValue,
  useRecoilValueLoadable,
  useSetRecoilState
} from 'recoil';
import useChainInfo from '@hooks/useChainInfo';
import convertFromBase from '@utilities/converters/convertFromBase';

import {
  addressConnectedAtom,
  addressStatusAtom,
  balanceBankConnectedAtom
} from '@recoil/connected/address/atoms';
import {
  currentContractForgeAtom,
  currentContractGovTokenAtom
} from '@recoil/chainInfo/atoms';
import {
  selectFYFDConnected,
  selectYFDConnected
} from '@recoil/connected/balance/selectors';

export const MyLCD = () => {
  return useLCDClient();
};

export const MyChain = () => {
  const chainInfo = useChainInfo();
  console.log('chain DATA: ', chainInfo);

  return chainInfo.currentChainID;
};

export const MyYFD = () => {
  const response = useRecoilValueLoadable(selectYFDConnected);
  //console.log('{RECOIL} [MY] YFD Balance: ', response);
  const balance = parseFloat(convertFromBase(response.contents).toFixed(5));
  //console.log('{MY} hasValue YFD Balance: ', balance);
  return balance.toString();
};

export const MyFYFD = () => {
  const response = useRecoilValueLoadable(selectFYFDConnected);
  //console.log('{RECOIL} [MY] --FYFD-- Balance: ', response);
  const balance = parseFloat(convertFromBase(response.contents).toFixed(5));
  //console.log('{MY} --FYFD-- Balance: ', balance);
  return balance.toString();
};

/*
export function MyYFD() {
  return convertFromBase(
    Number(useRecoilValue(balanceYfdConnectedAtom))
  ).toFixed(5);
};

export function MyFYFD() {
  return convertFromBase(
    Number(useRecoilValue(balanceFyfdConnectedAtom))
  ).toFixed(5);
};
*/

export const MyForge = () => {
  const [forge, setForge] = useRecoilState(currentContractForgeAtom);
  const { currentContractForge } = useChainInfo();
  setForge(currentContractForge);
  console.log('MY FORGE: ', forge);
  return forge;
};

export const MyGovToken = () => {
  const [token, setToken] = useRecoilState(currentContractGovTokenAtom);
  const { currentContractGovToken } = useChainInfo();
  setToken(currentContractGovToken);
  console.log('MY GOV TOKEN (YFD): ', token);
  return token;
};

export default MyLCD;
