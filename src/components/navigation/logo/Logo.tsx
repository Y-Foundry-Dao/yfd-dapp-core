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
  margin: 15px 8% 15px;
  width: 21px;

  @media (min-width: 1440px) {
    margin: 14px 4% 14px;
    width: 28px;
  }
`;

export default Logo;
