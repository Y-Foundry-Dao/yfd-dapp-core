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
  const balancefYFD = Math.round(parseInt(myFYFD.contents)).toLocaleString();

  if (myFYFD.state == 'hasValue') {
    return <>{balancefYFD}</>;
  } else {
    return <NoticeLoading />;
  }
}
