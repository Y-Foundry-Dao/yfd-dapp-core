import styled from 'styled-components';

interface Props {
  src: string;
  alt: string;
}

function Logo({ src, alt }: Props) {
  return (
    <>
      <Img src={src} alt={alt} />
    </>
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

export default Logo;
