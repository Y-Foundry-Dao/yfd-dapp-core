import { Flex, Text } from '@chakra-ui/react';
import useContractGovernanceProposal from 'hooks/useContractGovernanceProposal';

function ProposalInfo({ proposalContract, proposalIndex }: any) {
  const { governanceProposalInfo } = useContractGovernanceProposal({
    proposalContract,
    proposalIndex
  });
  const objectConverted = Object.keys(governanceProposalInfo);
  const proposalType =
    objectConverted.length !== 0 &&
    Object.keys(governanceProposalInfo.detail)[0];
  return (
    <Flex direction="column" gap={4}>
      <Text>Proposal Name: {governanceProposalInfo.name}</Text>
      <>Type of Proposal: {proposalType}</>
      <Text>Closing block: {governanceProposalInfo.closing_block}</Text>
      <Text>
        Quorum Block:{' '}
        {governanceProposalInfo.quorum_block === null
          ? 'Voting still in progress'
          : governanceProposalInfo.quorum_block}
      </Text>
    </Flex>
  );
}

export default ProposalInfo;
