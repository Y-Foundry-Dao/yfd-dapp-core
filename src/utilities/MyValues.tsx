import { useLCDClient } from '@terra-money/wallet-provider';
import { useRecoilState, useRecoilValueLoadable } from 'recoil';
import useChainInfo from '@hooks/useChainInfo';
import convertFromBase from '@utilities/converters/convertFromBase';

import {
  currentContractForgeAtom,
  currentContractGovTokenAtom
} from '@recoil/chainInfo/atoms';
import {
  selectFYFDConnected,
  selectYFDConnected
} from '@recoil/connected/balance/selectors';
import { LCDClient } from '@terra-money/feather.js';

export const MyLCD = () => {
  return new LCDClient({
    'pisco-1': {
      lcd: 'https://pisco-lcd.terra.dev',
      chainID: 'pisco-1',
      gasAdjustment: 1.75,
      gasPrices: { uluna: 0.015 },
      prefix: 'terra' // bech32 prefix, used by the LCD to understand which is the right chain to query
    },
    'osmosis-1': {
      chainID: 'osmosis-1',
      lcd: 'https://lcd.osmosis.zone',
      gasAdjustment: 1.75,
      gasPrices: {
        uosmo: 0.025
      },
      prefix: 'osmo'
    }
  });
};

// export const MyChain = () => {
//   const chainInfo = useChainInfo();
//   return chainInfo.currentChainID;
// };

// export const MyYFD = () => {
//   const response = useRecoilValueLoadable(selectYFDConnected);
//   const balance = parseFloat(convertFromBase(response.contents).toFixed(5));
//   return balance.toString();
// };

// export const MyFYFD = () => {
//   const response = useRecoilValueLoadable(selectFYFDConnected);
//   const balance = parseFloat(convertFromBase(response.contents).toFixed(5));
//   return balance.toString();
// };

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

// export const MyForge = () => {
//   const [forge, setForge] = useRecoilState(currentContractForgeAtom);
//   const { currentContractForge } = useChainInfo();
//   setForge(currentContractForge);
//   return forge;
// };

// export const MyGovToken = () => {
//   const [token, setToken] = useRecoilState(currentContractGovTokenAtom);
//   const { currentContractGovToken } = useChainInfo();
//   setToken(currentContractGovToken);
//   return token;
// };

export default MyLCD;
