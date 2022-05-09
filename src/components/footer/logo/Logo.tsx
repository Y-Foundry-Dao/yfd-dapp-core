import styled from 'styled-components';
import longLogo from 'assets/yfd/logo-horizontal-orange-white.svg';

function Logo() {
  return (
    <>
      <Img src={longLogo} alt="Y-Foundry DAO" />
    </>
  );
}

const Img = styled.img`
  width: 24%;

  @media (min-width: 425px) {
    width: 20%;
  }
  @media (min-width: 550px) {
    width: 16%;
  }
  @media (min-width: 756px) {
    width: 12%;
  }
  @media (min-width: 1024px) {
    width: 11%;
  }
`;

export default Logo;
