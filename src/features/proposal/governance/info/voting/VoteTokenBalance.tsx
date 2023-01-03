import { Text } from '@chakra-ui/react';
import useContractGovernanceProposal from '@hooks/useContractGovernanceProposal';
import useContractProposal from 'hooks/useContractProposal';
import convertFromBase from 'utilities/converters/convertFromBase';

function VoteTokenBalance({ proposalContract, voteTokenBalance }: any) {
  const { tokenSymbol } = useContractGovernanceProposal({ proposalContract });

  return (
    <>
      <Text>
        {tokenSymbol} Tokens:{' '}
        {voteTokenBalance > 0
          ? convertFromBase(voteTokenBalance).toFixed(3)
          : '0'}
      </Text>
    </>
  );
}

export default VoteTokenBalance;
