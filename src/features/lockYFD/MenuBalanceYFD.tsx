import { useMemo } from 'react';
import { useRecoilValueLoadable } from 'recoil';

import { Box, Text } from '@chakra-ui/react';
import { selectMyYFD } from '@recoil/connected/balance/selectors';
import styles from '@scss/app.module.scss';
import NoticeLoading from '@components/NoticeLoading';

export default function PopoverBalanceYFD() {
  const myYFD = useRecoilValueLoadable(selectMyYFD);
  // need to wrap balancefYFD in useMemo to avoid infinite loop
  const balanceYFD = useMemo(() => {
    if (myYFD.state == 'hasValue') {
      return myYFD.contents;
    } else {
      return <NoticeLoading />;
    }
  }, [myYFD]);

  return (
    <>
      <fieldset className={styles.popoverYfdSection} role="presentation">
        <legend className={styles['legend-tiny']} role="presentation">
          <h2 className={styles.legendHeader}>YFD</h2>
        </legend>
        <>
          <Text className={styles.popoverYfdBalance}>{balanceYFD}</Text>
        </>
      </fieldset>
    </>
  );
}
