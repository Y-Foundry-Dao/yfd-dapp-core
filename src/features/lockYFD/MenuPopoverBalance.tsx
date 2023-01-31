import { useState } from 'react';
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

//import selectFyfd from '@recoil/connected/balance/selectors';
//import selectYFD from '@recoil/connected/balance/selectors';
import { inputStakeYFD } from 'recoil/input/atoms';
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
import { selectMyFYFD, selectMyYFD } from '@recoil/connected/balance/selectors';
import NoticeLoading from '@components/NoticeLoading';
// import { myFYFD, myYFD } from '@utilities/myValues';

let styleVote = 'material-symbols-outlined';
let styleGuardian = 'material-symbols-outlined';

export default function MenuFyfdBalance() {
  const myYFD = useRecoilValueLoadable(selectMyYFD);
  const myFYFD = useRecoilValueLoadable(selectMyFYFD);
  const balanceYFD =
    myYFD.state == 'hasValue' ? myYFD.contents : <NoticeLoading />;
  const balancefYFD =
    myFYFD.state == 'hasValue' ? myFYFD.contents : <NoticeLoading />;
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

  console.log('Emergency', minEmergency, 'balancefYFD', balancefYFD);
  if (+minGov < +balancefYFD) {
    styleVote = styleVote + ' ' + styles['icon-create'];
  }

  if (+minEmergency < +balancefYFD) {
    styleGuardian = styleGuardian + ' ' + styles['icon-create'];
  }

  function actionPropose() {
    if (+minVault < +balancefYFD) {
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
  );
}
