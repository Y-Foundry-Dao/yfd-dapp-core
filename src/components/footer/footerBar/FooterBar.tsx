import styled from 'styled-components';

import SocialIcons from 'components/footer/socialIcons/SocialIcons';

type SocialId = string;

interface Social {
  link: string;
  icon: JSX.Element;
}

interface Props {
  logo: string;
  alt: string;
  socialInfo: Record<SocialId, Social>;
}

function FooterBar({ logo, alt, socialInfo }: Props) {
  return (
    <Footer>
      <Img src={logo} alt={alt} />
      <SocialIcons socialInfo={socialInfo} />
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

const Footer = styled.footer`
  height: 55px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 6%;

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
