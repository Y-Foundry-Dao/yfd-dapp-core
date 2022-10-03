import useContract from './useContract';
import { FORGE_TEST, YFD_TEST } from 'utilities/variables';
import Base64 from 'utilities/base64';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import msgEncodedStake from 'utilities/messagesToEncode/msgEncodedStake';
import msgStakeYFD from 'utilities/messagesExecute/msgStakeYFD';
import { useState } from 'react';
import amountDepositYFDAtom from 'recoil/amountDepositYFD/atom';
import { useToast } from '@chakra-ui/react';
import FinderTxLink from 'components/basic/finder/FinderTxLink';
import msgEncodedProposal from 'utilities/messagesToEncode/msgEncodedProposal';
import { useConnectedWallet } from '@terra-money/wallet-provider';
import msgExecuteSend from 'utilities/messagesExecute/msgExecuteSend';
import {
  inputDevelopmentCost,
  inputGitHub,
  inputNameProposal,
  inputPaymentFrequency,
  inputPaymentSchedule,
  inputQuorumPercent,
  inputSelfVoucedInformation,
  inputStatementOfWork,
  inputTvlLimit,
  inputUrlProposal
} from 'recoil/input/atoms';

const useHandleClicks = () => {
  const { executeMsg } = useContract();
  const [txHashTest, setTxHashTest] = useState('');
  const toast = useToast();
  const setAmountDepositYFD = useSetRecoilState(amountDepositYFDAtom);
  const connectedWallet = useConnectedWallet();
  const nameProposal = useRecoilValue(inputNameProposal);
  const urlProposal = useRecoilValue(inputUrlProposal);
  const tvlLimit = useRecoilValue(inputTvlLimit);
  const developmentCost = useRecoilValue(inputDevelopmentCost);
  const statementOfWork = useRecoilValue(inputStatementOfWork);
  const paymentSchedule = useRecoilValue(inputPaymentSchedule);
  const github = useRecoilValue(inputGitHub);
  const quorumPercent = useRecoilValue(inputQuorumPercent);
  const selfVouchedInformation = useRecoilValue(inputSelfVoucedInformation);

  const handleClickStakeYFD = async (amount: number) => {
    const amountConverted: number = amount * Math.pow(10, 6);
    // parameter is stake lock duration and set to maximum time
    const msgToEncode = msgEncodedStake(10512000);
    const encodedMessage = Base64.btoa(msgToEncode);
    const msgStakeYFDToken = msgStakeYFD(
      FORGE_TEST,
      amountConverted,
      encodedMessage
    );
    // YFD will always be staked to the YFD contract.
    // Therefore it does not need user input.
    // For now the contract is hard coded to testnet but can be made dynamic later
    // By detecting what network we are from and using the appropriate networks contract from there
    const tx = await executeMsg(YFD_TEST, msgStakeYFDToken);

    console.log(tx);
    setTxHashTest(tx);
    (tx !== 0 || undefined) &&
      toast({
        title: 'Successfully staked YFD',
        description: <FinderTxLink txHash={tx} />,
        status: 'success',
        duration: 9000,
        isClosable: true
      });
    setAmountDepositYFD(0);
    return;
  };

  const handleClickProposal = async () => {
    // console.log('test');
    if (connectedWallet) {
      const msgToEncode = msgEncodedProposal(
        nameProposal,
        urlProposal,
        tvlLimit,
        developmentCost,
        statementOfWork,
        Number(paymentSchedule),
        github,
        quorumPercent,
        selfVouchedInformation,
        connectedWallet?.walletAddress
      );
      const encodedMessage = Base64.btoa(msgToEncode);
      const msgCreateProposal = msgExecuteSend(
        FORGE_TEST,
        5000,
        encodedMessage
      );
      const tx = await executeMsg(YFD_TEST, msgCreateProposal);
      console.log(tx);
      setTxHashTest(tx);
      (tx !== 0 || undefined) &&
        toast({
          title: 'Successfully Created Proposal',
          description: <FinderTxLink txHash={tx} />,
          status: 'success',
          duration: 9000,
          isClosable: true
        });
    }
  };

  return {
    handleClickStakeYFD,
    handleClickProposal,
    txHashTest
  };
};

export default useHandleClicks;
