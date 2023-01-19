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
  selectFYFDConnected,
  selectYFDConnected
} from '@recoil/connected/balance/selectors';

export function ConnectLCDClient() {
  return useLCDClient();
}

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

export default ConnectLCDClient;
