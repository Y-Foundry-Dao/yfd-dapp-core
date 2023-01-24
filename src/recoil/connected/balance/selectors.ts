import { selector } from 'recoil';
import queryBalance from '@utilities/messagesQuery/cw20/queryBalance';
import queryMsg from '@utilities/messagesQuery/queryMsg';

import { addressConnectedAtom } from '@recoil/connected/address/atoms';
import {
  currentContractForgeAtom,
  currentContractGovTokenAtom
} from '@recoil/chainInfo/atoms';
import convertFromBase from '@utilities/converters/convertFromBase';
import useChainInfo from '@hooks/useChainInfo';
import { MyGovToken, MyForge } from '@utilities/MyValues';

type BalanceResponse = {
  balance: string;
};

// Gets the connected wallets YFD balance from the smart contract
export const selectYFDConnected = selector({
  key: 'selectYFDConnected',
  get: async ({ get }) => {
    const currentContractGovToken = get(currentContractGovTokenAtom);
    console.log(
      '{SELECTOR} currentContractGovToken: ',
      currentContractGovToken
    );
    if (get(addressConnectedAtom) === '' || currentContractGovToken === '') {
      return 0;
    }
    const response: BalanceResponse = await queryMsg(
      get(currentContractGovTokenAtom),
      queryBalance(get(addressConnectedAtom))
    );
    console.warn('{SELECTOR} YFD Balance: ', response);
    return parseFloat(response.balance);
  }
});

// Uses the selectYFDConnected selector to convert the balance from base to human readable format and returns it as a string.
export const selectMyYFD = selector({
  key: 'selectMyYFD',
  get: async ({ get }) => {
    const YFDConnected = get(selectYFDConnected);
    if (get(addressConnectedAtom) === '' || YFDConnected === undefined) {
      return '0';
    }

    const balance = convertFromBase(YFDConnected).toFixed(5);
    return balance.toString();
  }
});

// Gets the connected wallets fYFD balance from the smart contract
export const selectFYFDConnected = selector({
  key: 'selectFYFDConnected',
  get: async ({ get }) => {
    if (get(addressConnectedAtom) === '') {
      return 0;
    }
    const response: BalanceResponse = await queryMsg(
      get(currentContractForgeAtom),
      queryBalance(get(addressConnectedAtom))
    );
    return parseFloat(response.balance);
  }
});

// Uses the selectFYFDConnected selector to convert the balance from base to human readable format and returns it as a string
export const selectMyFYFD = selector({
  key: 'selectMyYFFD',
  get: async ({ get }) => {
    const FYFDConnected = get(selectFYFDConnected);
    if (get(addressConnectedAtom) === '' || FYFDConnected === undefined) {
      return '0';
    }
    const balance = convertFromBase(FYFDConnected).toFixed(5);
    return balance.toString();
  }
});
