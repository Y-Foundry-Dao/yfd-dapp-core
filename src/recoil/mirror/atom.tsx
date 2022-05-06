import { atom } from 'recoil';
import mirrorObject from 'utilities/mirrorObject';

const mirrorObjectAtom = atom({
  key: 'mirrorObjectAtom',
  default: mirrorObject
});

export default mirrorObjectAtom;
