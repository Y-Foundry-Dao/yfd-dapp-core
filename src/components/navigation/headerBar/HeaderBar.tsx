import styled from 'styled-components';
import Logo from 'components/navigation/logo/Logo';
import NavLinks from 'components/navigation/navlinks/NavLinks';
import Burger from 'components/navigation/burger/Burger';

interface Props {
  id: string;
  src: string;
  alt: string;
  navLinks: Array<string>;
  open: boolean;
  setOpen: (arg0: boolean) => void;
}

interface StyledProps {
  open: boolean;
}

function HeaderBar({ id, src, alt, navLinks, open, setOpen }: Props) {
  return (
    <Header open={open} id={id}>
      <Logo src={src} alt={alt} />
      <NavLinks navLinks={navLinks} />
      <Burger open={open} setOpen={setOpen} navLinks={navLinks} />
    </Header>
  );
}

const Header = styled.header<StyledProps>`
  position: ${({ open }) => open && 'relative'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  background: rgba(4, 3, 7, 0.5);
  pointer-events: auto;
  filter: blur(0) !important;

  @media (min-width: 1440px) {
    height: 81px;
  }
`;

export default HeaderBar;
