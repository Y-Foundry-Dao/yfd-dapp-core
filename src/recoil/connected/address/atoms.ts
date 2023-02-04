import { atom } from 'recoil';

export const addressStatusAtom = atom({
  key: 'addressStatusAtom',
  default: 'INITIALIZING'
});

export const addressConnectedAtom = atom({
  key: 'addressConnectedAtom',
  default: ''
});

export const balanceBankConnectedAtom = atom({
  key: 'balanceBankConnectedAtom'
});

export const balanceYfdConnectedAtom = atom({
  key: 'balanceYfdConnectedAtom',
  default: 0
});

export const balanceFyfdConnectedAtom = atom({
  key: 'balancefYfdConnectedAtom',
  default: 0
});

export const estimatedFyfdConnectedAtom = atom({
  key: 'estimateFyfdConnectedAtom',
  default: 0
});

export const addressHasFYFDAtom = atom({
  key: 'addressHasFYFDAtom',
  default: false
});

export const addressCanVoteAtom = atom({
  key: 'addressCanVoteAtom',
  default: false
});

export const addressCanProposeVaultAtom = atom({
  key: 'addressCanProposeVaultAtom',
  default: false
});

export const addressCanProposeGovAtom = atom({
  key: 'addressCanProposeGovAtom',
  default: false
});

export const addressCanProposeEmergencyAtom = atom({
  key: 'addressCanProposeEmergencyAtom',
  default: false
});
