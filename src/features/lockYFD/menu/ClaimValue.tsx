import {
  useRecoilValue,
  useRecoilState,
  useRecoilValueLoadable,
  useSetRecoilState
} from 'recoil';
import {
  selectMyYFDClaimableBalance,
  selectMyYFDClaimableJSON
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

import IconEmergency from '../IconEmergency';

export default function YFDClaimValue() {
  const itemList = useRecoilValueLoadable(selectMyYFDClaimableJSON);
  const currentBlockHeight = useRecoilValue(currentBlockHeightAtom);
  const setMyClaimableYFDIndex = useSetRecoilState(myClaimableYFDIndexAtom);
  /*
  const [claimableBalance, setClaimableBalance] = useRecoilState(
    currentClaimableBalanceAtom
  );
  const [currentLockYFDArray, setCurrentLockYFDArray] = useRecoilState(
    currentLockYFDArrayAtom
  );
*/
  let lockList = {};
  //  let claimBalance = 0;

  if (itemList.state == 'hasValue') {
    const stakes = Object.entries(itemList.contents.stakes);
    if (stakes.length > 0) {
      let count = 0;
      stakes.forEach((stake) => {
        count++;
        const id = stake[0];
        const data: any = stake[1];
        const idx = data.idx;
        const entry = data.stake;
        /*      claimBalance =
          claimBalance +
          (entry.asset_deposit_amount - entry.asset_withdrawn_amount) / 1000000;
        */
        let array = [];
        array = { ...entry, idx: idx };
        lockList = { ...lockList, [`${id}`]: array };
        if (count == 1) {
          setMyClaimableYFDIndex(idx);
        }
        // to-do: sort by deposit_timestamp
        //console.log('array: ', array);
      });
      //console.log('lockList: ', lockList);

      // set the current list of locked YFD to the global state
      //setCurrentLockYFDArray(lockList);

      // set the current claimable balance to the global state
      //setClaimableBalance(claimBalance);
      //console.log(claimBalance);
      return (
        <>
          <Divider mb={'1rem'} />
          <Collapse
            in={true}
            animateOpacity
            className={styles.wrapperPositionRelative}
          >
            <Box overflow="scroll" height="10rem" w={'100%'}>
              {Object.values(lockList).map((item: any) => {
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
                      className={
                        'material-symbols-outlined ' + styles.iconInline
                      }
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
    }
  }
  return <NoticeLoading />;
}
