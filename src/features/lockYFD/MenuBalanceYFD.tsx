import { useMemo, useState } from 'react';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { format } from 'date-fns';
import {
  Flex,
  Box,
  Text,
  AccordionPanel,
  AccordionItem,
  Accordion,
  AccordionButton,
  AccordionIcon
} from '@chakra-ui/react';
import { selectMyYFD } from '@recoil/connected/balance/selectors';
import styles from '@scss/app.module.scss';
import NoticeLoading from '@components/NoticeLoading';
import { Icons } from '@var/icons';
import { inputStakeYFD } from 'recoil/input/atoms';
import {
  DEFAULT_YFD_LOCK_DURATION,
  DEFAULT_YFD_LOCK_DURATION_DATE
} from 'Variables';

import useHandleClicks from '@hooks/useHandleClicks';
import useHandleInputs from '@hooks/useHandleInputs';
import LockYfdForm from './menu/LockForm';

export default function PopoverBalanceYFD() {
  const { handleInputStakeYFD } = useHandleInputs();
  const [durationDepositYFD, setDurationDepositYFD] = useState(
    DEFAULT_YFD_LOCK_DURATION
  );
  const [durationDepositYFDDate, setDurationDepositYFDDate] = useState(
    format(DEFAULT_YFD_LOCK_DURATION_DATE, 'dd-MMM-yyyy')
  );

  const amountStakeYFD = useRecoilValue(inputStakeYFD);
  const { handleClickStakeYFD } = useHandleClicks();
  const myYFD = useRecoilValueLoadable(selectMyYFD);
  // need to wrap balancefYFD in useMemo to avoid infinite loop
  const balanceYFD = useMemo(() => {
    if (myYFD.state == 'hasValue') {
      return myYFD.contents;
    } else {
      return <NoticeLoading />;
    }
  }, [myYFD]);

  return (
    <>
      <Accordion allowToggle>
        <AccordionItem className={styles.profileMenuLayout}>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <h2>$YFD:</h2>
            </Box>
            <Box flex="1" textAlign="right">
              <h2>{Math.round(+balanceYFD).toLocaleString()}</h2>
            </Box>
            <AccordionIcon ml={'1rem'} />
          </AccordionButton>
          <AccordionPanel pb={4}>
            {+balanceYFD > 0 ? (
              <>
                <LockYfdForm />
                <br />
                <Box>
                  <button
                    className={styles.buttonStandard}
                    onClick={async () => {
                      return await handleClickStakeYFD(
                        amountStakeYFD,
                        Number(durationDepositYFD)
                      );
                    }}
                  >
                    Lock $YFD
                  </button>
                </Box>
              </>
            ) : (
              <>You have no $YFD.</>
            )}{' '}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}
