import { Button, Popover, PopoverTrigger, Flex, Box } from '@chakra-ui/react';
import { Icons } from '@var/icons';
import styles from '@scss/app.module.scss';
import queryBalance from '@hooks/useContractYFD';
import tokenBalance from '@hooks/useContractYFD';
import convertFromBase from 'utilities/converters/convertFromBase';
import FyfdPopoverEmpty from './PopoverEmpty';
import FyfdPopoverBalance from './PopoverBalance';
import { useRecoilValueLoadable } from 'recoil';
import { myYFD, myFYFD } from '@utilities/myValues';
let styleVote = 'material-symbols-outlined';
let styleProposal = 'material-symbols-outlined';
let styleGuardian = 'material-symbols-outlined';

export default function LockYFDMenu() {
  const balanceYFD = myYFD();
  const balancefYFD = myFYFD();
  console.log('{MENU.tsx} balanceYFD: ', balanceYFD);
  console.log('{MENU.tsx} balancefYFD: ', balancefYFD);

  if (1000 < +balancefYFD) {
    styleVote = styleVote + ' ' + styles['icon-create'];
  }

  if (25000 < +balancefYFD) {
    styleProposal = styleProposal + ' ' + styles['icon-create'];
  }

  if (100000 < +balancefYFD) {
    styleGuardian = styleGuardian + ' ' + styles['icon-create'];
  }

  //  console.log('BalancefYFD', BalancefYFD);
  if (1 > +balancefYFD) {
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
