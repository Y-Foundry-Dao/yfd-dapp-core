import { atom } from 'recoil';

type LockYFDArray = {
  idx: Array<number>;
};

export const currentClaimableBalanceAtom = atom({
  key: 'currentClaimableBalanceAtom',
  default: 0
});

export const currentLockYFDArrayAtom: any = atom({
  key: 'currentLockYFDArrayAtom',
  default: []
});

export const currentProposalLockYFDArrayAtom = atom({
  key: 'currentProposalLockYFDArrayAtom',
  default: []
});

export const myClaimableYFDIndexAtom = atom({
  key: 'myClaimableYFDIndexAtom',
  default: ''
});

export const myClaimableYFDAtom = atom({
  key: 'myClaimableYFDAtom',
  default: 0
});
