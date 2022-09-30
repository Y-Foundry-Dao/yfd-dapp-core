import { atom } from 'recoil';

const inputStakeYFD = atom({
  key: 'inputStakeYFD',
  default: 0
});

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
  default: ''
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
  default: ''
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
  default: 2
});

const inputPaymentFrequency = atom({
  key: 'inputPaymentFrequency',
  default: 1000
});

const inputGitHub = atom({
  key: 'inputGitHub',
  default: ''
});

const inputExpiration = atom({
  key: 'inputExpiration',
  default: ''
});

const inputQuorumPercent = atom({
  key: 'inputQuorumPercent',
  default: ''
});

const inputSelfVoucedInformation = atom({
  key: 'inputSelfVoucedInformation',
  default: ''
});

export {
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
  inputGitHub,
  inputExpiration,
  inputQuorumPercent,
  inputSelfVoucedInformation
};
