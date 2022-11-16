import { Box, Text } from '@chakra-ui/react';
import useContractVaultProposal from 'hooks/useContractVaultProposal';
import React from 'react';
import convertFromBase from 'utilities/converters/convertFromBase';
import convertToBase from 'utilities/converters/convertToBase';
import FundProposal from './FundProposal';

function FundingInfo({ proposalContract, proposalIndex }: any) {
  const { fundingInfo, vaultProposalInfo } = useContractVaultProposal({
    proposalContract,
    proposalIndex
  });
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
      {fundingInfo.balance < fundingInfo.development_cost
        ? vaultProposalInfo.quorum_block == null && (
            <FundProposal proposalContract={proposalContract} />
          )
        : null}
    </Box>
  );
}

export default FundingInfo;
