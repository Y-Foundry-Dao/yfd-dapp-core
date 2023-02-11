import { useRecoilValue, useRecoilValueLoadable } from 'recoil';
import {
  selectMyYFDClaimableBalance,
  selectMyYFDClaimableJSON
} from '@recoil/connected/balance/selectors';
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

  let lockList = {};
  if (itemList.state == 'hasValue') {
    const stakes = Object.entries(itemList.contents.stakes);
    stakes.forEach((stake) => {
      const id = stake[0];
      const data: any = stake[1];
      const idx = data.idx;
      const entry = data.stake;
      let array = [];
      array = { ...entry, idx: idx };
      lockList = { ...lockList, [`${id}`]: array };
      // to-do: sort by deposit_timestamp
      //console.log('array: ', array);
    });
    //console.log('lockList: ', lockList);
    return (
      <>
        <Divider mb={'1rem'} />
        <Collapse in={true} animateOpacity>
          <Box overflow="scroll" height="10rem" w={'100%'}>
            {Object.values(lockList).map((item: any) => {
              const currentDate = new Date();
              const depositDate = format(
                item.deposit_timestamp / 1000000,
                'yyyy-MMM-dd'
              );
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
                  <Tooltip label={'Block Height: ' + item.deposit_height}>
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
                    {remainingBalance.toLocaleString()}
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
    return <NoticeLoading />;
  }
}
