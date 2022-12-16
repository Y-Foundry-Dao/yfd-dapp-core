import { useRecoilValue } from 'recoil';
import stakedYFDAtom from '@recoil/stakedYFD/atom';
import StakeItem from './StakeItem';
import useStake from '@hooks/useStake';
import {
  Accordion,
  AccordionPanel,
  AccordionIcon,
  AccordionButton,
  AccordionItem,
  Flex,
  Box,
  Spacer
} from '@chakra-ui/react';
function StakedYFD() {
  const stakedYFD = useRecoilValue(stakedYFDAtom);

  return (
    <Accordion>
      <div>
        {stakedYFD.map((stake: any) => {
          return (
            <AccordionItem key={stake.idx} bgColor="yellow.300">
              <Flex>
                <Box>Staked YFD {stake.idx}</Box>
                <Spacer />
                <Box>Claimable: xxx,xxx</Box>
              </Flex>
              <StakeItem stake={stake} />
            </AccordionItem>
          );
        })}
      </div>
    </Accordion>
  );
}

export default StakedYFD;
