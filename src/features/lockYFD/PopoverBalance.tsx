import { useState } from 'react';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';
import {
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
import convertFromBase from 'utilities/converters/convertFromBase';
import { format } from 'date-fns';

import useHandleClicks from '@hooks/useHandleClicks';
import useHandleInputs from '@hooks/useHandleInputs';
import useContractForge from '@hooks/useContractForge';

import styles from '@scss/app.module.scss';

import {
  DEFAULT_YFD_LOCK_DURATION,
  DEFAULT_YFD_LOCK_DURATION_DATE
} from '@utilities/variables';
import { Icons } from '@var/icons';
import { inputStakeYFD } from 'recoil/input/atoms';

import LockYfdForm from './Form';
import { useWallet } from '@terra-money/wallet-provider';
import {
  balancefYFDQuery,
  balanceYFDQuery
} from '@recoil/balanceConnected/selectors';

let styleVote = 'material-symbols-outlined';
let styleProposal = 'material-symbols-outlined';
let styleGuardian = 'material-symbols-outlined';

export default function MenuFyfdBalance() {
  const [durationDepositYFD, setDurationDepositYFD] = useState(
    DEFAULT_YFD_LOCK_DURATION
  );
  const [durationDepositYFDDate, setDurationDepositYFDDate] = useState(
    format(DEFAULT_YFD_LOCK_DURATION_DATE, 'dd-MMM-yyyy')
  );
  const amountStakeYFD = useRecoilValue(inputStakeYFD);
  const { handleClickStakeYFD } = useHandleClicks();
  const { handleInputStakeYFD } = useHandleInputs();

  const balancefYFDLoadable = useRecoilValueLoadable(balancefYFDQuery);
  const balanceYFDLoadable = useRecoilValueLoadable(balanceYFDQuery);

  //console.log('tokenBalance', tokenBalance);
  const balancefYFD = convertFromBase(balancefYFDLoadable.contents);
  const balanceYFD = convertFromBase(balanceYFDLoadable.contents);

  if (1000 < balancefYFD) {
    styleVote = styleVote + ' ' + styles['icon-create'];
  }

  if (25000 < balancefYFD) {
    styleProposal = styleProposal + ' ' + styles['icon-create'];
  }

  if (100000 < balancefYFD) {
    styleGuardian = styleGuardian + ' ' + styles['icon-create'];
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
            <WrapItem className={styles['gsContent-feature']}>
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
            <WrapItem className={styles['gsContent-feature']}>
              <SimpleGrid>
                <GridItem>
                  <i className={styleProposal}>{Icons.propose}</i>
                </GridItem>
                <GridItem>
                  Propose
                  <br />
                  25,000
                </GridItem>
              </SimpleGrid>
            </WrapItem>
            <WrapItem className={styles['gsContent-feature']}>
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
              <Text className={styles.menuFyfdBalance}>
                {balancefYFD.toFixed(5)}
              </Text>
            </>
            YFD:
            <>
              <Text className={styles.menuYfdBalance}>
                {balanceYFD.toFixed(5)}
              </Text>
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
