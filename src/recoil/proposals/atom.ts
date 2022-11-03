import { atom } from 'recoil';

const proposalsAtom = atom({
  key: 'proposalsAtom',
  default: <any>[]
});

const vaultProposalsAtom = atom({
  key: 'vaultProposalsAtom',
  default: <any>[]
});

export { proposalsAtom, vaultProposalsAtom };
