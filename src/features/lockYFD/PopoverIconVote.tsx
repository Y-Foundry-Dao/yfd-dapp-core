import { WrapItem, SimpleGrid, GridItem } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';

import { Icons } from '@var/icons';
import styles from '@scss/app.module.scss';
import { addressCanVoteAtom } from '@recoil/connected/address/atoms';

let styleIcon = 'material-symbols-outlined';

export default function PopoverIconVote() {
  const canVote = useRecoilValue(addressCanVoteAtom);
  styleIcon = styleIcon + ' ' + styles.iconLockYFD;

  if (canVote) {
    styleIcon = styleIcon + ' ' + styles['iconLockYFD-enable'];
  }

  return (
    <>
      <WrapItem className={styles['lockAction']}>
        <SimpleGrid>
          <GridItem>
            <span title="Any Amount of fYFD" className={styleIcon}>
              {Icons.vote}
            </span>
          </GridItem>
          <GridItem>Vote</GridItem>
        </SimpleGrid>
      </WrapItem>
    </>
  );
}
