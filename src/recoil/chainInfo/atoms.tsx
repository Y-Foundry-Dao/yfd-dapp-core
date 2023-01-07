import { atom } from 'recoil';

const currentBlockHeightAtom = atom({
  key: 'currentBlockHeightAtom',
  default: 0
});

const currentChainIDAtom = atom({
  key: 'currentChainIDAtom',
  default: ''
});

export { currentBlockHeightAtom, currentChainIDAtom };
