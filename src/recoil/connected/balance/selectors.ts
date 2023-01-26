import { selector } from 'recoil';
import queryBalance from '@utilities/messagesQuery/cw20/queryBalance';
//import queryMsg from '@utilities/messagesQuery/queryMsg';
/*
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
    const currentContractGovToken = await get(currentContractGovTokenAtom);
    const address = await get(addressConnectedAtom);
    console.log('{SELECTOR} $YFD Token Contract: ', currentContractGovToken);
    if (address === '') {
      return 0;
    }
    if (currentContractGovToken === '') {
      const currentContractGovToken = MyGovToken();
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
    if (get(addressConnectedAtom) === '') {
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
  get: async ({ get }) => {
    const YFDConnected = await get(selectYFDConnected);
    const balance = convertFromBase(YFDConnected).toFixed(5);
    return balance.toString();
  }
});

// Uses the selectFYFDConnected selector to convert the balance from base to human readable format and returns it as a string
export const selectMyFYFD = selector({
  key: 'selectMyYFFD',
  get: async ({ get }) => {
    const FYFDConnected = await get(selectFYFDConnected);
    const balance = convertFromBase(FYFDConnected).toFixed(5);
    return balance.toString();
  }
});
*/