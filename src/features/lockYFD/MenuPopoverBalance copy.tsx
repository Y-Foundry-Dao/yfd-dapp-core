import { useState, useEffect, useMemo } from 'react';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { format } from 'date-fns';

import {
  useDisclosure,
  Wrap,
  WrapItem,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Portal,
  Button,
  Box,
  SimpleGrid,
  GridItem,
  Text
} from '@chakra-ui/react';
import { inputStakeYFD } from 'recoil/input/atoms';
import { selectMyFYFD, selectMyYFD } from '@recoil/connected/balance/selectors';
import {
  minFYFDVaultPropAtom,
  minFYFDGovPropAtom,
  minFYFDEmergencyPropAtom
} from '@recoil/governance/parameters/atoms';

import useHandleClicks from '@hooks/useHandleClicks';
import useHandleInputs from '@hooks/useHandleInputs';

import styles from '@scss/app.module.scss';
import { Icons } from '@var/icons';

import {
  DEFAULT_YFD_LOCK_DURATION,
  DEFAULT_YFD_LOCK_DURATION_DATE
} from 'Variables';

import ProposalModal from '@features/proposal/modal';
import ProposalModalButton from '@features/proposal/create/ButtonModelOpen';
//import LockYfdForm from './Form';

import NoticeLoading from '@components/NoticeLoading';

let styleVote = 'material-symbols-outlined';
const styleProposal = 'material-symbols-outlined';
let styleGuardian = 'material-symbols-outlined';

export default function MenuPopoverBalance() {
  const myYFD = useRecoilValueLoadable(selectMyYFD);
  const myFYFD = useRecoilValueLoadable(selectMyFYFD);
  const balanceYFD =
    myYFD.state == 'hasValue' ? myYFD.contents : <NoticeLoading />;
  // need to wrap balancefYFD in useMemo to avoid infinite loop
  const balancefYFD = useMemo(() => {
    if (myFYFD.state == 'hasValue') {
      return myFYFD.contents;
    } else {
      return <NoticeLoading />;
    }
  }, [myFYFD]);
  const proposalsAvailable = false;
  const itemProposal = '';
  const minVault = useRecoilValue(minFYFDVaultPropAtom);
  const minGov = useRecoilValue(minFYFDGovPropAtom);
  const minEmergency = useRecoilValue(minFYFDEmergencyPropAtom);
  const [durationDepositYFD, setDurationDepositYFD] = useState(
    DEFAULT_YFD_LOCK_DURATION
  );
  const [durationDepositYFDDate, setDurationDepositYFDDate] = useState(
    format(DEFAULT_YFD_LOCK_DURATION_DATE, 'dd-MMM-yyyy')
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const amountStakeYFD = useRecoilValue(inputStakeYFD);
  const { handleClickStakeYFD } = useHandleClicks();
  const { handleInputStakeYFD } = useHandleInputs();

  useEffect(() => {
    console.log(
      ' { USE EFFECT} Emergency',
      minEmergency,
      'balancefYFD',
      balancefYFD
    );
    if (
      +minEmergency == 0 ||
      +balancefYFD == 0 ||
      +minVault === 0 ||
      +minGov === 0
    ) {
      return;
    }

    if (+balancefYFD > 0) {
      styleVote = styleVote + ' ' + styles['icon-create'];
    }

    if (+minEmergency > 0 && +minEmergency < +balancefYFD) {
      styleGuardian = styleGuardian + ' ' + styles['icon-create'];
    }

    if (+minVault > 0 && +minVault < +balancefYFD) {
      const proposalsAvailable = true;
    }
  }, [minGov, minEmergency, balancefYFD, minVault]);

  if (proposalsAvailable) {
    const itemProposal = <ProposalModalButton onOpen={onOpen} />;
  } else {
    const itemProposal = <i className={styleProposal}>{Icons.propose}</i>;
  }

  return (
    <>
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
                    any
                  </GridItem>
                </SimpleGrid>
              </WrapItem>
              <WrapItem className={styles['lockAction']}>
                <SimpleGrid>
                  <GridItem>{itemProposal}</GridItem>
                  <GridItem>
                    Propose
                    <br />
                    {minVault}
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
                    {minEmergency}
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
              {
                // <LockYfdForm />
              }
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
    </>
  );
}
