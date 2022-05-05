import { atom } from 'recoil';

const positionsAtom = atom({
  key: 'positionsAtom',
  default: <any>[]
});

export default positionsAtom;
