import { useMemo, useState } from 'react';
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { format } from 'date-fns';
import {
  Box,
  Tooltip,
  AccordionPanel,
  AccordionItem,
  Accordion,
  AccordionButton,
  AccordionIcon,
  Button,
  Text,
  Flex,
  Popover,
  PopoverTrigger,
  PopoverBody,
  PopoverContent,
  Wrap
} from '@chakra-ui/react';
import { selectMyYFD } from '@recoil/connected/balance/selectors';
import NoticeLoading from '@components/NoticeLoading';
import styles from '@scss/app.module.scss';
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
  const [inputLockYFD, setInputLockYFD] = useRecoilState(inputStakeYFD);
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

  if (+balanceYFD > 0) {
    return (
      <>
        <Popover placement={'bottom'}>
          <PopoverTrigger>
            <Button mr={'1.5rem'} className={styles.buttonWrapper}>
              <Text>Lock $YFD</Text>
            </Button>
          </PopoverTrigger>
          <PopoverContent className={styles.popoverWrapper}>
            <fieldset
              className={styles.popoverActionsSection}
              role="presentation"
            >
              <legend className={styles.headingLegend} role="presentation">
                <h2>YFD</h2>
              </legend>
              <Wrap
                className={styles.popoverActionsWrapper}
                justify="center"
                spacing="2.5rem"
              >
                <Text
                  className={
                    styles.textSpecialHeading + ' ' + styles.cursorPointer
                  }
                  onClick={() => {
                    setInputLockYFD(+balanceYFD);
                  }}
                >
                  {balanceYFD}
                </Text>
              </Wrap>
            </fieldset>
            <br />
            <br />
            <fieldset
              className={styles.popoverActionsSection}
              role="presentation"
            >
              <legend className={styles.headingLegend} role="presentation">
                <h2>LOCK YFD</h2>
              </legend>
              <Wrap
                className={styles.popoverActionsWrapper}
                justify="center"
                spacing="2.5rem"
                padding="0.3rem"
              >
                <LockYfdForm />
              </Wrap>
            </fieldset>
            <PopoverBody
              className={styles.popoverBalancesWrapper}
            ></PopoverBody>
          </PopoverContent>
        </Popover>
      </>
    );
  } else {
    const styleIcon =
      'material-symbols-outlined' +
      ' ' +
      styles.iconWarning +
      ' ' +
      styles.cursorHelp;
    return (
      <>
        <div className={styles.wrapperInset + ' ' + styles.menuWrapperSmall}>
          <Tooltip label="You have no $YFD" placement="bottom">
            <span className={styleIcon}>{Icons.warning}</span>
          </Tooltip>
        </div>
      </>
    );
  }

  return <NoticeLoading />;
}
