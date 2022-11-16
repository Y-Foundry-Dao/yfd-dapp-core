import { Box, Flex, HStack, Link } from '@chakra-ui/react';
import BurgerChakra from 'components/header/navigation/BurgerChakra';
import NavLink from './NavLink';

const links = [
  { label: 'Dashboard', link: '/' },
  { label: 'Vaults', link: '/' },
  { label: 'Governance', link: '/' }
];

export default function NavTop() {
  return (
    <>
      <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
        {links.map((link, i) => (
          <NavLink key={i} link={link} />
        ))}
      </HStack>
      <BurgerChakra />
    </>
  );
}
