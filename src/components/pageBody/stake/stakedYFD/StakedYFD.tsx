import { Box } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';
import stakedYFDAtom from 'recoil/stakedYFD/atom';
import StakeItem from './StakeItem';

function StakedYFD() {
  const stakedYFD = useRecoilValue(stakedYFDAtom);
  return (
    <div>
      {stakedYFD.map((stake: any) => {
        return (
          <Box key={stake.idx}>
            <StakeItem stake={stake} />
          </Box>
        );
      })}
    </div>
  );
}

export default StakedYFD;
