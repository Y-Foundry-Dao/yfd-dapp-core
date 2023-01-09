import { selector } from 'recoil';
import queryBalance from '@utilities/messagesQuery/cw20/queryBalance';
import queryMsg from '@utilities/messagesQuery/queryMsg';

import { addressConnectedAtom } from '@recoil/connected/address/atoms';
import {
  currentContractForgeAtom,
  currentContractGovTokenAtom
} from '@recoil/chainInfo/atoms';

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

export const selectFYFDConnected = selector({
  key: 'selectFYFDConnected',
  get: async ({ get }) => {
    if (get(addressConnectedAtom) == '') {
      return 0;
    }
    try {
      const response = await queryMsg(
        get(currentContractForgeAtom),
        queryBalance(get(addressConnectedAtom))
      );
      return parseFloat(response.balance);
    } catch (e) {
      console.error(e);
    }
  }
});

export default { selectYFDConnected, selectFYFDConnected };
