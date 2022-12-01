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

// Input below is for new Vault Proposals
const inputNameMsg = atom({
  key: 'inputNameMsg',
  default: ''
});

const inputNameProposal = atom({
  key: 'inputNameProposal',
  default: ''
});

const inputUrlProposal = atom({
  key: 'inputUrlProposal',
  default: ''
});

const inputTvlLimit = atom({
  key: 'inputTvlLimit',
  default: 1000000
});

const inputContactList = atom({
  key: 'inputContactlist',
  default: []
});

const inputDeveloperWallet = atom({
  key: 'inputDeveloperWallet',
  default: ''
});

const inputDevelopmentCost = atom({
  key: 'inputDevelopmentCost',
  default: 0.067
});

const inputFundingDenomination = atom({
  key: 'inputFundingDenomination',
  default: ''
});

const inputStatementOfWork = atom({
  key: 'inputStatementOfWork',
  default: ''
});

const inputPaymentSchedule = atom({
  key: 'inputPaymentSchedule',
  default: '2'
});

const inputPaymentFrequency = atom({
  key: 'inputPaymentFrequency',
  default: 1000
});

const inputGithub = atom({
  key: 'inputGithub',
  default: ''
});

const inputExpiration = atom({
  key: 'inputExpiration',
  default: 43200
});

const inputQuorumPercent = atom({
  key: 'inputQuorumPercent',
  default: 25
});

const inputSelfVoucedInformation = atom({
  key: 'inputSelfVoucedInformation',
  default: ''
});

const inputInitialFunding = atom({
  key: 'inputInitialFunding',
  default: 0.005
});

const inputNFTAmount = atom({
  key: 'inputNFTAmount',
  default: 100
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
  inputNameMsg,
  inputNameProposal,
  inputUrlProposal,
  inputTvlLimit,
  inputContactList,
  inputDeveloperWallet,
  inputDevelopmentCost,
  inputFundingDenomination,
  inputStatementOfWork,
  inputPaymentSchedule,
  inputPaymentFrequency,
  inputGithub,
  inputExpiration,
  inputQuorumPercent,
  inputSelfVoucedInformation,
  inputInitialFunding,
  inputNFTAmount,
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
