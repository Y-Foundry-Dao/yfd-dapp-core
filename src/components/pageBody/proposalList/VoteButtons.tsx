import { Button, Flex, Text, useToast } from '@chakra-ui/react';
import { useConnectedWallet } from '@terra-money/wallet-provider';
import FinderTxLink from 'components/basic/finder/FinderTxLink';
import useContract from 'hooks/useContract';
import { useSetRecoilState } from 'recoil';
import txHashAtom from 'recoil/txHash/atom';
import convertToBase from 'utilities/converters/convertToBase';
import msgVoteAbstain from 'utilities/messagesExecute/msgVoteAbstain';
import msgVoteAffirm from 'utilities/messagesExecute/msgVoteAffirm';
import msgVoteDeny from 'utilities/messagesExecute/msgVoteDeny';
import msgVoteDenyWithPenalty from 'utilities/messagesExecute/msgVoteDenyWithPenalty';

function VoteButtons({
  contract,
  voteTokenBalance,
  inputVoteTokenAmount
}: any) {
  const connectedWallet = useConnectedWallet();
  const { executeMsg } = useContract();
  const toast = useToast();
  const setTxHash = useSetRecoilState(txHashAtom);
  const handleClickVoteAffirm = async () => {
    if (connectedWallet) {
      const tx = await executeMsg(
        contract,
        msgVoteAffirm(convertToBase(inputVoteTokenAmount))
      );
      setTxHash(tx);
      (tx !== 0 || undefined) &&
        toast({
          title: 'Successfully Voted',
          description: <FinderTxLink txHash={tx} />,
          status: 'success',
          duration: 9000,
          isClosable: true
        });
    }
  };

  const handleClickVoteDeny = async () => {
    if (connectedWallet) {
      const tx = await executeMsg(
        contract,
        msgVoteDeny(convertToBase(inputVoteTokenAmount))
      );
      setTxHash(tx);
      (tx !== 0 || undefined) &&
        toast({
          title: 'Successfully Voted',
          description: <FinderTxLink txHash={tx} />,
          status: 'success',
          duration: 9000,
          isClosable: true
        });
    }
  };

  const handleClickVoteAbstain = async () => {
    if (connectedWallet) {
      const tx = await executeMsg(
        contract,
        msgVoteAbstain(convertToBase(inputVoteTokenAmount))
      );
      setTxHash(tx);
      (tx !== 0 || undefined) &&
        toast({
          title: 'Successfully Voted',
          description: <FinderTxLink txHash={tx} />,
          status: 'success',
          duration: 9000,
          isClosable: true
        });
    }
  };

  const handleClickVoteDenyWithPenalty = async () => {
    if (connectedWallet) {
      const tx = await executeMsg(
        contract,
        msgVoteDenyWithPenalty(convertToBase(inputVoteTokenAmount))
      );
      setTxHash(tx);
      (tx !== 0 || undefined) &&
        toast({
          title: 'Successfully Voted',
          description: <FinderTxLink txHash={tx} />,
          status: 'success',
          duration: 9000,
          isClosable: true
        });
    }
  };

  return (
    <>
      {voteTokenBalance !== undefined && voteTokenBalance.balance > 0 ? (
        <Flex direction="column" align="stretch" rowGap={4}>
          <Button onClick={handleClickVoteAffirm}>Vote Affirm</Button>
          <Button onClick={handleClickVoteDeny}>Vote Deny</Button>
          <Button onClick={handleClickVoteAbstain}>Vote Abstain</Button>
          <Button onClick={handleClickVoteDenyWithPenalty}>
            Vote Deny with Penalty
          </Button>
        </Flex>
      ) : null}
    </>
  );
}

export default VoteButtons;
