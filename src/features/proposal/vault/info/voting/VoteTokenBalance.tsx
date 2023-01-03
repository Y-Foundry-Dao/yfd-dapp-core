import { Text } from '@chakra-ui/react';
import useContractProposal from 'hooks/useContractProposal';
import useContractVaultProposal from 'hooks/useContractVaultProposal';
import convertFromBase from 'utilities/converters/convertFromBase';

function VoteTokenBalance({ proposalContract, voteTokenBalance }: any) {
  const { tokenSymbol } = useContractVaultProposal({ proposalContract });

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
