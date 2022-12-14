import { Image, Flex, Box } from '@chakra-ui/react';
import WalletConnect from '@features/walletConnect/WalletConnect';
import { useWallet } from '@terra-money/wallet-provider';

import styles from '@scss/app.module.scss';
import yLogo from '@yfd/logo-horizontal-orange-white.svg';

import LockFYFDMenu from '@features/lockYFD/Menu';

// display the lockYFD menu if the wallet is connected
function lockYFDMenuDisplay() {
  const { status } = useWallet();
  if (status === 'WALLET_CONNECTED') {
    return (
      <>
        <LockFYFDMenu />
      </>
    );
  } else {
    return <></>;
  }
}

export default function Header() {
  const { status } = useWallet();

  return (
    <>
      <Flex className={styles.wide}>
        <Box className={styles.logo}>
          <Image src={yLogo} alt="Y-Foundry Logo" />
        </Box>
        <Box className={styles['header-menu']}></Box>
        <Box className={styles['header-profile']}>
          {lockYFDMenuDisplay()}
          <WalletConnect />
        </Box>
      </Flex>
    </>
  );
}
