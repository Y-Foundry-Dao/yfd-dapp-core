import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  MenuGroup,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
  useColorModeValue,
  VStack
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import BurgerChakra from './BurgerChakra';
import Logo from '../logo/Logo';
import ConnectWalletMenu from './connectWallet/ConnectWalletMenu';
import { useConnectedWallet } from '@terra-money/wallet-provider';
import ConnectedWalletMenu from './connectedWallet/ConnectedWalletMenu';

const Links = ['Dashboard', 'Projects', 'Team'];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700')
    }}
    href={'#'}
  >
    {children}
  </Link>
);

export default function HeaderChakra() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const connectedWallet = useConnectedWallet();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
            <Logo />
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            {/* Connect wallet here */}
            {/* <Button>Connect Wallet</Button> */}
            {connectedWallet ? <ConnectedWalletMenu /> : <ConnectWalletMenu />}
          </Flex>
          <BurgerChakra />
        </Flex>
        {/* {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <VStack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </VStack>
          </Box>
        ) : null} */}
      </Box>
    </>
  );
}
