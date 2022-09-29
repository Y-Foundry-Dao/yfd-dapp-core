import useContract from './useContract';
import { FORGE_TEST, YFD_TEST } from 'utilities/variables';
import Base64 from 'utilities/base64';
import { useSetRecoilState } from 'recoil';
import msgEncodedStake from 'utilities/messagesToEncode/msgEncodedStake';
import msgStakeYFD from 'utilities/messagesExecute/msgStakeYFD';
import { useState } from 'react';
import amountDepositYFDAtom from 'recoil/amountDepositYFD/atom';
import { useToast } from '@chakra-ui/react';
import FinderLink from 'components/basic/toast/FinderLink';

const useHandleClicks = () => {
  const { executeMsg } = useContract();
  const [txHashTest, setTxHashTest] = useState('');
  const toast = useToast();
  const setAmountDepositYFD = useSetRecoilState(amountDepositYFDAtom);

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
    tx !== 0 &&
      toast({
        title: 'Successfully staked YFD',
        description: <FinderLink txHash={tx} />,
        status: 'success',
        duration: 9000,
        isClosable: true
      });
    setAmountDepositYFD(0);
    return;
  };

  return {
    handleClickStakeYFD,
    txHashTest
  };
};

export default useHandleClicks;
