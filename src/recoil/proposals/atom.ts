import { atom } from 'recoil';

const proposalsAtom = atom({
  key: 'proposalsAtom',
  default: <any>[]
});

export default proposalsAtom;
