import { Text, Tooltip } from '@chakra-ui/react';
import { currentBlockHeightAtom } from '@recoil/chainInfo/atoms';
import { useRecoilValue } from 'recoil';
import Loading from '@components/NoticeLoading';
import styles from '@scss/app.module.scss';

export default function CurrentBlockHeight() {
  const currentBlockHeight = useRecoilValue(currentBlockHeightAtom);
  if (currentBlockHeight) {
    console.log('currentBlockHeight: ', currentBlockHeight);
    return (
      <>
        <div className={styles.blockHeight}>
          <Tooltip
            label="Current Block Height"
            aria-label="Current Block Height"
            placement="bottom-start"
          >
            <span className={styles['blockHeight-text']}>
              {currentBlockHeight}
            </span>
          </Tooltip>
        </div>
      </>
    );
  } else {
    return <Loading title="Block Height Loading..." />;
  }
}
