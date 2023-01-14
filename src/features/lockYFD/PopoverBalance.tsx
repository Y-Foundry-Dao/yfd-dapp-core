import { useState } from 'react';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { useWallet } from '@terra-money/wallet-provider';
import convertFromBase from 'utilities/converters/convertFromBase';
import { format } from 'date-fns';

import {
  useDisclosure,
  Wrap,
  WrapItem,
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
  Box,
  Grid,
  SimpleGrid,
  GridItem,
  Text
} from '@chakra-ui/react';

//import selectFyfd from '@recoil/connected/balance/selectors';
//import selectYFD from '@recoil/connected/balance/selectors';
import { inputStakeYFD } from 'recoil/input/atoms';

import useHandleClicks from '@hooks/useHandleClicks';
import useHandleInputs from '@hooks/useHandleInputs';
import useContractForge from '@hooks/useContractForge';

import styles from '@scss/app.module.scss';
import { Icons } from '@var/icons';

import {
  DEFAULT_YFD_LOCK_DURATION,
  DEFAULT_YFD_LOCK_DURATION_DATE
} from 'Variables';

import ProposalModal from '@features/proposal/modal';
import ProposalModalButton from '@features/proposal/create/ButtonModelOpen';
import LockYfdForm from './Form';
import { MyFYFD, MyYFD } from '@utilities/MyValues';

let styleVote = 'material-symbols-outlined';
let styleGuardian = 'material-symbols-outlined';

export default function MenuFyfdBalance() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [durationDepositYFD, setDurationDepositYFD] = useState(
    DEFAULT_YFD_LOCK_DURATION
  );
  const [durationDepositYFDDate, setDurationDepositYFDDate] = useState(
    format(DEFAULT_YFD_LOCK_DURATION_DATE, 'dd-MMM-yyyy')
  );
  const amountStakeYFD = useRecoilValue(inputStakeYFD);
  const { handleClickStakeYFD } = useHandleClicks();
  const { handleInputStakeYFD } = useHandleInputs();
  const balancefYFD = MyFYFD();
  const balanceYFD = MyYFD();

  if (1000 < +balancefYFD) {
    styleVote = styleVote + ' ' + styles['icon-create'];
  }

  if (100000 < +balancefYFD) {
    styleGuardian = styleGuardian + ' ' + styles['icon-create'];
  }

  function actionPropose() {
    if (25000 < +balancefYFD) {
      return (
        <>
          <ProposalModalButton onOpen={onOpen} />
          <ProposalModal isOpen={isOpen} onClose={onClose} />
        </>
      );
    } else {
      return <i className="material-symbols-outlined">{Icons.propose}</i>;
    }
  }

  return (
    <Portal>
      <PopoverContent className={styles.portal}>
        <PopoverArrow />
        <PopoverHeader>
          <Wrap
            className={styles['gsContent']}
            justify="center"
            align="center"
            spacing="2rem"
          >
            <WrapItem className={styles['lockAction']}>
              <SimpleGrid>
                <GridItem>
                  <i className={styleVote}>{Icons.vote}</i>
                </GridItem>
                <GridItem>
                  Vote
                  <br />
                  1,000
                </GridItem>
              </SimpleGrid>
            </WrapItem>
            <WrapItem className={styles['lockAction']}>
              <SimpleGrid>
                <GridItem>{actionPropose()}</GridItem>
                <GridItem>
                  Propose
                  <br />
                  25,000
                </GridItem>
              </SimpleGrid>
            </WrapItem>
            <WrapItem className={styles['lockAction']}>
              <SimpleGrid>
                <GridItem>
                  <i className={styleGuardian}>{Icons.guardian}</i>
                </GridItem>
                <GridItem>
                  Protect
                  <br />
                  250,000
                </GridItem>
              </SimpleGrid>
            </WrapItem>
          </Wrap>
        </PopoverHeader>
        <PopoverCloseButton />
        <PopoverBody>
          <Box>
            fYFD
            <>
              <Text className={styles.menuFyfdBalance}>{balancefYFD}</Text>
            </>
            YFD:
            <>
              <Text className={styles.menuYfdBalance}>{balanceYFD}</Text>
            </>
            <br />
          </Box>
          <Box>Lock $YFD:</Box>
          <Box>
            <LockYfdForm />
          </Box>
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
