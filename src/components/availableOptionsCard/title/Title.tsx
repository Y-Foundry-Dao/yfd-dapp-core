import styled from 'styled-components';

interface Props {
  title: string;
}

function Title({ title }: Props) {
  return <P>{title}</P>;
}

const P = styled.p`
  margin: 10% 0 0 0;
  font-size: 1.6rem;
`;

export default Title;
