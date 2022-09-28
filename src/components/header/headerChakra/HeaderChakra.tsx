import { Box, Flex, HStack } from '@chakra-ui/react';
import BurgerChakra from './BurgerChakra';
import Logo from '../logo/Logo';
import WalletConnect from './walletConnect/WalletConnect';
import NavLink from './NavLink';

const links = [
  { label: 'Home', link: '/swap' },
  { label: 'Governance', link: '/vote' },
  { label: 'Vaults', link: '/vaults' }
];

export default function HeaderChakra() {
  return (
    <>
      <Box bg={'gray.900'} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
            <Logo />
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
