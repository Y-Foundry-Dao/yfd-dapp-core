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

export const govFundRatioAtom = atom({
  key: 'govFundRatioAtom',
  default: '0'
});

export const govMinLockTimeAtom = atom({
  key: 'govMinLockTimeAtom',
  default: '0'
});

export const govMaxLockTimeAtom = atom({
  key: 'govMaxLockTimeAtom',
  default: '0'
});

export default {
  minFYFDVaultPropAtom,
  minFYFDGovPropAtom,
  minFYFDEmergencyPropAtom,
  govFundRatioAtom,
  govMinLockTimeAtom,
  govMaxLockTimeAtom
};
