import styled from 'styled-components';

import Button from 'components/buttons/basic/Button';
import StrategyLogo from 'components/availableOptionsCard/image/StrategyLogo';
import Title from 'components/availableOptionsCard/title/Title';
import Strategist from 'components/availableOptionsCard/strategist/Strategist';

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
      <LogoAndButton>
        <StrategyLogo src={src} alt={alt} />
        <Button
          children="enter"
          onClick={() => setModalIsOpen(true)}
          disabled={false}
        />
      </LogoAndButton>

      <Text>
        <Title title={title} />
        <Strategist strategist={strategist} />
      </Text>
    </Card>
  );
}

const Card = styled.div`
  border: 2px solid ${(props) => `${props.theme.colors.color5}`};
  width: 25%;
  margin: 3% 6%;
  padding: 2% 3% 3% 2%;
  border-radius: 20px;
  background: rgba(8, 6, 11, 0.75);
  min-width: 300px;
  z-index: 1;
`;

const LogoAndButton = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.div`
  display: inline-block;
`;

export default strategyCard;
