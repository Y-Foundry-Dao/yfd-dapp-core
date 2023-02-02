import { useEffect } from 'react';
import { Box, Tooltip } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';
import { Icons } from '@var/icons';
import styles from '@scss/app.module.scss';
import { addressCanVoteAtom } from '@recoil/connected/address/atoms';

let styleVote = 'material-symbols-outlined';

export default function IconVote() {
  const canVote = useRecoilValue(addressCanVoteAtom);
  useEffect(() => {
    if (canVote) {
      styleVote = styleVote + ' ' + styles['icon-create'];
    }
  }, [canVote]);
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
