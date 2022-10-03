import { atom } from 'recoil';
// todo: refactor to current object being used in headerbar
const proposalsAtom = atom({
  key: 'proposalsAtom',
  default: <any>[]
});

export default proposalsAtom;
