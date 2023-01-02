import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import useHandleClicks from '@hooks/useHandleClicks';
import BalanceYFD from '@components/BalanceYFD';
import BalancefYFD from '@components/BalancefYFD';
import { format } from 'date-fns';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Portal,
  Button,
  Flex,
  Box
} from '@chakra-ui/react';
import {
  DEFAULT_YFD_LOCK_DURATION,
  DEFAULT_YFD_LOCK_DURATION_DATE
} from '@utilities/variables';
import { inputStakeYFD } from 'recoil/input/atoms';
import useHandleInputs from '@hooks/useHandleInputs';
import styles from '@scss/app.module.scss';
import { Icons } from '@utilities/variables/icons';
import LockYfdForm from './Form';

export default function FyfdPopoverEmpty() {
  const [durationDepositYFD, setDurationDepositYFD] = useState(
    DEFAULT_YFD_LOCK_DURATION
  );
  const [durationDepositYFDDate, setDurationDepositYFDDate] = useState(
    format(DEFAULT_YFD_LOCK_DURATION_DATE, 'dd-MMM-yyyy')
  );
  const amountStakeYFD = useRecoilValue(inputStakeYFD);
  const { handleClickStakeYFD } = useHandleClicks();
  const { handleInputStakeYFD } = useHandleInputs();

  return (
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverHeader>
            fYFD <BalancefYFD />
            <br />
            YFD:
            <b>
              <BalanceYFD />
            </b>
          </PopoverHeader>
          <PopoverCloseButton />
          <PopoverBody>
            <LockYfdForm />
          </PopoverBody>
          <PopoverFooter>
            <Button
              className={styles['wide']}
              onClick={async () => {
                return await handleClickStakeYFD(
                  amountStakeYFD,
                  Number(durationDepositYFD)
                );
              }}
            >
              Deposit
            </Button>
          </PopoverFooter>
        </PopoverContent>
      </Portal>
  );
}
