import { useEffect, useState } from 'react';
import {
  useRecoilValue,
  useRecoilState,
  useRecoilValueLoadable,
  useSetRecoilState,
  useRecoilRefresher_UNSTABLE
} from 'recoil';
import {
  selectMyYFD,
  selectMyYFDClaimableBalance,
  selectMyYFDClaimableJSON,
  selectMyYFDLocked
} from '@recoil/connected/balance/selectors';
import {
  currentClaimableBalanceAtom,
  currentLockYFDArrayAtom,
  myClaimableYFDIndexAtom
} from '@recoil/connected/balance/atoms';
import NoticeLoading from '@components/NoticeLoading';
import { addSeconds, format } from 'date-fns';
import { Box, Collapse, Divider, Tooltip } from '@chakra-ui/react';
import { CHAIN_SECONDS_PER_BLOCK } from '@utilities/variables';
import { currentBlockHeightAtom } from '@recoil/chainInfo/atoms';
import { Icons } from '@var/icons';
import styles from '@scss/app.module.scss';

export default function YFDClaimValue() {
  const result = useRecoilValueLoadable(selectMyYFDClaimableJSON);
  const claimList = result.contents;
  const claimableBalance = useRecoilValueLoadable(selectMyYFDClaimableBalance);
  const setMyClaimableYFDIndex = useSetRecoilState(myClaimableYFDIndexAtom);
  const myLockedYFD = useRecoilValueLoadable(selectMyYFDLocked);
  const [lockBalance, setLockBalance] = useState('0');
  const [claimCount, setClaimCount] = useState(0);
  const [claimBalance, setClaimBalance] = useState('0');
  console.log('lockData: ', myLockedYFD);
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
      setLockBalance(myLockedYFD.contents.balance);
      setMyClaimableYFDIndex(myLockedYFD.contents.stakes[0].idx);
      setClaimCount(myLockedYFD.contents.stakes.length);
    } else {
      console.warn('Claimable YFD list is empty', claimList);
      return;
    }
  }, [myLockedYFD]);

  //console.log('lockList: ', lockList);

  // set the current list of locked YFD to the global state
  //setCurrentLockYFDArray(lockList);

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
            {lockBalance.toLocaleString()}
          </span>{' '}
          is $YFD Locked in {claimCount} positions
        </Box>
        <Divider mb={'1rem'} />
      </>
    );
  }
  return <NoticeLoading />;
}
