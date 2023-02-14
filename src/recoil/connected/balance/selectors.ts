import { selector } from 'recoil';
import queryBalance from '@utilities/messagesQuery/cw20/queryBalance';
import queryMsg from '@utilities/messagesQuery/queryMsg';
import queryBalanceDetail from '@utilities/messagesQuery/forge/queryBalanceDetail';

import { addressConnectedAtom } from '@recoil/connected/address/atoms';
import {
  currentBlockHeightAtom,
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
    const balance = {
      total: {
        deposit: '0',
        withdrawn: '0',
        balance: '0',
        available: '0'
      },
      average: {
        lock_duration: '0',
        decay: '0'
      },
      potency: '0',
      portion: '0',
      next: {
        idx: '0',
        block: '0'
      },
      last: {
        idx: '0',
        block: '0'
      }
    };
    const stakes: any = [];
    const currentBlockHeight = get(currentBlockHeightAtom);
    if (claimable.length > 0 && currentBlockHeight > 0) {
      const yfd = get(selectMyYFD);
      const fyfd = get(selectMyFYFD);
      let total = 0;
      let withdrawn = 0;
      let available = 0;
      let decayRate = 0;
      let avgLock = 0;
      let nextIdx = '0';
      let nextBlock = 0;
      let lastIdx = '0';
      let lastBlock = 0;
      const claimCount = claimable.length;
      claimable.forEach((claim: any) => {
        let decay = 0;
        let endBlock = 0;
        let claimUnlocked = 0;
        let stake = claim.stake;
        const idx: string = claim.idx;
        //helpers
        decay = stake.asset_deposit_amount / stake.lock_duration;
        decayRate = decayRate + decay;
        endBlock = +stake.deposit_height + +stake.lock_duration;
        avgLock = avgLock + +stake.lock_duration;
        const pastBlocks = currentBlockHeight - stake.deposit_height;
        // data to return
        total = total + +stake.asset_deposit_amount;
        withdrawn = withdrawn + +stake.asset_withdrawn_amount;
        claimUnlocked = pastBlocks * decay - stake.asset_withdrawn_amount;
        // if the current claim is the next to unlock then store that index)
        if (nextBlock === 0 || endBlock < nextBlock) {
          nextIdx = idx;
          nextBlock = endBlock;
        }
        // if the current claim is the last to unlock then store that index
        if (lastBlock === 0 || endBlock > lastBlock) {
          lastIdx = idx;
          lastBlock = endBlock;
        }
        /*
        console.log('Stake [', idx, ']: ', stake);
        console.log(
          'amount locked: ',
          stake.asset_deposit_amount / 1000000,
          ' past blocks: ',
          pastBlocks,
          ' (curr: ',
          currentBlockHeight,
          ' )',
          ' ending block: ',
          endBlock,
          ' decay: ',
          decay,
          ' withdrawn: ',
          stake.asset_withdrawn_amount / 1000000,
          'total unlocked: ',
          pastBlocks * decay,
          'claimable now: ',
          claimUnlocked / 1000000
        );
        */
        available = available + claimUnlocked;
        stake = { ...stake, idx, claimUnlocked };
        stakes.push(stake);
      });
      balance.total.deposit = convertFromBase(total).toFixed(6);
      balance.total.withdrawn = convertFromBase(withdrawn).toFixed(6);
      balance.total.balance = (
        +balance.total.deposit - +balance.total.withdrawn
      ).toFixed(6);
      balance.total.available = convertFromBase(available).toFixed(6);
      balance.average.decay = (decayRate / +claimCount / 100000).toString();
      balance.average.lock_duration = (avgLock / +claimCount).toString();
      balance.potency = (+fyfd / +balance.total.balance).toFixed(2);
      balance.portion = (
        +balance.total.balance /
        (+yfd + +balance.total.balance)
      ).toFixed(4);
      balance.next.idx = nextIdx;
      balance.next.block = nextBlock.toString();
      balance.last.idx = lastIdx;
      balance.last.block = lastBlock.toString();
    }
    return { ...balance, stakes };
  }
});
