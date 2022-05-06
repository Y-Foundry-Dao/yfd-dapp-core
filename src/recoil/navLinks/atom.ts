import { atom } from 'recoil';

const navLinksAtom = atom({
  key: 'navLinksAtom',
  default: ['about', 'medium', 'join community', 'brand kit', 'roadmap']
});

export default navLinksAtom;
