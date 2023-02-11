import { useMemo } from 'react';
import { useRecoilValueLoadable } from 'recoil';

import { Text, useToast } from '@chakra-ui/react';
import { selectMyFYFD } from '@recoil/connected/balance/selectors';
import FYFDValue from './FYFDValue';
import styles from '@scss/app.module.scss';

export default function PopoverBalanceFYFD() {
  const myFYFD = useRecoilValueLoadable(selectMyFYFD);
  const balancefYFD = useMemo(() => {
    if (myFYFD.state == 'hasValue') {
      return Math.round(+myFYFD.contents).toLocaleString();
    } else {
      return '0';
    }
  }, [myFYFD]);
  const toast = useToast();

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
              balancefYFD +
              ' has been copied to your clipboard.',
            status: 'info',
            duration: 5000,
            isClosable: true
          });
        }}
      >
        <FYFDValue />
      </Text>
    </>
  );
}
