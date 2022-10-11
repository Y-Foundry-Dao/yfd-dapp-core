import { Box } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';
import stakedYFDAtom from 'recoil/stakedYFD/atom';
import StakeItem from './StakeItem';
import { Accordion, AccordionPanel, AccordionIcon, AccordionButton, AccordionItem } from '@chakra-ui/react';
function StakedYFD() {
  const stakedYFD = useRecoilValue(stakedYFDAtom);
  return (
    <Accordian>
      <AccordionItem>
        <AccordionButton>
          <div>
          {stakedYFD.map((stake: any) => {
            return (
              <Box key={stake.idx}>
                <StakeItem stake={stake} />
              </Box>
            );
          })}
      </AccordionItem>
    </Accordian>
    </div>
  );
}

export default StakedYFD;
