import styled from 'styled-components';

interface Props {
  strategist: string;
}

function Strategist({ strategist }: Props) {
  return <P>{strategist}</P>;
}

const P = styled.p`
  text-align: center;
  margin: 0%;
  padding: 0%;
  font-style: italic;
  font-size: 1.1rem;
`;

export default Strategist;
