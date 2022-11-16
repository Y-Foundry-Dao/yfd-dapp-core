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
      <Box px={4} className={styles['header-menu']}>
        <Flex>
          <HStack spacing={8} alignItems={'center'}>
            <Image h={10} src={yLogo} alt="y logo" />
          </HStack>
          <Flex alignItems={'center'} gap={{ base: 4, sm: 8 }}>
            <NotifyBell />
            <WalletConnect />
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
