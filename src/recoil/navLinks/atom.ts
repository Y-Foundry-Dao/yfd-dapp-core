import { atom } from 'recoil';
// todo: refactor to current object being used in headerbar
const navLinksAtom = atom({
  key: 'navLinksAtom',
  default: ['about', 'medium', 'join community', 'brand kit', 'roadmap']
});

export default navLinksAtom;
