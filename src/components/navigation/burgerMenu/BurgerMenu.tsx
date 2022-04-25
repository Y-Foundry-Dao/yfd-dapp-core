import styled from 'styled-components';

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  navLinks: Array<string>;
}

function Menu(props: Props) {
  const { open, setOpen, navLinks } = props;

  return (
    <StyledMenu open={open}>
      <Ul>
        {navLinks.length > 0 &&
          navLinks.map((link: string, i: number) => {
            return (
              <Li key={i} onClick={() => setOpen(!open)}>
                <Link href={`#${link}`}>{link}</Link>
              </Li>
            );
          })}
      </Ul>
    </StyledMenu>
  );
}

const StyledMenu: any = styled.nav<Props>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => `${props.theme.colors.color1}`};
  opacity: ${({ open }) => (open ? 1 : 0)};
  z-index: ${({ open }) => (open ? 1 : -1)};
  transition: opacity 0.35s ease-in-out;
`;

const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Li = styled.li`
  margin: 15px 0px 15px;
  text-align: center;
`;

const Link = styled.a`
  color: ${(props) => `${props.theme.colors.color6}`};
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    color: ${(props) => `${props.theme.colors.color2}`};
    transition: 0.15s linear;
  }
`;

export default Menu;
