import { useEffect } from 'react';
import { useWallet } from '@terra-money/wallet-provider';
import {
  useRecoilValue,
  useRecoilValueLoadable,
  useRecoilRefresher_UNSTABLE
} from 'recoil';
import { Text, Tooltip } from '@chakra-ui/react';
import Loading from '@components/NoticeLoading';
import styles from '@scss/app.module.scss';
import { currentBlockHeightAtom } from '@recoil/chainInfo/atoms';
import {
  balanceYfdConnectedAtom,
  balanceFyfdConnectedAtom
} from '@recoil/connected/address/atoms';
import { selectMyFYFD, selectMyYFD } from '@recoil/connected/balance/selectors';

export default function CurrentBlockHeight() {
  const currentChainID = useWallet().network.chainID;
  const currentBlockHeight = useRecoilValue(currentBlockHeightAtom);
  const yfd = useRecoilValueLoadable(selectMyYFD);
  const fyfd = useRecoilValueLoadable(selectMyFYFD);
  const refreshFYFD = useRecoilRefresher_UNSTABLE(selectMyFYFD);
  useEffect(() => {
    refreshFYFD();
    console.log(
      'currentBlockHeight [ ' + currentChainID + ' ]: ',
      currentBlockHeight,
      'yfd: ',
      yfd.contents,
      'fyfd: ',
      fyfd.contents
    );
  }, [currentBlockHeight, currentChainID]);
  if (currentBlockHeight) {
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
