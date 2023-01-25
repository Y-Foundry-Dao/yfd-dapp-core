import { useWallet } from '@terra-money/wallet-provider';
import { useRecoilValue } from 'recoil';
import { Text, Tooltip } from '@chakra-ui/react';
import Loading from '@components/NoticeLoading';
import styles from '@scss/app.module.scss';
import useChainInfo, { ConnectLCDClient } from '@hooks/useChainInfo';
import { currentBlockHeightAtom } from '@recoil/chainInfo/atoms';
import {
  balanceYfdConnectedAtom,
  balanceFyfdConnectedAtom
} from '@recoil/connected/address/atoms';

export default function CurrentBlockHeight() {
  const lcd = ConnectLCDClient();
  const currentChainID = useWallet().network.chainID;
  const currentBlockHeight = useRecoilValue(currentBlockHeightAtom);
  const yfd = useRecoilValue(balanceYfdConnectedAtom);
  const fyfd = useRecoilValue(balanceFyfdConnectedAtom);
  if (currentBlockHeight) {
    console.log(
      'currentBlockHeight [ ' + currentChainID + ' ]: ',
      currentBlockHeight,
      '{YFD}: ',
      yfd,
      ' {FYFD}: ',
      fyfd
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
