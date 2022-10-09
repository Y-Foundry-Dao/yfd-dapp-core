import { Text } from '@chakra-ui/react';
import React from 'react';
import { useRecoilValue } from 'recoil';
import stakedYFDAtom from 'recoil/stakedYFD/atom';

function StakedYFD() {
  const stakedYFD = useRecoilValue(stakedYFDAtom);
  return (
    <div>
      {stakedYFD.map((stake: any) => {
        return (
          <Text key={stake.idx}>
            Index of Stake:
            {stake.idx}
          </Text>
        );
      })}
    </div>
  );
}

export default StakedYFD;
