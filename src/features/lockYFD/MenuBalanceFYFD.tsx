import { useEffect, useMemo } from 'react';
import { useRecoilValueLoadable } from 'recoil';

import { Box, Text, useToast } from '@chakra-ui/react';
import { selectMyFYFD } from '@recoil/connected/balance/selectors';
import styles from '@scss/app.module.scss';
import NoticeLoading from '@components/NoticeLoading';
import { isNumber } from 'lodash';

export default function PopoverBalanceFYFD() {
  const myFYFD = useRecoilValueLoadable(selectMyFYFD);
  const toast = useToast();
  // need to wrap balancefYFD in useMemo to avoid infinite loop
  const balancefYFD = useMemo(() => {
    if (myFYFD.state == 'hasValue' && isNumber(+myFYFD.contents)) {
      return myFYFD.contents;
    } else {
      return <></>;
    }
  }, [myFYFD]);

  if (isNumber(+balancefYFD)) {
    return (
      <>
        <Text
          className={styles.popoverFyfdBalance}
          // onClick copy to clipboard
          onClick={() => {
            navigator.clipboard.writeText(balancefYFD.toString());
            toast({
              position: 'top',
              title: 'Copied!',
              description:
                'Your fYFD balance of ' +
                Math.round(+balancefYFD).toLocaleString() +
                ' has been copied to your clipboard.',
              status: 'info',
              duration: 5000,
              isClosable: true
            });
          }}
        >
          {isNumber(+balancefYFD)
            ? Math.round(parseInt(balancefYFD.toString())).toLocaleString()
            : ''}
        </Text>
      </>
    );
  } else {
    console.log('NaN returned for fYFD Value', balancefYFD);
    return <></>;
  }
}
