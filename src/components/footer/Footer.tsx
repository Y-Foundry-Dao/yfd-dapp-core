import { Box, Flex, HStack, Image, Spacer } from '@chakra-ui/react';
import yLogo from 'assets/yfd/logo-orange.svg';
import NavLink from './navigation/NavLink';

const links = [
  { label: 'Home', link: '/' },
  { label: 'Governance', link: '/' },
  { label: 'Vaults', link: '/' }
];

export default function Header() {
  return (
    <>
      <Box bg={'gray.700'} px={4} h={14}>
        <Flex>
          <Box />
          <Spacer />
          <Box>
            <Image my={3} h={8} src={yLogo} alt="y logo" />
          </Box>
        </Flex>
      </Box>
    </>
  );
}
