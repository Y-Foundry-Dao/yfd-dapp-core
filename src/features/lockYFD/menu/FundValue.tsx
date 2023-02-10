import { useRecoilValueLoadable } from 'recoil';
import { Button, Box, useToast, SimpleGrid } from '@chakra-ui/react';
import styles from '@scss/app.module.scss';

import { selectMyYFD, selectMyFYFD } from '@recoil/connected/balance/selectors';
import NoticeLoading from '@components/NoticeLoading';
import { Icons } from '@utilities/variables/icons';

export default function FYFDFundValue() {
  const toast = useToast();
  const myFYFD = useRecoilValueLoadable(selectMyFYFD);
  const balanceFYFD =
    myFYFD.state == 'hasValue' ? myFYFD.contents : <NoticeLoading />;
  return (
    <>
      {+balanceFYFD > 0 ? (
        '$ ' +
        Math.round(
          parseInt((+balanceFYFD * 0.01).toString())
        ).toLocaleString() +
        ' USD'
      ) : (
        <NoticeLoading />
      )}
    </>
  );
}
