import { useSetRecoilState } from 'recoil';
import {
  inputDeveloperWallet,
  inputDevelopmentCost,
  inputExpiration,
  inputGithub,
  inputInitialFunding,
  inputNameProposal,
  inputNFTAmount,
  inputPaymentFrequency,
  inputQuorumPercent,
  inputSelfVoucedInformation,
  inputStakeYFD,
  inputStatementOfWork,
  inputTvlLimit,
  inputUrlProposal,
  inputWhitelistWalletAddress,
  inputWhitelistWalletAddressGithub,
  inputWhitelistWalletAddressImageLink,
  inputWhitelistWalletAddressKeybase,
  inputWhitelistWalletAddressName,
  inputWhitelistWalletAddressTelegram,
  inputWhitelistWalletAddressTwitter,
  inputWhitelistWalletAddressUrl
} from 'recoil/input/atoms';

const useHandleInputs = () => {
  const setSelfVouchedInformation = useSetRecoilState(
    inputSelfVoucedInformation
  );

  const setAmountStakeYFD = useSetRecoilState(inputStakeYFD);
  // Recoil Values for vault proposal
  const setNameProposal = useSetRecoilState(inputNameProposal);
  const setUrlProposal = useSetRecoilState(inputUrlProposal);
  const setTvlLimit = useSetRecoilState(inputTvlLimit);
  const setDevelopmentCost = useSetRecoilState(inputDevelopmentCost);
  const setStatementOfWork = useSetRecoilState(inputStatementOfWork);
  const setGithub = useSetRecoilState(inputGithub);
  const setQuorumPercent = useSetRecoilState(inputQuorumPercent);
  const setExpiration = useSetRecoilState(inputExpiration);
  const setPaymentFrequency = useSetRecoilState(inputPaymentFrequency);
  const setInitialFunding = useSetRecoilState(inputInitialFunding);
  const setNFTAmount = useSetRecoilState(inputNFTAmount);
  const setDeveloper = useSetRecoilState(inputDeveloperWallet);
  // Recoil values for address whitelist
  const setWhitelistWalletAddress = useSetRecoilState(
    inputWhitelistWalletAddress
  );
  const setWhitelistWalletAddressName = useSetRecoilState(
    inputWhitelistWalletAddressName
  );
  const setWhitelistWalletAddressImageLink = useSetRecoilState(
    inputWhitelistWalletAddressImageLink
  );
  const setWhitelistWalletAddressGithub = useSetRecoilState(
    inputWhitelistWalletAddressGithub
  );
  const setWhitelistWalletAddressKeybase = useSetRecoilState(
    inputWhitelistWalletAddressKeybase
  );
  const setWhitelistWalletAddressTelegram = useSetRecoilState(
    inputWhitelistWalletAddressTelegram
  );
  const setWhitelistWalletAddressTwitter = useSetRecoilState(
    inputWhitelistWalletAddressTwitter
  );
  const setWhitelistWalletAddressUrl = useSetRecoilState(
    inputWhitelistWalletAddressUrl
  );

  const handleInputStakeYFD = (value: any) => setAmountStakeYFD(value);

  const handleInputNameProposal = (event: any) =>
    setNameProposal(event.target.value);

  const handleInputUrlProposal = (event: any) =>
    setUrlProposal(event.target.value);

  const handleInputTvlLimit = (value: any) => setTvlLimit(value);

  const handleInputDevelopmentCost = (value: any) => setDevelopmentCost(value);

  const handleInputInitialFunding = (value: any) => setInitialFunding(value);

  const handleInputStatementOfWork = (event: any) =>
    setStatementOfWork(event.target.value);

  const handleInputPaymentFrequency = (value: any) =>
    setPaymentFrequency(value);

  const handleInputGithub = (event: any) => setGithub(event.target.value);

  const handleInputQuorumPercent = (value: any) => setQuorumPercent(value);

  const handleInputSelfVouchedInformation = (event: any) =>
    setSelfVouchedInformation(event.target.value);

  const handleInputExpiration = (value: any) => {
    setExpiration(value);
  };

  const handleInputNFTAmount = (value: any) => {
    setNFTAmount(value);
  };

  const handleInputDeveloper = (event: any) => setDeveloper(event.target.value);

  const handleInputWhitelistWalletAddress = (event: any) =>
    setWhitelistWalletAddress(event.target.value);

  const handleInputWhitelistWalletAddressName = (event: any) =>
    setWhitelistWalletAddressName(event.target.value);

  const handleInputWhitelistWalletAddressImageLink = (event: any) =>
    setWhitelistWalletAddressImageLink(event.target.value);

  // TODO: Figure out role checkbox selection
  // const handleInputWhitelistWalletAddressRoles = (event: any) => setWhitelistWalletAddress(event.target.value);

  const handleInputWhitelistWalletAddressGithub = (event: any) =>
    setWhitelistWalletAddressGithub(event.target.value);

  const handleInputWhitelistWalletAddressKeybase = (event: any) =>
    setWhitelistWalletAddressKeybase(event.target.value);

  const handleInputWhitelistWalletAddressTelegram = (event: any) =>
    setWhitelistWalletAddressTelegram(event.target.value);

  const handleInputWhitelistWalletAddressTwitter = (event: any) =>
    setWhitelistWalletAddressTwitter(event.target.value);

  const handleInputWhitelistWalletAddressUrl = (event: any) =>
    setWhitelistWalletAddressUrl(event.target.value);

  return {
    handleInputStakeYFD,
    handleInputNameProposal,
    handleInputUrlProposal,
    handleInputTvlLimit,
    handleInputDevelopmentCost,
    handleInputInitialFunding,
    handleInputStatementOfWork,
    handleInputPaymentFrequency,
    handleInputGithub,
    handleInputQuorumPercent,
    handleInputSelfVouchedInformation,
    handleInputExpiration,
    handleInputNFTAmount,
    handleInputDeveloper,
    handleInputWhitelistWalletAddress,
    handleInputWhitelistWalletAddressName,
    handleInputWhitelistWalletAddressImageLink,
    handleInputWhitelistWalletAddressGithub,
    handleInputWhitelistWalletAddressKeybase,
    handleInputWhitelistWalletAddressTelegram,
    handleInputWhitelistWalletAddressTwitter,
    handleInputWhitelistWalletAddressUrl
  };
};

export default useHandleInputs;
