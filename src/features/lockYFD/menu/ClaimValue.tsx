import { useEffect, useState } from 'react';
import {
  useRecoilValueLoadable,
  useSetRecoilState,
  useRecoilValue
} from 'recoil';
import { selectMyYFDLocked } from '@recoil/connected/balance/selectors';
import {
  myClaimableYFDAtom,
  myClaimableYFDIndexAtom
} from '@recoil/connected/balance/atoms';
import NoticeLoading from '@components/NoticeLoading';
import { Box, Divider, Tooltip } from '@chakra-ui/react';
import styles from '@scss/app.module.scss';
import { addSeconds, format, secondsToHours, subSeconds } from 'date-fns';
import { CHAIN_SECONDS_PER_BLOCK } from '@utilities/variables/chrono';
import { currentBlockHeightAtom } from 'recoil/chainInfo/atoms';

function blockToDate(block: number) {
  const currentDate = new Date();
  if (block < 0) {
    return format(
      subSeconds(currentDate, block * CHAIN_SECONDS_PER_BLOCK),
      'yyyy-MMM-dd'
    );
  } else {
    return format(
      addSeconds(currentDate, block * CHAIN_SECONDS_PER_BLOCK),
      'yyyy-MMM-dd'
    );
  }
}

export default function YFDClaimValue() {
  const currentBlockHeight = useRecoilValue(currentBlockHeightAtom);
  const setMyClaimableYFDIndex = useSetRecoilState(myClaimableYFDIndexAtom);
  const setClaimableYFD = useSetRecoilState(myClaimableYFDAtom);
  const myLockedYFD = useRecoilValueLoadable(selectMyYFDLocked);
  const [lockBalance, setLockBalance] = useState('0');
  const [claimCount, setClaimCount] = useState(0);
  const [nextUnlock, setNextUnlock] = useState('0');
  const [lastUnlock, setLastUnlock] = useState('0');
  /*
  const [claimableBalance, setClaimableBalance] = useRecoilState(
    currentClaimableBalanceAtom
  );
  const [currentLockYFDArray, setCurrentLockYFDArray] = useRecoilState(
    currentLockYFDArrayAtom
  );
*/
  useEffect(() => {
    if (
      myLockedYFD.state == 'hasValue' &&
      myLockedYFD.contents.stakes.length > 0
    ) {
      setLockBalance(myLockedYFD.contents.total.balance);
      setMyClaimableYFDIndex(myLockedYFD.contents.last.idx);
      setClaimCount(myLockedYFD.contents.stakes.length);
      setClaimableYFD(+myLockedYFD.contents.total.available);
      setNextUnlock(
        blockToDate(+myLockedYFD.contents.next.block - +currentBlockHeight)
      );
      setLastUnlock(
        blockToDate(+myLockedYFD.contents.last.block - +currentBlockHeight)
      );
    } else {
      return;
    }
  }, [myLockedYFD.state, setClaimableYFD, setMyClaimableYFDIndex]);

  //console.log('Locked YFD Data: ', myLockedYFD.contents);

  // set the current claimable balance to the global state
  //setClaimableBalance(claimBalance);
  //console.log(claimBalance);
  /*
  if (Object.keys(claimList).length > 0) {
    return (
      <>
        <Divider mb={'1rem'} />
        <Box>
          <span className={styles.textEnhanced}>
            {claimableBalance.toLocaleString()}
          </span>{' '}
          YFD Claimable
        </Box>
        <Divider mb={'1rem'} />
        <Collapse
          in={true}
          animateOpacity
          className={styles.wrapperPositionRelative}
        >
          <Box overflow="scroll" height="10rem" w={'100%'}>
            {Object.values(claimList).map((item: any) => {
              const currentDate = new Date();
              const depositDate = format(
                item.deposit_timestamp / 1000000,
                'yyyy-MMM-dd'
              );
              const depositAmount = (
                item.asset_deposit_amount / 1000000
              ).toLocaleString();
              const endBlock = item.lock_duration + item.deposit_height;
              const blocksLeft = endBlock - currentBlockHeight;
              const claimDate = format(
                addSeconds(currentDate, blocksLeft * CHAIN_SECONDS_PER_BLOCK),
                'yyyy-MMM-dd'
              );
              const remainingBalance =
                (item.asset_deposit_amount - item.asset_withdrawn_amount) /
                1000000;

              return (
                <div key={item.idx}>
                  <span className={styles.textEnhanced}>{item.idx}. </span>
                  <Tooltip
                    label={'Initial Block Height: ' + item.deposit_height}
                  >
                    {depositDate.toLocaleString()}
                  </Tooltip>
                  <span
                    className={'material-symbols-outlined ' + styles.iconInline}
                  >
                    {Icons.arrow_right}
                  </span>
                  <Tooltip label={'Final Block Height: ' + endBlock}>
                    {claimDate.toLocaleString()}
                  </Tooltip>
                  <br />
                  <span className={styles.headingLegendText}>
                    {remainingBalance.toLocaleString()} of {depositAmount}
                  </span>{' '}
                  $YFD Remaining
                  <br />
                  <br />
                </div>
              );
            })}
          </Box>
        </Collapse>
      </>
    );
  } else {
    return <>0</>;
  }*/
  if (myLockedYFD.state == 'hasValue') {
    return (
      <>
        <Divider mb={'1rem'} />
        <Box>
          <span className={styles.textEnhanced}>
            {(+myLockedYFD.contents.portion * 100).toLocaleString()}%
          </span>{' '}
          (
          <span className={styles.textEnhanced}>
            {' '}
            {Math.round(parseInt((+lockBalance).toString())).toLocaleString()}
          </span>{' '}
          ) of your $YFD is locked in{' '}
          <span className={styles.textEnhanced}>{claimCount}</span> positions
          <br />
          <br />
          Your fYFD potency is{' '}
          <Tooltip label="Increase fYFD potency by locking $YFD for longer durations.">
            <span className={styles.textEnhanced}>
              {(+myLockedYFD.contents.potency * 100).toLocaleString()}%
            </span>
          </Tooltip>
          <br />
          <br />
          Your Est. Rate of $YFD Reclaimation is{' '}
          <span className={styles.textEnhanced}>
            {(+myLockedYFD.contents.average.decay * 600).toFixed(2)}
          </span>{' '}
          per hour
          <br />
          <br />
          Your Average Locking Period:{' '}
          <span className={styles.textEnhanced}>
            {(
              secondsToHours(+myLockedYFD.contents.average.lock_duration * 6) /
              (24 * 7)
            ).toFixed(1)}{' '}
          </span>
          weeks
          <br />
          <br />
          Your next position will completely decay on{' '}
          <span className={styles.textEnhanced}>{nextUnlock}</span>
          <br />
          Your final position will completely decay on{' '}
          <span className={styles.textEnhanced}>{lastUnlock}</span>
        </Box>
        <Divider mb={'1rem'} />
      </>
    );
  }
  return <NoticeLoading />;
}
