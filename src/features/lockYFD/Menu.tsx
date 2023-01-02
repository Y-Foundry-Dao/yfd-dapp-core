import { Button, Popover, PopoverTrigger, Flex, Box } from '@chakra-ui/react';
import { Icons } from '@var/icons';
import styles from '@scss/app.module.scss';
import useContractForge from 'hooks/useContractForge';
import convertFromBase from 'utilities/converters/convertFromBase';

export default function LockYFDMenu() {
  const { tokenBalance } = useContractForge();
  //  console.log('tokenBalance', tokenBalance);
  const balancefYFD = parseInt(
    convertFromBase(Number(tokenBalance)).toFixed(5),
    10
  );
  //  console.log('BalancefYFD', BalancefYFD);

  let message;
  if (1 > balancefYFD) {
    return (
      <Popover>
        <PopoverTrigger>
          <Button className={styles.menuButton}>Lock $YFD</Button>
        </PopoverTrigger>
      </Popover>
    );
  } else {
    return (
      <Popover>
        <PopoverTrigger>
          <Button className={styles.stakeYfd}>
            <Flex className={styles.stakeYfdIcons}>
              <Box className={styles.stakeYfdIcon}>
                <span className="material-symbols-outlined">{Icons.vote}</span>
              </Box>
              <Box className={styles.stakeYfdIcon}>
                <span className="material-symbols-outlined">
                  {Icons.proposal}
                </span>
              </Box>
              <Box className={styles.stakeYfdIcon}>
                <span className="material-symbols-outlined">
                  {Icons.guardian}
                </span>
              </Box>
            </Flex>
          </Button>
        </PopoverTrigger>
      </Popover>
    );
  }
}
