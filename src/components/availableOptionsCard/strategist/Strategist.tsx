import styled from 'styled-components';

interface Props {
  strategist: string;
}

function Strategist({ strategist }: Props) {
  return <I>{strategist}</I>;
}

const I = styled.i`
  float: right;
  font-size: 1.1rem;
`;

export default Strategist;
