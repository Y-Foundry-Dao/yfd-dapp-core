import { atom } from 'recoil';

export const minFYFDVaultPropAtom = atom({
  key: 'minFYFDVaultPropAtom',
  default: ''
});

export const minFYFDGovPropAtom = atom({
  key: 'minFYFDGovPropAtom',
  default: '0'
});

export const minFYFDEmergencyPropAtom = atom({
  key: 'minFYFDEmergencyPropAtom',
  default: '0'
});

export default {
  minFYFDVaultPropAtom,
  minFYFDGovPropAtom,
  minFYFDEmergencyPropAtom
};
