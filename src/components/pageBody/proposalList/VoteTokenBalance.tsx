import { Text } from '@chakra-ui/react';

function VoteTokenBalance({ voteTokenBalance }: any) {
  return (
    <Text>
      Vote Tokens:{' '}
      {voteTokenBalance !== undefined
        ? (voteTokenBalance.balance * Math.pow(10, -6)).toFixed(3)
        : 'No vote tokens'}
    </Text>
  );
}

export default VoteTokenBalance;
