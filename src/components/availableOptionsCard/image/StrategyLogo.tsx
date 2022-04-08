import styled from 'styled-components';

interface Props {
  src: string;
  alt: string;
}

function StrategyLogo({ src, alt }: Props) {
  return (
    <>
      <Img src={src} alt={alt} />
    </>
  );
}

const Img = styled.img`
  border-radius: 50%;
  margin: 0 12% 0 0;
  padding: 0;
  width: 50%;
`;

export default StrategyLogo;
