import { useRecoilValue } from 'recoil';
import { Text, Tooltip } from '@chakra-ui/react';
import styles from '@scss/app.module.scss';
import {
  currentChainIDAtom,
  currentBlockHeightAtom
} from '@recoil/chainInfo/atoms';
import CurrentBlockHeight from './BlockHeightValue';

export default function LayoutBlockHeight() {
  const currentChainID = useRecoilValue(currentChainIDAtom);
  const label = 'Current Block Height - ' + currentChainID;
  return (
    <>
      <div className={styles.layoutBlockHeight}>
        <Tooltip label={label} aria-label={label} placement="bottom-start">
          <Text className={styles.textConsole}>
            <CurrentBlockHeight />
          </Text>
        </Tooltip>
      </div>
    </>
  );
}
