import { atom } from 'recoil';

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
  currentBlockHeightAtom,
  currentChainIDAtom,
  currentContractForgeAtom,
  currentContractGovTokenAtom
};
