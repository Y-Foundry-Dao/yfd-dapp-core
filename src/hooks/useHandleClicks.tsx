import useMsg from './useMsg';
import { FORGE_TEST, YFD_TEST } from 'utilities/variables/variables';
import Base64 from 'utilities/base64';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import msgEncodedStake from 'utilities/messagesToEncode/msgEncodedStake';
import msgStakeYFD from 'utilities/messagesExecute/msgStakeYFD';
import { useToast } from '@chakra-ui/react';
import FinderTxLink from 'components/basic/finder/FinderTxLink';
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
  inputUrlProposal
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

const useHandleClicks = () => {
  const { executeMsg } = useMsg();
  const toast = useToast();
  const connectedWallet = useConnectedWallet();
  const setTxHashInRecoil = useSetRecoilState(txHashAtom);
  const setAmountStakeYFD = useSetRecoilState(inputStakeYFD);

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

  const handleClickStakeYFD = async (amount: number, duration: number) => {
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
    setTxHashInRecoil(tx);
    tx !== 'failed' &&
      tx !== undefined &&
      toast({
        title: SUCCESS_STAKE,
        description: <FinderTxLink txHash={tx} />,
        status: 'success',
        duration: 9000,
        isClosable: true
      });
    setAmountStakeYFD(0);
    return;
  };

  const handleClickCreateProposal = async () => {
    if (connectedWallet) {
      const msgToEncode = msgEncodedProposal(
        nameProposal,
        nameMsg,
        urlProposal,
        tvlLimit,
        convertToBase(developmentCost),
        statementOfWork,
        Number(paymentSchedule),
        github,
        quorumPercent,
        selfVouchedInformation,
        expiration,
        paymentFrequency,
        connectedWallet?.walletAddress
      );
      const encodedMessage = Base64.btoa(msgToEncode);
      const msgCreateProposal = msgExecuteSend(
        FORGE_TEST,
        convertToBase(initialFunding),
        encodedMessage
      );
      const tx = await executeMsg(YFD_TEST, msgCreateProposal);
      setTxHashInRecoil(tx);
      tx !== 'failed' &&
        toast({
          title: SUCCESS_CREATE_PROPOSAL,
          description: <FinderTxLink txHash={tx} />,
          status: 'success',
          duration: 9000,
          isClosable: true
        });
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
    setTxHashInRecoil(tx);
    tx !== 'failed' &&
      toast({
        title: SUCCESS_FUND_PROPOSAL,
        description: <FinderTxLink txHash={tx} />,
        status: 'success',
        duration: 9000,
        isClosable: true
      });
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
      setTxHashInRecoil(tx);
      tx !== 'failed' &&
        toast({
          title: SUCCESS_VOTE,
          description: <FinderTxLink txHash={tx} />,
          status: 'success',
          duration: 9000,
          isClosable: true
        });
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
      setTxHashInRecoil(tx);
      tx !== 'failed' &&
        toast({
          title: SUCCESS_VOTE,
          description: <FinderTxLink txHash={tx} />,
          status: 'success',
          duration: 9000,
          isClosable: true
        });
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
      setTxHashInRecoil(tx);
      tx !== 'failed' &&
        toast({
          title: SUCCESS_VOTE,
          description: <FinderTxLink txHash={tx} />,
          status: 'success',
          duration: 9000,
          isClosable: true
        });
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
      setTxHashInRecoil(tx);
      tx !== 'failed' &&
        toast({
          title: SUCCESS_VOTE,
          description: <FinderTxLink txHash={tx} />,
          status: 'success',
          duration: 9000,
          isClosable: true
        });
    }
  };

  const handleClickFinalizeProposal = async (index: any) => {
    if (connectedWallet) {
      const tx = await executeMsg(FORGE_TEST, {
        finalize_emergency: { idx: index }
      });
      setTxHashInRecoil(tx);
      tx !== 'failed' &&
        toast({
          title: SUCCESS_FINALIZED,
          description: <FinderTxLink txHash={tx} />,
          status: 'success',
          duration: 9000,
          isClosable: true
        });
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
    handleClickFinalizeProposal
  };
};

export default useHandleClicks;
