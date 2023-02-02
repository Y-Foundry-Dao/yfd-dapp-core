import { atom } from 'recoil';

const currentBlockIntervalAtom = atom({
  key: 'currentBlockIntervalAtom',
  default: 6000
});

const currentBlockHeightAtom = atom({
  key: 'currentBlockHeightAtom',
  default: 0
});

const currentChainIDAtom = atom({
  key: 'currentChainIDAtom',
  default: ''
});

const currentContractForgeAtom = atom({
  key: 'currentContractForgeAtom',
  default: ''
});

const currentContractGovTokenAtom = atom({
  key: 'currentContractGovTokenAtom',
  default: ''
});
export {
  currentBlockIntervalAtom,
  currentBlockHeightAtom,
  currentChainIDAtom,
  currentContractForgeAtom,
  currentContractGovTokenAtom
};
