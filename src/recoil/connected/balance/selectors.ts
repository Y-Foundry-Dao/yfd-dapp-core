import { selector } from 'recoil';
import queryBalance from '@utilities/messagesQuery/cw20/queryBalance';
import queryMsg from '@utilities/messagesQuery/queryMsg';
import queryBalanceDetail from '@utilities/messagesQuery/forge/queryBalanceDetail';

import { addressConnectedAtom } from '@recoil/connected/address/atoms';
import {
  currentContractForgeAtom,
  currentContractGovTokenAtom
} from '@recoil/chainInfo/atoms';
import convertFromBase from '@utilities/converters/convertFromBase';

type BalanceResponse = {
  balance: string;
};

type ClaimableResponse = {
  contents: object[];
};

// Gets the connected wallets YFD balance from the smart contract
export const selectYFDConnected = selector({
  key: 'selectYFDConnected',
  get: async ({ get }) => {
    const currentContractGovToken = get(currentContractGovTokenAtom);
    const address = get(addressConnectedAtom);
    if (address === '' || currentContractGovToken === '') {
      return 0;
    }
    const response: BalanceResponse = await queryMsg(
      currentContractGovToken,
      queryBalance(address)
    );
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
    const balance = convertFromBase(YFDConnected).toFixed(6);
    return balance.toString();
  }
});

// Uses the selectFYFDConnected selector to convert the balance from base to human readable format and returns it as a string
export const selectMyFYFD = selector({
  key: 'selectMyFYFD',
  get: ({ get }) => {
    const FYFDConnected = get(selectFYFDConnected);
    const balance = convertFromBase(FYFDConnected).toFixed(6);
    return balance.toString();
  }
});

// Gets the connected wallets YFD Claimable balance from the Forge
export const selectYFDClaimableConnected = selector({
  key: 'selectYFDClaimableConnected',
  get: async ({ get }) => {
    if (
      get(addressConnectedAtom) === '' ||
      get(currentContractForgeAtom) === ''
    ) {
      return 0;
    }
    const response: any = await queryMsg(
      get(currentContractForgeAtom),
      queryBalanceDetail(get(addressConnectedAtom))
    );
    //console.log('selectYFDClaimableConnected', response);
    return response;
  }
});

export const selectMyYFDClaimableJSON = selector({
  key: 'selectMyYFDClaimable',
  get: ({ get }) => {
    const result = get(selectYFDClaimableConnected);
    return result.stakes;
  }
});

export const selectMyYFDLocked = selector({
  key: 'selectMyYFDLocked',
  get: ({ get }) => {
    const claimable: any = get(selectMyYFDClaimableJSON);
    const yfd = get(selectMyYFD);
    const fyfd = get(selectMyFYFD);
    const balance = {
      deposited: '0',
      withdrawn: '0',
      balance: '0',
      potency: '0',
      portion: '0'
    };
    const stakes: any = [];
    if (claimable.length > 0) {
      let total = 0;
      let withdrawn = 0;
      claimable.forEach((claim: any) => {
        let stake = claim.stake;
        const idx: string = claim.idx;
        console.log('stake', stake);
        total = total + +stake.asset_deposit_amount;
        withdrawn = withdrawn + +stake.asset_withdrawn_amount;
        stake = { ...stake, idx };
        stakes.push(stake);
      });
      balance.deposited = convertFromBase(total).toFixed(6);
      balance.withdrawn = convertFromBase(withdrawn).toFixed(6);
      balance.balance = (+balance.deposited - +balance.withdrawn).toFixed(6);
      balance.potency = (+fyfd / +balance.balance).toFixed(2);
      balance.portion = (+balance.balance / (+yfd + +balance.balance)).toFixed(
        4
      );
    }
    return { ...balance, stakes };
  }
});

export const selectMyYFDClaimableBalance = selector({
  key: 'selectMyYFDClaimableBalance',
  get: ({ get }) => {
    const claimable: any = get(selectMyYFDClaimableJSON);
    console.log('selectMyYFDClaimableBalance', claimable);
    return 0;
    if (claimable.contents.length === 0) {
      console.log('No claimable balance found');
      return 0;
    } else {
      console.log('Claimable balance found: ', claimable.contents);
      let total = 0;
      let withdrawn = 0;
      let remainder = 0;
      claimable.contents.stakes.forEach((element: any) => {
        switch (element.key) {
          case 'asset_deposit_amount':
            total = total + element.value;
            break;
          case 'asset_withdrawn_amount':
            withdrawn = withdrawn + element.value;
            break;
          default:
            break;
        }
      });
      remainder = total - withdrawn;
      return remainder;
    }
  }
});
