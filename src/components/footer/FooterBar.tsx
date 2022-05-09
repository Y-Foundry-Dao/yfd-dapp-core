import styled from 'styled-components';

import Logo from 'components/footer/logo/Logo';
import SocialIcons from 'components/footer/socialIcons/SocialIcons';
import burgerAtom from 'recoil/burger/atom';
import { useRecoilState } from 'recoil';

interface Footer {
  burgerIsOpen: boolean;
}

function FooterBar() {
  const [burgerIsOpen] = useRecoilState(burgerAtom);
  return (
    <Footer burgerIsOpen={burgerIsOpen}>
      <Logo />
      <SocialIcons />
    </Footer>
  );
}

const Footer = styled.footer<Footer>`
  grid-area: pageFooter;
  display: flex;
  gap: 50%;
  flex-wrap: no-wrap;
  justify-content: space-evenly;
  visibility: ${({ burgerIsOpen }) => (burgerIsOpen ? 'hidden' : 'visible')};
  margin-bottom: 2%;

  @media (min-width: 425px) {
  }
  @media (min-width: 550px) {
    margin-bottom: 2%;
  }
  @media (min-width: 756px) {
  }
  @media (min-width: 1024px) {
  }
`;

export default FooterBar;
