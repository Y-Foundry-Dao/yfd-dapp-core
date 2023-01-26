import { useLCDClient } from '@terra-money/wallet-provider';
import { useRecoilState, useRecoilValueLoadable } from 'recoil';
import useChainInfo from '@hooks/useChainInfo';
import convertFromBase from '@utilities/converters/convertFromBase';

import {
  currentContractForgeAtom,
  currentContractGovTokenAtom
} from '@recoil/chainInfo/atoms';
/*
import {
  selectFYFDConnected,
  selectYFDConnected
} from '@recoil/connected/balance/selectors';
*/
export const MyChain = () => {
  const chainInfo = useChainInfo();
  return chainInfo.currentChainID;
};

/*
export const MyYFD = () => {
  const response = useRecoilValueLoadable(selectYFDConnected);
  const balance = parseFloat(convertFromBase(response.contents).toFixed(5));
  return balance.toString();
};

export const MyFYFD = () => {
  const response = useRecoilValueLoadable(selectFYFDConnected);
  const balance = parseFloat(convertFromBase(response.contents).toFixed(5));
  return balance.toString();
};

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
  return forge;
};

export const MyGovToken = () => {
  const [token, setToken] = useRecoilState(currentContractGovTokenAtom);
  const { currentContractGovToken } = useChainInfo();
  setToken(currentContractGovToken);
  return token;
};

export default MyChain;
