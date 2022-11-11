import { useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import convertFromBase from 'utilities/converters/convertFromBase';
import useContractProposal from 'hooks/useContractProposal';
import useContractVaultProposal from 'hooks/useContractVaultProposal';

function VaultProposalInfo({ proposalContract, proposalIndex }: any) {
  const { vaultProposalInfo } = useContractVaultProposal({
    proposalContract,
    proposalIndex
  });

  return (
    <Flex direction="column" gap={4}>
      {/* <>{console.log(vaultProposalInfo)}</> */}
      <Text>Proposal Name: {vaultProposalInfo.name}</Text>
      <Text>Closing Block: {vaultProposalInfo.closing_block}</Text>
      <Text>
        Quorum Block:{' '}
        {vaultProposalInfo.quorum_block === null
          ? 'Voting still in progress'
          : vaultProposalInfo.quorum_block}
      </Text>
      {/* <Text>Proposal Name: {proposalInfo.name}</Text>
      <Text>Proposal URL: {proposalInfo.proposal_url}</Text>
      <Text>Statement of Work URL: {proposalInfo.statement_of_work}</Text>
      <Text>Developer: {proposalInfo.developer}</Text>
      <Text>
        Development Cost: {convertFromBase(proposalInfo.development_cost)} YFD
      </Text>
      <Text>Developer Github: {proposalInfo.github}</Text>
      <Text>TVL Limit: {proposalInfo.tvl_limit}</Text> */}
    </Flex>
  );
}

export default VaultProposalInfo;
