import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import convertFromBase from '@utilities/converters/convertFromBase';
import {
  Text,
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
import useContractForge from '@hooks/useContractForge';
import useHandleClicks from '@hooks/useHandleClicks';
import useHandleInputs from '@hooks/useHandleInputs';
import styles from '@scss/app.module.scss';

import LockYfdForm from './Form';

export default function FyfdPopoverEmpty() {
  //  console.log('tokenBalance', tokenBalance);
  // console fyfd

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
          <>
            <Text className={styles.menuYfdBalance}>
              YFD BALANCE HERE
              <br />
            </Text>
          </>
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
