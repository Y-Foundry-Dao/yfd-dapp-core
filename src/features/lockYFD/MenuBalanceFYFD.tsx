import { useEffect, useMemo } from 'react';
import { useRecoilValueLoadable } from 'recoil';

import { Box, Text, useToast } from '@chakra-ui/react';
import { selectMyFYFD } from '@recoil/connected/balance/selectors';
import styles from '@scss/app.module.scss';
import NoticeLoading from '@components/NoticeLoading';

export default function PopoverBalanceFYFD() {
  const myFYFD = useRecoilValueLoadable(selectMyFYFD);
  const toast = useToast();
  // need to wrap balancefYFD in useMemo to avoid infinite loop
  const balancefYFD = useMemo(() => {
    if (myFYFD.state == 'hasValue') {
      return myFYFD.contents;
    } else {
      return '<NoticeLoading />';
    }
  }, [myFYFD]);

  return (
    <>
      <fieldset className={styles.popoverActionsSection} role="presentation">
        <legend className={styles.headingLegend} role="presentation">
          <h2>fYFD</h2>
        </legend>
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
            {Math.round(parseInt(balancefYFD.toString())).toLocaleString()}
          </Text>
        </>
      </fieldset>
    </>
  );
}
