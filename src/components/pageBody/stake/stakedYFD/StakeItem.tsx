import { AccordionButton, AccordionPanel, Box, Text } from '@chakra-ui/react';
import useStake from 'hooks/useStake';

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
      <AccordionButton bgGradient="linear(yellow.500 0%, orange.100 25%, yellow.100 50%)">
        <AccordionPanel>
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
        </AccordionPanel>
      </AccordionButton>
    </Box>
  );
}

export default StakeItem;
