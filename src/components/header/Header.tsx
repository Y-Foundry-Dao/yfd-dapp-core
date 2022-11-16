import { Box, Flex, HStack, Image } from '@chakra-ui/react';
import BurgerChakra from './BurgerChakra';
import yLogo from 'assets/yfd/logo-horizontal-orange-white.svg';
import WalletConnect from './walletConnect/WalletConnect';
import NavLink from './navigation/NavLink';
import StakeYFD from 'components/pageBody/stake/StakeYFD';
import NotifyBell from 'components/basic/NotifyBell';

import styles from 'styles/app.module.scss';

const links = [
  { label: 'Governance', link: '/' },
  { label: 'Vaults', link: '/' }
];

export default function Header() {
  return (
    <>
      <Box px={4} className={styles['header-menu']}>
        <Flex>
          <HStack spacing={8} alignItems={'center'}>
            <Image h={12} src={yLogo} alt="y logo" />
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {links.map((link, i) => (
                <NavLink key={i} link={link} />
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'} gap={{ base: 4, sm: 8 }}>
            <StakeYFD />
            <NotifyBell />
            <WalletConnect />
            <BurgerChakra />
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
