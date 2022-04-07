import { useState } from 'react';
import styled from 'styled-components';

import socialInfo from 'utilities/socialInfo';

import HeaderBar from 'components/navigation/headerBar/HeaderBar';
import ConnectButton from 'components/buttons/connect/ConnectButton';
import FooterBar from 'components/footer/footerBar/FooterBar';

import yLogo from 'assets/yfd/logo-orange.svg';
import longLogo from 'assets/yfd/logo-horizontal-orange-white.svg';
import strategyLogo from 'assets/yfd/logo-strategy.svg';

import OptionCard from 'components/availableOptionsCard/optionCard/OptionCard';
import DepositModal from 'components/depositModal/modal/DepositModal';

interface Props {
  modalIsOpen: boolean;
}

export default function App() {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  return (
    <Main modalIsOpen={modalIsOpen}>
      <Blur modalIsOpen={modalIsOpen} />
      <HeaderBar
        id="home"
        src={yLogo}
        alt="Y Logo"
        navLinks={['about', 'medium', 'join community', 'roadmap']}
      />
      <ConnectButton />
      {modalIsOpen ? <DepositModal setModalIsOpen={setModalIsOpen} /> : null}
      <h1>Available Options</h1>
      <OptionCard
        src={strategyLogo}
        alt="Degen Stable Farm logo"
        title="Degen Stable Farm"
        strategist="DR CLE4NCUTS"
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      />
      <FooterBar logo={longLogo} alt="YFD Logo" socialInfo={socialInfo} />
    </Main>
  );
}

const Main = styled.main<Props>`
  z-index: 0;
  pointer-events: ${({ modalIsOpen }) => (modalIsOpen ? 'none' : 'auto')};
  > * {
    filter: ${({ modalIsOpen }) => (modalIsOpen ? 'blur(20px)' : 'blur(0)')};
  }
`;

const Blur = styled.div<Props>`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: ${({ modalIsOpen }) => (modalIsOpen ? '1' : '-1')};
`;
