import { Box, Flex, HStack, Image } from '@chakra-ui/react';
import BurgerChakra from './BurgerChakra';
import yLogo from 'assets/yfd/logo-orange.svg';
import WalletConnect from './walletConnect/WalletConnect';
import NavLink from './navigation/NavLink';

const links = [
  { label: 'Governance', link: '/' },
  { label: 'Vaults', link: '/' }
];

export default function Header() {
  return (
    <>
      <Box bg={'gray.700'} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
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
            <WalletConnect />
            <BurgerChakra />
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
