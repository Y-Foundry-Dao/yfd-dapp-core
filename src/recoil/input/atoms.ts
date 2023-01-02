import { atom, atomFamily } from 'recoil';

//~~~~~~~~~~~~~~~~
// atom only
//~~~~~~~~~~~~~~~~

const inputIsEmergency = atom({
  key: 'inputIsEmergency',
  default: false
});

const inputJustificationLink = atom({
  key: 'inputJustificationLink',
  default: ''
});

const inputStakeYFD = atom({
  key: 'inputStakeYFD',
  default: 0
});

const inputProposalType = atom({
  key: 'inputProposalType',
  default: 'vault'
});

// Input Below is for New Address Proposals

const inputWhitelistWalletAddress = atom({
  key: 'inputWhitelistWalletAddress',
  default: ''
});
const inputWhitelistWalletAddressName = atom({
  key: 'inputWhitelistWalletAddressName',
  default: ''
});
const inputWhitelistWalletAddressUrl = atom({
  key: 'inputWhitelistWalletAddressUrl',
  default: ''
});
const inputWhitelistWalletAddressTwitter = atom({
  key: 'inputWhitelistWalletAddressTwitter',
  default: ''
});
const inputWhitelistWalletAddressKeybase = atom({
  key: 'inputWhitelistWalletAddressKeybase',
  default: ''
});
const inputWhitelistWalletAddressTelegram = atom({
  key: 'inputWhitelistWalletAddressTelegram',
  default: ''
});
const inputWhitelistWalletAddressGithub = atom({
  key: 'inputWhitelistWalletAddressGithub',
  default: ''
});
const inputWhitelistWalletAddressImageLink = atom({
  key: 'inputWhitelistWalletAddressImageLink',
  default: ''
});
const inputWhitelistWalletAddressRoles = atom({
  key: 'inputWhitelistWalletAddressRoles',
  default: []
});

// Input Below is for New Token Proposals

const inputWhitelistTokenAddress = atom({
  key: 'inputWhitelistTokenAddress',
  default: ''
});
const inputWhitelistTokenName = atom({
  key: 'inputWhitelistTokenName',
  default: ''
});
const inputWhitelistTokenAssetType = atom({
  key: 'inputWhitelistTokenAssetType',
  default: ''
});
const inputWhitelistTokenisStable = atom({
  key: 'inputWhitelistTokenisStable',
  default: false
});
const inputWhitelistTokenOracleAddress = atom({
  key: 'inputWhitelistTokenOracleAddress',
  default: ''
});
const inputWhitelistTokenToUsd = atom({
  key: 'inputWhitelistTokenToUsd',
  default: ''
});

//~~~~~~~~~~~~~~~~
// atomFamily only
//~~~~~~~~~~~~~~~~
const inputEmergencyExpiration = atomFamily({
  key: 'inputExpirationEmergency',
  default: 14400
});

const inputEmergencyJustification = atomFamily({
  key: 'inputEmergencyJustification',
  default: ''
});

export {
  inputIsEmergency,
  inputJustificationLink,
  inputStakeYFD,
  inputEmergencyExpiration,
  inputEmergencyJustification,
  inputProposalType,
  inputWhitelistWalletAddress,
  inputWhitelistWalletAddressName,
  inputWhitelistWalletAddressUrl,
  inputWhitelistWalletAddressTwitter,
  inputWhitelistWalletAddressKeybase,
  inputWhitelistWalletAddressTelegram,
  inputWhitelistWalletAddressGithub,
  inputWhitelistWalletAddressImageLink,
  inputWhitelistWalletAddressRoles,
  inputWhitelistTokenAddress,
  inputWhitelistTokenName,
  inputWhitelistTokenAssetType,
  inputWhitelistTokenisStable,
  inputWhitelistTokenOracleAddress,
  inputWhitelistTokenToUsd
};
