import { useRecoilValue } from 'recoil';
import { Text, Tooltip } from '@chakra-ui/react';
import Loading from '@components/NoticeLoading';
import styles from '@scss/app.module.scss';
import useChainInfo, { ConnectLCDClient } from '@hooks/useChainInfo';
import { currentBlockHeightAtom } from '@recoil/chainInfo/atoms';

export default function CurrentBlockHeight() {
  const lcd = ConnectLCDClient();
  const { currentChainID } = useChainInfo();
  const currentBlockHeight = useRecoilValue(currentBlockHeightAtom);
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
            <Text className={styles.blockHeightText}>{currentBlockHeight}</Text>
          </Tooltip>
        </div>
      </>
    );
  } else {
    return <Loading title="Block Height Loading..." />;
  }
}
