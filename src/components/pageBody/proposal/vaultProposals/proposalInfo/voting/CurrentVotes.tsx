import { Box, Heading, Text } from '@chakra-ui/react';
import useContractVaultProposal from 'hooks/useContractVaultProposal';
import React from 'react';

function CurrentVotes({ proposalContract, proposalIndex }: any) {
  const { proposalVoteInfo } = useContractVaultProposal({
    proposalContract,
    proposalIndex
  });
  return (
    <Box>
      <Text> Vote Counts out of {proposalVoteInfo.total_supply}</Text>
      <Text>Affirm: {proposalVoteInfo.affirm}</Text>
      <Text>Abstain: {proposalVoteInfo.abstain}</Text>
      <Text>Deny: {proposalVoteInfo.deny}</Text>
      <Text>Deny with Penalty: {proposalVoteInfo.deny_with_penalty}</Text>
    </Box>
  );
}

export default CurrentVotes;
