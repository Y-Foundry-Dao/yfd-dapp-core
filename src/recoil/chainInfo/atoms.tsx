import { atom } from 'recoil';

const currentBlockHeightAtom = atom({
  key: 'currentBlockHeightAtom',
  default: 0
});

export { currentBlockHeightAtom };
