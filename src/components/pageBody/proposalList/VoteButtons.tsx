import { Button, Flex, Text, useToast } from '@chakra-ui/react';
import { useConnectedWallet } from '@terra-money/wallet-provider';
import FinderTxLink from 'components/basic/finder/FinderTxLink';
import useContract from 'hooks/useContract';
import msgExecuteSend from 'utilities/messagesExecute/msgExecuteSend';
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
  const handleClickVoteAffirm = async () => {
    if (connectedWallet) {
      const tx = await executeMsg(
        contract,
        msgVoteAffirm(inputVoteTokenAmount * Math.pow(10, 6))
      );
      console.log(tx);
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
        msgVoteDeny(inputVoteTokenAmount * Math.pow(10, 6))
      );
      console.log(tx);
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
        msgVoteAbstain(inputVoteTokenAmount * Math.pow(10, 6))
      );
      console.log(tx);
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
        msgVoteDenyWithPenalty(inputVoteTokenAmount * Math.pow(10, 6))
      );
      console.log(tx);
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
      ) : (
        <Text>No vote tokens for this proposal</Text>
      )}
    </>
  );
}

export default VoteButtons;
