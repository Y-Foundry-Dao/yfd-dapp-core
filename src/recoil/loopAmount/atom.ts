import { atom } from 'recoil';

const loopAmountAtom = atom({
  key: 'loopAmountAtom',
  default: '4'
});

export default loopAmountAtom;
