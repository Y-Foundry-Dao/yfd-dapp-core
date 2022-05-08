import { atom } from 'recoil';
import assets from 'utilities/assetsObject';

const assetsObjectAtom = atom({
  key: 'assetsObjectAtom',
  default: assets
});

export default assetsObjectAtom;
