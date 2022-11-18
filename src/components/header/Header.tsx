import { Box, Flex, HStack, Image } from '@chakra-ui/react';
import yLogo from 'assets/yfd/logo-horizontal-orange-white.svg';
import WalletConnect from './walletConnect/WalletConnect';
import TopNav from './navigation/NavTop';
import StakeYFD from 'components/pageBody/stake/StakeYFD';
import NotifyBell from 'components/basic/NotifyBell';

import styles from 'styles/app.module.scss';

export default function Header() {
  return (
    <>
      <div className={styles.logo}>
        <Image h={10} src={yLogo} alt="y logo" />
      </div>
      <div className={styles['header-menu']}></div>
      <div className={styles['header-profile']}>
        <WalletConnect />
      </div>
    </>
  );
}
