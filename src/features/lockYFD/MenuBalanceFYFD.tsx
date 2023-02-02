import { useEffect, useMemo } from 'react';
import { useRecoilValueLoadable } from 'recoil';

import { Box, Text } from '@chakra-ui/react';
import { selectMyFYFD } from '@recoil/connected/balance/selectors';
import styles from '@scss/app.module.scss';
import NoticeLoading from '@components/NoticeLoading';

export default function PopoverBalanceFYFD() {
  const myFYFD = useRecoilValueLoadable(selectMyFYFD);
  // need to wrap balancefYFD in useMemo to avoid infinite loop
  const balancefYFD = useMemo(() => {
    if (myFYFD.state == 'hasValue') {
      return myFYFD.contents;
    } else {
      return <NoticeLoading />;
    }
  }, [myFYFD]);

  return (
    <>
      <Box>
        fYFD
        <>
          <Text className={styles.menuFyfdBalance}>{balancefYFD}</Text>
        </>
      </Box>
    </>
  );
}
