import styled from 'styled-components';
import Logo from 'components/navigation/logo/Logo';
import NavLinks from 'components/navigation/navlinks/NavLinks';
import Burger from 'components/navigation/burger/Burger';
import { useState } from 'react';

interface Props {
  id: string;
  src: string;
  alt: string;
  navLinks: Array<string>;
}

function HeaderBar({ id, src, alt, navLinks }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <Header id={id}>
      <Logo src={src} alt={alt} />
      <NavLinks navLinks={navLinks} />
      <Burger open={open} setOpen={setOpen} navLinks={navLinks} />
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  background: rgba(4, 3, 7, 0.5);
  filter: blur(0);
  pointer-events: auto;

  @media (min-width: 1440px) {
    height: 81px;
  }
`;

export default HeaderBar;
