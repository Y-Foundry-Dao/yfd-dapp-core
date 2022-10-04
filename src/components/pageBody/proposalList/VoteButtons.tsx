import { Button, Flex, Text } from '@chakra-ui/react';

function VoteButtons({ voteTokenBalance }: any) {
  return (
    <>
      {voteTokenBalance !== undefined && voteTokenBalance.balance > 0 ? (
        <Flex direction="column" align="stretch" rowGap={4}>
          <Button>Vote Affirm</Button>
          <Button>Vote Deny</Button>
          <Button>Vote Abstain</Button>
          <Button>Vote Deny with Penalty</Button>
        </Flex>
      ) : (
        <Text>No vote tokens for this proposal</Text>
      )}
    </>
  );
}

export default VoteButtons;
