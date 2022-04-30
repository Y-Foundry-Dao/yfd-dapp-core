import styled from 'styled-components';

interface Props {
  title: string;
}

function Title({ title }: Props) {
  return <P>{title}</P>;
}

const P = styled.p`
  text-align: center;
  margin: 15px 0 0 0px;
  font-size: 1.6rem;
`;

export default Title;
