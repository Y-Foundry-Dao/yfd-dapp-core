import styled from 'styled-components';
import EnterButton from 'components/openNewPosition/button/EnterButton';
import StrategyLogo from 'components/openNewPosition/image/StrategyLogo';
import Title from 'components/openNewPosition/title/Title';
import Strategist from 'components/openNewPosition/strategist/Strategist';

interface Props {
  src: string;
  alt: string;
  title: string;
  strategist: string;
  modalIsOpen: boolean;
  setModalIsOpen: (modalIsOpen: boolean) => void;
}

function strategyCard({ src, alt, title, strategist, setModalIsOpen }: Props) {
  return (
    <Card>
      <StrategyLogo src={src} alt={alt} />
      <EnterButton setModalIsOpen={setModalIsOpen} />
      <Title title={title} />
      <Strategist strategist={strategist} />
    </Card>
  );
}

const Card = styled.div`
  border: 1px solid ${(props) => `${props.theme.colors.blue}`};
  width: 20%;
  padding: 2%;
`;

export default strategyCard;
