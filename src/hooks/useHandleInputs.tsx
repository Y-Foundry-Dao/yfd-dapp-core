import { useSetRecoilState } from 'recoil';
import {
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
  inputUrlProposal
} from 'recoil/input/atoms';

const useHandleInputs = () => {
  const setSelfVouchedInformation = useSetRecoilState(
    inputSelfVoucedInformation
  );
  const setAmountStakeYFD = useSetRecoilState(inputStakeYFD);
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
    handleInputNFTAmount
  };
};

export default useHandleInputs;
