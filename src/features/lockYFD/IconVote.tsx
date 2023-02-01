import { useEffect } from 'react';
import {
  Button,
  Popover,
  PopoverTrigger,
  Flex,
  Box,
  Tooltip
} from '@chakra-ui/react';
import { useRecoilValue, useRecoilState, useRecoilValueLoadable } from 'recoil';
import { currentContractForgeAtom } from '@recoil/chainInfo/atoms';
import { selectMyFYFD, selectMyYFD } from '@recoil/connected/balance/selectors';

import { Icons } from '@var/icons';
import styles from '@scss/app.module.scss';

let styleVote = 'material-symbols-outlined';

export default function IconVote() {
  const myFYFD = useRecoilValueLoadable(selectMyFYFD);

  useEffect(() => {
    const fyfd = myFYFD.contents;
    if (+fyfd > 0) {
      styleVote = styleVote + ' ' + styles['icon-create'];
    }
  }, [myFYFD.contents]);
  return (
    <>
      <Box className={styles.stakeYfdIcon}>
        <Tooltip label="Vote" aria-label="Vote" placement="top">
          <span className={styleVote}>{Icons.vote}</span>
        </Tooltip>
      </Box>
    </>
  );
}
