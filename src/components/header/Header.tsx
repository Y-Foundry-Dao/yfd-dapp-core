import { Box, Flex, HStack, Image } from '@chakra-ui/react';
import yLogo from 'assets/yfd/logo-horizontal-orange-white.svg';
import WalletConnect from './walletConnect/WalletConnect';
import TopNav from './navigation/NavTop';
import NotifyBell from 'components/basic/NotifyBell';
import StakedYFD from 'components/basic/stake/stakedYFD/StakedYFD';
import FYFD from 'components/basic/StakeYFD';

import styles from 'styles/app.module.scss';

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
