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

export const selectMyYFD = selector({
  key: 'selectMyYFD',
  get: async ({ get }) => {
    if (get(addressConnectedAtom) == '') {
      return 0;
    }
    const YFDConnected = get(selectYFDConnected);
    const balance = parseFloat(convertFromBase(YFDConnected).toFixed(5));
    return balance.toString();
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

export const selectMyFYFD = selector({
  key: 'selectMyYFFD',
  get: async ({ get }) => {
    if (get(addressConnectedAtom) == '') {
      return 0;
    }
    const FYFDConnected = get(selectFYFDConnected);
    const balance = parseFloat(convertFromBase(FYFDConnected).toFixed(5));
    return balance.toString();
  }
});

// export default { selectYFDConnected, selectFYFDConnected };
