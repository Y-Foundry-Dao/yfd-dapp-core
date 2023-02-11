import { Image, Flex, Box } from '@chakra-ui/react';
import WalletConnect from '@features/walletConnect/WalletConnect';
import { useWallet } from '@terra-money/wallet-provider';

import styles from '@scss/app.module.scss';
import yLogo from '@yfd/logo-horizontal-orange-white.svg';

import MenuLockYFD from '@features/lockYFD/Menu';

// display the lockYFD menu if the wallet is connected
function menuLockYFDDisplay(status: string) {
  if (status === 'WALLET_CONNECTED') {
    return (
      <>
        <MenuLockYFD />
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
        <Box className={styles.menuProfile}>
          {menuLockYFDDisplay(status)}
          <WalletConnect />
        </Box>
      </Flex>
    </>
  );
}
