import { Image, Flex, Box, Spacer } from '@chakra-ui/react';

import yLogo from '@yfd/logo-horizontal-orange-white.svg';
import WalletConnect from '@features/walletConnect/WalletConnect';
import FYFD from '@components/StakeYFD';

import styles from '@scss/app.module.scss';

export default function Header() {
  return (
    <>
      <Flex w={'100%'}>
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
