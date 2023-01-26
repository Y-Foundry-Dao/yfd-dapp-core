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

type BalanceResponse = {
  balance: string;
};

// Gets the connected wallets YFD balance from the smart contract
export const selectYFDConnected = selector({
  key: 'selectYFDConnected',
  get: async ({ get }) => {
    const currentContractGovToken = get(currentContractGovTokenAtom);
    const address = get(addressConnectedAtom);
    console.log('{SELECTOR} $YFD Token Contract: ', currentContractGovToken);
    if (address === '' || currentContractGovToken === '') {
      return 0;
    }
    console.warn(
      'getting balance for: ',
      get(addressConnectedAtom),
      ' from: ',
      currentContractGovToken
    );
    const response: BalanceResponse = await queryMsg(
      currentContractGovToken,
      queryBalance(address)
    );
    console.warn('{SELECTOR} YFD Balance: ', response);
    return parseFloat(response.balance);
  }
});

// Gets the connected wallets fYFD balance from the smart contract
export const selectFYFDConnected = selector({
  key: 'selectFYFDConnected',
  get: async ({ get }) => {
    if (
      get(addressConnectedAtom) === '' ||
      get(currentContractForgeAtom) === ''
    ) {
      return 0;
    }
    console.log('{SELECTOR} Forge: ', currentContractForgeAtom);
    const response: BalanceResponse = await queryMsg(
      get(currentContractForgeAtom),
      queryBalance(get(addressConnectedAtom))
    );
    return parseFloat(response.balance);
  }
});

// Uses the selectYFDConnected selector to convert the balance from base to human readable format and returns it as a string.
export const selectMyYFD = selector({
  key: 'selectMyYFD',
  get: ({ get }) => {
    const YFDConnected = get(selectYFDConnected);
    const balance = convertFromBase(YFDConnected).toFixed(5);
    return balance.toString();
  }
});

// Uses the selectFYFDConnected selector to convert the balance from base to human readable format and returns it as a string
export const selectMyFYFD = selector({
  key: 'selectMyYFFD',
  get: ({ get }) => {
    const FYFDConnected = get(selectFYFDConnected);
    const balance = convertFromBase(FYFDConnected).toFixed(5);
    return balance.toString();
  }
});
