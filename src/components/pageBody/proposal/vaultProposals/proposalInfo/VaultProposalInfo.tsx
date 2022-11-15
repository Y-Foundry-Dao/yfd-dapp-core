import { Box, Flex, Text } from '@chakra-ui/react';
import useContractVaultProposal from 'hooks/useContractVaultProposal';
import FundingInfo from './funding/FundingInfo';

function VaultProposalInfo({ proposalContract, proposalIndex }: any) {
  const { vaultProposalInfo } = useContractVaultProposal({
    proposalContract,
    proposalIndex
  });

  return (
    <Flex direction="column" gap={4}>
      <Text>Proposal Name: {vaultProposalInfo.name}</Text>
      <Text>Closing Block: {vaultProposalInfo.closing_block}</Text>
      <Text>
        Quorum Block:{' '}
        {vaultProposalInfo.quorum_block === null
          ? 'Voting still in progress'
          : vaultProposalInfo.quorum_block}
      </Text>
    </Flex>
  );
}

export default VaultProposalInfo;
