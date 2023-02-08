import { useState } from 'react';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { format } from 'date-fns';

import {
  Wrap,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Portal,
  Button,
  Box
} from '@chakra-ui/react';

//import selectFyfd from '@recoil/connected/balance/selectors';
//import selectYFD from '@recoil/connected/balance/selectors';
import { inputStakeYFD } from 'recoil/input/atoms';

import styles from '@scss/app.module.scss';

import {
  DEFAULT_YFD_LOCK_DURATION,
  DEFAULT_YFD_LOCK_DURATION_DATE
} from 'Variables';

import useHandleClicks from '@hooks/useHandleClicks';
import useHandleInputs from '@hooks/useHandleInputs';

import LockYfdForm from './Form';
import { selectMyYFD } from '@recoil/connected/balance/selectors';
import NoticeLoading from '@components/NoticeLoading';
// import { myFYFD, myYFD } from '@utilities/myValues';
import PopoverBalanceFYFD from './MenuBalanceFYFD';
import PopoverBalanceYFD from './MenuBalanceYFD';
import PopoverIconEmergency from './PopoverIconEmergency';
import PopoverIconVote from './PopoverIconVote';
import PopoverIconProposal from './PopoverIconProposal';

export default function MenuFyfdBalance() {
  const { handleClickStakeYFD } = useHandleClicks();
  const { handleInputStakeYFD } = useHandleInputs();
  const myYFD = useRecoilValueLoadable(selectMyYFD);
  const balanceYFD =
    myYFD.state == 'hasValue' ? myYFD.contents : <NoticeLoading />;
  const [durationDepositYFD, setDurationDepositYFD] = useState(
    DEFAULT_YFD_LOCK_DURATION
  );
  const [durationDepositYFDDate, setDurationDepositYFDDate] = useState(
    format(DEFAULT_YFD_LOCK_DURATION_DATE, 'dd-MMM-yyyy')
  );

  const amountStakeYFD = useRecoilValue(inputStakeYFD);

  return (
    <Portal>
      <PopoverContent className={styles.popoverWrapper}>
        <fieldset className={styles.popoverActionsSection} role="presentation">
          <legend className={styles.headingLegend} role="presentation">
            <h2>Actions</h2>
          </legend>
          <Wrap
            className={styles.popoverActionsWrapper}
            justify="center"
            spacing="2.5rem"
          >
            <PopoverIconVote />
            <PopoverIconProposal />
            <PopoverIconEmergency />
          </Wrap>
        </fieldset>
        <PopoverBody className={styles.popoverBalancesWrapper}>
          <PopoverBalanceFYFD />
          <PopoverBalanceYFD />
          <Box>Lock $YFD:</Box>
          <Box>
            <LockYfdForm />
          </Box>
        </PopoverBody>
        <PopoverFooter className={styles.popoverFooter}>
          <button
            className={styles.buttonPopoverDeposit}
            onClick={async () => {
              return await handleClickStakeYFD(
                amountStakeYFD,
                Number(durationDepositYFD)
              );
            }}
          >
            Lock $YFD
          </button>
          <button
            className={styles.buttonPopoverDeposit}
            onClick={async () => {
              return await handleClickStakeYFD(
                amountStakeYFD,
                Number(durationDepositYFD)
              );
            }}
          >
            Claim $YFD
          </button>
        </PopoverFooter>
      </PopoverContent>
    </Portal>
  );
}
