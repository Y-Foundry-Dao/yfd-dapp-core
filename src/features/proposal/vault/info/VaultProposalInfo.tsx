import { Flex, Text } from '@chakra-ui/react';
import useContractVaultProposal from 'hooks/useContractVaultProposal';
import { useRecoilValue } from 'recoil';
import { currentBlockHeightAtom } from 'recoil/chainInfo/atoms';
import MintNFT from './nfts/MintNFT';
import VaultProposalTimer from './VaultProposalTimer';

function VaultProposalInfo({ proposalContract, proposalIndex }: any) {
  const { vaultProposalInfo, fundingInfo, proposalVoteInfo } =
    useContractVaultProposal({
      proposalContract,
      proposalIndex
    });
  const currentBlockHeight = useRecoilValue(currentBlockHeightAtom);

  const isNotAtQuorum = () => {
    return (
      vaultProposalInfo.quorum_block == null &&
      currentBlockHeight < vaultProposalInfo.closing_block
    );
  };
  const isNoQuorum = () => {
    return (
      vaultProposalInfo.quorum_block == null &&
      currentBlockHeight > vaultProposalInfo.closing_block
    );
  };
  const isVotingFinalized = () => {
    const voteNotFinalized = proposalVoteInfo.vote_state?.NotFinalized;
    return voteNotFinalized ? false : true;
  };
  const isFundingMet = () => {
    return fundingInfo.balance === fundingInfo.development_cost;
  };
  const isMintable = () => {
    return isFundingMet() && isVotingFinalized();
  };

  return (
    <Flex direction="column" gap={4}>
      <Text>Proposal Name: {vaultProposalInfo.name}</Text>
      <Text>Closing Block: {vaultProposalInfo.closing_block}</Text>
      <Text>
        Quorum Block:
        {isNotAtQuorum() && 'Voting still in progress'}
        {isNoQuorum() && 'No Quorum'}
        {vaultProposalInfo.quorum_block && vaultProposalInfo.quorum_block}
      </Text>
      <VaultProposalTimer vaultProposalInfo={vaultProposalInfo} />
      {isMintable() && (
        <MintNFT
          proposalContract={proposalContract}
          proposalIndex={proposalIndex}
        />
      )}
    </Flex>
  );
}

export default VaultProposalInfo;
