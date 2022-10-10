import { Box, Text } from '@chakra-ui/react';
import useStake from 'hooks/useStake';
import convertFromBase from 'utilities/converters/convertFromBase';

function StakeItem({ stake }: any) {
  const {
    depositDateFormatted,
    unlockDateFormatted,
    lockDurationFormatted,
    timeUntilUnlockFormatted,
    amountStaked
  } = useStake({ stake });
  return (
    <Box layerStyle={'stakeItemCard'} key={stake.idx}>
      <Text>Index of Stake: {stake.idx}</Text>
      <Text>
        Amount Staked:<>{amountStaked}</>
      </Text>
      <Text>
        Initial Deposit Time: <>{depositDateFormatted}</>
      </Text>
      <Text>
        Lock Duration: <>{lockDurationFormatted}</>
      </Text>
      <Text>
        Unlock on: <>{unlockDateFormatted}</>
      </Text>
      <Text>
        Time Left: <>{timeUntilUnlockFormatted}</>
      </Text>
    </Box>
  );
}

export default StakeItem;
