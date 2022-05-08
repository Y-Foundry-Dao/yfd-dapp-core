import styled from 'styled-components';
import yLogo from 'assets/yfd/logo-orange.svg';

function Logo() {
  return (
    <>
      <Img src={yLogo} alt="Y Logo" />
    </>
  );
}

const Img = styled.img`
  margin: 15px 8% 15px;
  width: 21px;

  @media (min-width: 1440px) {
    margin: 14px 4% 14px;
    width: 28px;
  }
`;

export default Logo;
