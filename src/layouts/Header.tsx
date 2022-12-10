import { Image } from '@chakra-ui/react';
import yLogo from 'assets/yfd/logo-horizontal-orange-white.svg';
import WalletConnect from '@features/walletConnect/WalletConnect';
import FYFD from '@components/basic/StakeYFD';

import styles from '@scss/header.module.scss';

export default function Header() {
  return (
    <>
      <div className={styles.logo}>
        <Image h={10} src={yLogo} alt="y logo" className={styles.logo} />
      </div>
      <div className={styles['header-menu']}></div>
      <div className={styles['header-profile']}>
        <FYFD />
        <WalletConnect />
      </div>
    </>
  );
}
