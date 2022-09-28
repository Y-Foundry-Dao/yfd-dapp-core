import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
  Image,
  VStack
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import yLogo from 'assets/yfd/logo-orange.svg';
import NavLink from './NavLink';

const links = [
  { label: 'Home', link: '/swap' },
  { label: 'Governance', link: '/vote' },
  { label: 'Vaults', link: '/vaults' }
];

export default function BurgerChakra() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        size={'sm'}
        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        aria-label={'Open Menu'}
        display={{ md: 'none' }}
        onClick={isOpen ? onClose : onOpen}
      />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Image h={20} src={yLogo} alt="y logo" />
          </DrawerHeader>
          <DrawerBody>
            <VStack as={'nav'} spacing={4}>
              {links.map((link: any, i) => (
                <NavLink key={i} link={link} />
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
