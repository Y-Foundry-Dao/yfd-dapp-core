import { Text } from '@chakra-ui/react';
import convertFromBase from 'utilities/converters/convertFromBase';

function EmergencyVoteBalance({ symbol, voteTokenBalance }: any) {
  return (
    <>
      <Text>
        {symbol} Tokens:{' '}
        {voteTokenBalance > 0
          ? convertFromBase(voteTokenBalance).toFixed(3)
          : '0'}
      </Text>
    </>
  );
}

export default EmergencyVoteBalance;
