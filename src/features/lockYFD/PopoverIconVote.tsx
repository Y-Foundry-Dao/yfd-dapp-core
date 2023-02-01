import { useEffect } from 'react';
import { WrapItem, SimpleGrid, GridItem } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';

import { Icons } from '@var/icons';
import styles from '@scss/app.module.scss';
import { addressCanVoteAtom } from '@recoil/connected/address/atoms';

let styleVote = 'material-symbols-outlined';

export default function PopoverIconVote() {
  const canVote = useRecoilValue(addressCanVoteAtom);
  useEffect(() => {
    if (canVote) {
      styleVote = styleVote + ' ' + styles['icon-create'];
    }
  }, [canVote]);
  return (
    <>
      <WrapItem className={styles['lockAction']}>
        <SimpleGrid>
          <GridItem>
            <i className={styleVote}>{Icons.vote}</i>
          </GridItem>
          <GridItem>
            Vote
            <br />
            <span className={styleVote}>{Icons.all}</span>
          </GridItem>
        </SimpleGrid>
      </WrapItem>
    </>
  );
}
