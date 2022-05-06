import styled from 'styled-components';

import longLogo from 'assets/yfd/logo-horizontal-orange-white.svg';
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
      <Img src={longLogo} alt="YFD Logo" />
      <SocialIcons />
    </Footer>
  );
}

const Img = styled.img`
  width: 24%;
  margin-left: 8%;

  @media (min-width: 425px) {
    margin-left: 10%;
    width: 20%;
  }
  @media (min-width: 550px) {
    margin-left: 12%;
    width: 16%;
  }
  @media (min-width: 756px) {
    margin-left: 14%;
    width: 12%;
  }
  @media (min-width: 1024px) {
    width: 11%;
  }
`;

const Footer = styled.footer<Footer>`
  height: 55px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 6%;
  visibility: ${({ burgerIsOpen }) => (burgerIsOpen ? 'hidden' : 'visible')};

  @media (min-width: 425px) {
    margin-bottom: 4%;
  }
  @media (min-width: 550px) {
    margin-bottom: 2%;
  }
  @media (min-width: 756px) {
    gap: 200px;
  }
  @media (min-width: 1024px) {
    margin-bottom: 1%;
    width: 85%;
    height: 60px;
  }
`;

export default FooterBar;
