import { selector } from 'recoil';
import { FORGE_TEST, YFD_TEST } from '@utilities/variables';
/* import { walletAddress } from '@recoil/connected/address/atoms';
import queryBalance from '@utilities/messagesQuery/cw20/queryBalance';
import queryMsg from '@utilities/messagesQuery/queryMsg';

export const balanceYFDQuery = selector({
  key: 'balanceYFDQuery',
  get: async ({ get }) => {
    if (get(walletAddress) == '') {
      return 0;
    }
    const response = await queryMsg(YFD_TEST, queryBalance(get(walletAddress)));
    return parseFloat(response.balance);
  }
});

export const balancefYFDQuery = selector({
  key: 'balancefYFDQuery',
  get: async ({ get }) => {
    if (get(walletAddress) == '') {
      return 0;
    }
    const response = await queryMsg(
      FORGE_TEST,
      queryBalance(get(walletAddress))
    );
    return parseFloat(response.balance);
  }
});
*/

export {};
