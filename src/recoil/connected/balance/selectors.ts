import { selector } from 'recoil';
import queryBalance from '@utilities/messagesQuery/cw20/queryBalance';
import queryMsg from '@utilities/messagesQuery/queryMsg';

import { addressConnectedAtom } from '@recoil/connected/address/atoms';
import {
  currentContractForgeAtom,
  currentContractGovTokenAtom
} from '@recoil/chainInfo/atoms';
import convertFromBase from '@utilities/converters/convertFromBase';

export const selectYFDConnected = selector({
  key: 'selectYFDConnected',
  get: async ({ get }) => {
    if (get(addressConnectedAtom) == '') {
      return 0;
    }
    const response = await queryMsg(
      get(currentContractGovTokenAtom),
      queryBalance(get(addressConnectedAtom))
    );
    console.log('{SELECTOR} YFD Balance: ', response);
    return parseFloat(response.balance);
  }
});

export const selectHumanReadableYFDConnected = selector({
  key: 'selectHumanReadableYFDConnected',
  get: async ({ get }) => {
    const humanReadableBalance = convertFromBase(get(selectYFDConnected));
    console.log('{SELECTOR} YFD Balance TWO: ', humanReadableBalance);
    return humanReadableBalance;
  }
});

export const selectFYFDConnected = selector({
  key: 'selectFYFDConnected',
  get: async ({ get }) => {
    if (get(addressConnectedAtom) == '') {
      return 0;
    }
    const response = await queryMsg(
      get(currentContractForgeAtom),
      queryBalance(get(addressConnectedAtom))
    );
    return parseFloat(response.balance);
  }
});

export const selectHumanReadableFYFDConnected = selector({
  key: 'selectHumanReadableFYFDConnected',
  get: async ({ get }) => {
    const humanReadableBalance = convertFromBase(get(selectFYFDConnected));
    return humanReadableBalance;
  }
});

export default { selectYFDConnected, selectFYFDConnected };
