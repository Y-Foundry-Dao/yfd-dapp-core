import { Text, Tooltip } from '@chakra-ui/react';
import Loading from '@components/NoticeLoading';
import styles from '@scss/app.module.scss';
import useChainInfo from '@hooks/useChainInfo';
import { ConnectLCDClient } from '@utilities/MyValues';

export default function CurrentBlockHeight() {
  const lcd = ConnectLCDClient();
  const { currentBlockHeight, currentChainID } = useChainInfo();
  if (currentBlockHeight) {
    console.log(
      'currentBlockHeight [ ' + currentChainID + ' ]: ',
      currentBlockHeight
    );
    const label = 'Current Block Height - ' + currentChainID;
    return (
      <>
        <div className={styles.blockHeight}>
          <Tooltip label={label} aria-label={label} placement="bottom-start">
            <Text className={styles['blockHeight-text']}>
              {currentBlockHeight}
            </Text>
          </Tooltip>
        </div>
      </>
    );
  } else {
    return <Loading title="Block Height Loading..." />;
  }
}
