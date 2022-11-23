import useMsg from 'hooks/useMsg';
import { FORGE_TEST, YFD_TEST } from 'utilities/variables/variables';
import Base64 from 'utilities/base64';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import msgEncodedStake from 'utilities/messagesToEncode/msgEncodedStake';
import msgStakeYFD from 'utilities/messagesExecute/msgStakeYFD';
import msgEncodedProposal from 'utilities/messagesToEncode/msgEncodedProposal';
import { useConnectedWallet } from '@terra-money/wallet-provider';
import msgExecuteSend from 'utilities/messagesExecute/msgExecuteSend';
import {
  inputDevelopmentCost,
  inputExpiration,
  inputGithub,
  inputInitialFunding,
  inputNameMsg,
  inputNameProposal,
  inputPaymentFrequency,
  inputPaymentSchedule,
  inputQuorumPercent,
  inputSelfVoucedInformation,
  inputStakeYFD,
  inputStatementOfWork,
  inputTvlLimit,
  inputUrlProposal,
  inputNFTAmount,
  inputDeveloperWallet
} from 'recoil/input/atoms';
import convertToBase from 'utilities/converters/convertToBase';
import msgVoteAffirm from 'utilities/messagesExecute/msgVoteAffirm';
import msgVoteDeny from 'utilities/messagesExecute/msgVoteDeny';
import msgVoteAbstain from 'utilities/messagesExecute/msgVoteAbstain';
import msgVoteDenyWithPenalty from 'utilities/messagesExecute/msgVoteDenyWithPenalty';
import txHashAtom from 'recoil/txHash/atom';
import {
  SUCCESS_CREATE_PROPOSAL,
  SUCCESS_FINALIZED,
  SUCCESS_FUND_PROPOSAL,
  SUCCESS_STAKE,
  SUCCESS_VOTE
} from 'utilities/variables/toastMessages';
import useTx from './useTx';

