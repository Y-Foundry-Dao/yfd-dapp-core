import { Image, Flex, Box } from '@chakra-ui/react';
import styles from '@scss/app.module.scss';
import yLogo from '@yfd/logo-horizontal-orange-white.svg';

import WalletConnect from '@features/walletConnect/WalletConnect';
import FYFD from '@components/StakeYFD';

export default function Header() {
  return (
    <>
      <Flex className={styles.wide}>
        <Box className={styles.logo}>
          <Image src={yLogo} alt="Y-Foundry Logo" />
        </Box>
        <Box className={styles['header-menu']}></Box>
        <Box className={styles['header-profile']}>
          <FYFD />
          <WalletConnect />
        </Box>
      </Flex>
    </>
  );
}
