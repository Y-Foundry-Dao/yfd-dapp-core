import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import useHandleClicks from '@hooks/useHandleClicks';
import BalanceYFD from '@components/BalanceYFD';
import BalancefYFD from '@components/BalancefYFD';
import {
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Portal,
  Button
} from '@chakra-ui/react';
import { DEFAULT_YFD_LOCK_DURATION } from '@utilities/variables';
import { inputStakeYFD } from 'recoil/input/atoms';
import useHandleInputs from '@hooks/useHandleInputs';
import styles from '@scss/app.module.scss';

import LockYfdForm from './Form';

export default function FyfdPopoverEmpty() {
  const [durationDepositYFD, setDurationDepositYFD] = useState(
    DEFAULT_YFD_LOCK_DURATION
  );
  const amountStakeYFD = useRecoilValue(inputStakeYFD);
  const { handleClickStakeYFD } = useHandleClicks();
  const { handleInputStakeYFD } = useHandleInputs();

  return (
    <Portal>
      <PopoverContent className={styles.portal}>
        <PopoverArrow />
        <PopoverHeader>
          YFD Balance:
          <b>
            <BalanceYFD />
          </b>
        </PopoverHeader>
        <PopoverCloseButton />
        <PopoverBody>
          <LockYfdForm />
        </PopoverBody>
        <PopoverFooter>
          {amountStakeYFD} $YFD locked
          <br />
          for {durationDepositYFD} blocks
          <br />
          equals __________ fYFD points
        </PopoverFooter>
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