const useHandleClicks = () => {
  const { executeMsg } = useMsg();
  const connectedWallet = useConnectedWallet();

  const setAmountStakeYFD = useSetRecoilState(inputStakeYFD);

  const { toastSuccessful } = useTx();

  // Pulling in Recoil Values
  const nameProposal = useRecoilValue(inputNameProposal);
  const nameMsg = useRecoilValue(inputNameMsg);
  const urlProposal = useRecoilValue(inputUrlProposal);
  const tvlLimit = useRecoilValue(inputTvlLimit);
  const developmentCost = useRecoilValue(inputDevelopmentCost);
  const statementOfWork = useRecoilValue(inputStatementOfWork);
  const paymentSchedule = useRecoilValue(inputPaymentSchedule);
  const github = useRecoilValue(inputGithub);
  const quorumPercent = useRecoilValue(inputQuorumPercent);
  const selfVouchedInformation = useRecoilValue(inputSelfVoucedInformation);
  const expiration = useRecoilValue(inputExpiration);
  const paymentFrequency = useRecoilValue(inputPaymentFrequency);
  const initialFunding = useRecoilValue(inputInitialFunding);
  const nftAmount = useRecoilValue(inputNFTAmount);
  const developer = useRecoilValue(inputDeveloperWallet);

  const handleClickStakeYFD = async (amount: number, duration: number) => {
    if (!connectedWallet) {
      return;
    }
    // parameter is stake lock duration and set to maximum time
    const msgToEncode = msgEncodedStake(duration);
    const encodedMessage = Base64.btoa(msgToEncode);
    const msgStakeYFDToken = msgStakeYFD(
      FORGE_TEST,
      convertToBase(amount),
      encodedMessage
    );
    // YFD will always be staked to the YFD contract.
    // Therefore it does not need user input.
    // For now the contract is hard coded to testnet but can be made dynamic later
    // By detecting what network we are from and using the appropriate networks contract from there
    const tx = await executeMsg(YFD_TEST, msgStakeYFDToken);
    console.log(tx);
    toastSuccessful(tx, SUCCESS_STAKE);
    setAmountStakeYFD(0);
    return;
  };

  const handleClickCreateProposal = async () => {
    if (connectedWallet) {
      const msgToEncode = msgEncodedProposal(
        nameProposal,
        nameMsg,
        urlProposal,
        nftAmount,
        tvlLimit,
        convertToBase(developmentCost),
        statementOfWork,
        Number(paymentSchedule),
        github,
        selfVouchedInformation,
        paymentFrequency,
        developer
      );
      const encodedMessage = Base64.btoa(msgToEncode);
      const msgCreateProposal = msgExecuteSend(
        FORGE_TEST,
        convertToBase(initialFunding),
        encodedMessage
      );
      const tx = await executeMsg(YFD_TEST, msgCreateProposal);
      console.log(tx);
      toastSuccessful(tx, SUCCESS_CREATE_PROPOSAL);
    }
  };

  const handleClickFundProposal = async (
    proposalContract: any,
    inputFundingAmount: any
  ) => {
    const msgFundProposal = msgExecuteSend(
      proposalContract,
      convertToBase(inputFundingAmount),
      'eyJzdGFrZSI6e319'
    );
    const tx = await executeMsg(YFD_TEST, msgFundProposal);
    toastSuccessful(tx, SUCCESS_FUND_PROPOSAL);
  };

  const handleClickVoteAffirm = async (
    contract: any,
    inputVoteTokenAmount: any
  ) => {
    if (connectedWallet) {
      const tx = await executeMsg(
        contract,
        msgVoteAffirm(convertToBase(inputVoteTokenAmount))
      );
      toastSuccessful(tx, SUCCESS_VOTE);
    }
  };

  const handleClickVoteDeny = async (
    contract: any,
    inputVoteTokenAmount: any
  ) => {
    if (connectedWallet) {
      const tx = await executeMsg(
        contract,
        msgVoteDeny(convertToBase(inputVoteTokenAmount))
      );
      toastSuccessful(tx, SUCCESS_VOTE);
    }
  };

  const handleClickVoteAbstain = async (
    contract: any,
    inputVoteTokenAmount: any
  ) => {
    if (connectedWallet) {
      const tx = await executeMsg(
        contract,
        msgVoteAbstain(convertToBase(inputVoteTokenAmount))
      );
      toastSuccessful(tx, SUCCESS_VOTE);
    }
  };

  const handleClickVoteDenyWithPenalty = async (
    contract: any,
    inputVoteTokenAmount: any
  ) => {
    if (connectedWallet) {
      const tx = await executeMsg(
        contract,
        msgVoteDenyWithPenalty(convertToBase(inputVoteTokenAmount))
      );
      toastSuccessful(tx, SUCCESS_VOTE);
    }
  };

  const handleClickFinalizeEmergency = async (index: any) => {
    if (connectedWallet) {
      const tx = await executeMsg(FORGE_TEST, {
        finalize_emergency: { idx: index }
      });
      toastSuccessful(tx, SUCCESS_FINALIZED);
    }
  };

  const handleClickFinalizeProposal = async (index: any) => {
    if (connectedWallet) {
      const tx = await executeMsg(FORGE_TEST, {
        finalize_proposal: { idx: index }
      });
      toastSuccessful(tx, SUCCESS_FINALIZED);
    }
  };

  const handleClickFinalizeVaultProposal = async (index: any) => {
    if (connectedWallet) {
      const tx = await executeMsg(FORGE_TEST, {
        finalize_vault_proposal: { idx: index }
      });
      toastSuccessful(tx, SUCCESS_FINALIZED);
    }
  };

  return {
    handleClickStakeYFD,
    handleClickCreateProposal,
    handleClickFundProposal,
    handleClickVoteAffirm,
    handleClickVoteDeny,
    handleClickVoteAbstain,
    handleClickVoteDenyWithPenalty,
    handleClickFinalizeEmergency,
    handleClickFinalizeProposal,
    handleClickFinalizeVaultProposal
  };
};

export default useHandleClicks;
