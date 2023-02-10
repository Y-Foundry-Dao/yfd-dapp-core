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
      return Math.round(parseInt(myFYFD.contents)).toLocaleString();
    } else {
      return <></>;
    }
  }, [myFYFD]);

  if (isNumber(+balancefYFD)) {
    return <>{balancefYFD}</>;
  } else {
    return <NoticeLoading />;
  }
}
