import { useEffect } from 'react';
import { WrapItem, SimpleGrid, GridItem } from '@chakra-ui/react';
import { useRecoilValueLoadable } from 'recoil';
import { currentContractForgeAtom } from '@recoil/chainInfo/atoms';
import { selectMyFYFD } from '@recoil/connected/balance/selectors';

import { Icons } from '@var/icons';
import styles from '@scss/app.module.scss';

let styleVote = 'material-symbols-outlined';

export default function PopoverIconVote() {
  const myFYFD = useRecoilValueLoadable(selectMyFYFD);

  useEffect(() => {
    const fyfd = myFYFD.contents;
    if (+fyfd > 0) {
      styleVote = styleVote + ' ' + styles['icon-create'];
    }
  }, [myFYFD.contents]);
  return (
    <>
      <WrapItem className={styles['lockAction']}>
        <SimpleGrid>
          <GridItem>
            <i className={styleVote}>{Icons.vote}</i>
          </GridItem>
          <GridItem>
            Vote
            <br />1
          </GridItem>
        </SimpleGrid>
      </WrapItem>
    </>
  );
}
