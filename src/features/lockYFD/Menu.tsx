import { Button, Popover, PopoverTrigger, Flex, Box } from '@chakra-ui/react';
import { Icons } from '@var/icons';
import styles from '@scss/app.module.scss';
import queryBalance from '@hooks/useContractYFD';
import tokenBalance from '@hooks/useContractYFD';
import convertFromBase from 'utilities/converters/convertFromBase';
import FyfdPopoverEmpty from './PopoverEmpty';
import FyfdPopoverBalance from './PopoverBalance';
import useValues from '@hooks/useValues';
// import { useRecoilValueLoadable } from 'recoil';
// import { myYFD, myFYFD } from '@utilities/myValues';
let styleVote = 'material-symbols-outlined';
let styleProposal = 'material-symbols-outlined';
let styleGuardian = 'material-symbols-outlined';

export default function LockYFDMenu() {
  // const balanceYFD = myYFD();
  // const balancefYFD = myFYFD();
  const { myYFD, myFYFD } = useValues();
  console.log('{MENU.tsx} balanceYFD: ', myYFD());
  console.log('{MENU.tsx} balancefYFD: ', myFYFD());

  if (1000 < +myFYFD()) {
    styleVote = styleVote + ' ' + styles['icon-create'];
  }

  if (25000 < +myFYFD()) {
    styleProposal = styleProposal + ' ' + styles['icon-create'];
  }

  if (100000 < +myFYFD()) {
    styleGuardian = styleGuardian + ' ' + styles['icon-create'];
  }

  //  console.log('BalancefYFD', BalancefYFD);
  if (1 > +myFYFD()) {
    return (
      <Popover placement="bottom-end">
        <PopoverTrigger>
          <Button className={styles.menuButton}>Lock $YFD</Button>
        </PopoverTrigger>
        <FyfdPopoverEmpty />
      </Popover>
    );
  } else {
    return (
      <Popover>
        <PopoverTrigger>
          <Button className={styles.stakeYfd}>
            <Flex className={styles.stakeYfdIcons}>
              <Box className={styles.stakeYfdIcon}>
                <span className={styleVote}>{Icons.vote}</span>
              </Box>
              <Box className={styles.stakeYfdIcon}>
                <span className={styleProposal}>{Icons.proposal}</span>
              </Box>
              <Box className={styles.stakeYfdIcon}>
                <span className={styleGuardian}>{Icons.guardian}</span>
              </Box>
            </Flex>
          </Button>
        </PopoverTrigger>
        <FyfdPopoverBalance />
      </Popover>
    );
  }
}
