import { Box, Text } from '@chakra-ui/react';
import useContractVaultProposal from 'hooks/useContractVaultProposal';
import { useRecoilValue } from 'recoil';
import { currentBlockHeightAtom } from 'recoil/chainInfo/atoms';
import convertFromBase from 'utilities/converters/convertFromBase';
import FundProposal from './FundProposal';

function FundingInfo({ proposalContract, proposalIndex }: any) {
  const { fundingInfo, vaultProposalInfo } = useContractVaultProposal({
    proposalContract,
    proposalIndex
  });
  const currentBlockHeight = useRecoilValue(currentBlockHeightAtom);
  const isCurrentBlockBeforeClosingBlock = () => {
    return currentBlockHeight < vaultProposalInfo.closing_block;
  };
  const isCurrentFundingLessThanRequiredAmount = () => {
    return Number(fundingInfo.balance) < Number(fundingInfo.development_cost);
  };
  const isNotAtQuorum = () => {
    return (
      vaultProposalInfo.quorum_block == null ||
      currentBlockHeight < vaultProposalInfo.quorum_block
    );
  };
  const isFundable = () => {
    return (
      isCurrentBlockBeforeClosingBlock() &&
      isCurrentFundingLessThanRequiredAmount() &&
      isNotAtQuorum()
    );
  };
  return (
    <Box layerStyle="fundingInfo">
      FundingInfo
      <Text>
        Required Funding:{' '}
        {convertFromBase(fundingInfo.development_cost).toFixed(3)}
      </Text>
      <Text>
        Currently Funded: {convertFromBase(fundingInfo.balance).toFixed(3)}
      </Text>
      {isFundable() && <FundProposal proposalContract={proposalContract} />}
    </Box>
  );
}

export default FundingInfo;
