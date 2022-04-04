import { useState } from 'react';

import socialInfo from 'utilities/socialInfo';
import useInstantiateContract from 'utilities/hooks/useInstantiateContract';

import HeaderBar from 'components/navigation/headerBar/HeaderBar';
import ConnectButton from 'components/buttons/ConnectButton';
import FooterBar from 'components/footer/footerBar/FooterBar';

import yLogo from 'assets/yfd/logo-orange.svg';
import longLogo from 'assets/yfd/logo-horizontal-orange-white.svg';
import strategyLogo from 'assets/yfd/logo-strategy.svg';

import StrategyCard from 'components/openNewPosition/strategyCard/StrategyCard';
import DepositModal from 'components/openNewPosition/depositModal/DepositModal';

export default function App() {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  return (
    <main>
      <HeaderBar
        id="home"
        src={yLogo}
        alt="Y Logo"
        navLinks={['about', 'medium', 'join community', 'roadmap']}
      />
      <ConnectButton />
      {modalIsOpen ? <DepositModal setModalIsOpen={setModalIsOpen} /> : null}
      <StrategyCard
        src={strategyLogo}
        alt="Degen Stable Farm logo"
        title="Degen Stable Farm"
        strategist="DR CLE4NCUTS"
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      />
      <FooterBar logo={longLogo} alt="YFD Logo" socialInfo={socialInfo} />
    </main>
  );
}
