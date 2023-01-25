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
