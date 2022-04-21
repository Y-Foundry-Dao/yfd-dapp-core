import { useState } from 'react';
import styled from 'styled-components';

import { WalletStatus, useWallet } from '@terra-money/wallet-provider';
import Box from '@mui/material/Box';
import { ConnectedWalletMenu } from './components/ConnectedWalletMenu';
import { ConnectWalletMenu } from './components/ConnectWalletMenu';

import Toolbar from '@mui/material/Toolbar';

import socialInfo from 'utilities/socialInfo';

import HeaderBar from 'components/navigation/headerBar/HeaderBar';
import ConnectButton from 'components/buttons/connect/ConnectButton';
import FooterBar from 'components/footer/footerBar/FooterBar';

import yLogo from 'assets/yfd/logo-orange.svg';
import longLogo from 'assets/yfd/logo-horizontal-orange-white.svg';
import strategyLogo from 'assets/yfd/logo-strategy.svg';

import OptionCard from 'components/availableOptionsCard/optionCard/OptionCard';
import DepositModal from 'components/depositModal/modal/DepositModal';
import PositionCard from 'components/openPositions/PositionCard';
import useInstantiateContract from 'utilities/hooks/useInstantiateContract';
import Positions from 'components/openPositions/Positions';

interface Props {
  modalIsOpen: boolean;
}

export default function App() {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const {
    instantiateContract,
    txHashFromInstantiate,
    contract,
    setContract,
    txHashFromExecute
  } = useInstantiateContract();
  const { status } = useWallet();

  return (
    <Main modalIsOpen={modalIsOpen}>
      <Blur modalIsOpen={modalIsOpen} />
      <HeaderBar
        id="home"
        src={yLogo}
        alt="Y Logo"
        navLinks={['about', 'medium', 'join community', 'roadmap']}
      />
      <Box sx={{ flexGrow: 1 }}>
        <Toolbar>
          {status === WalletStatus.WALLET_CONNECTED ? (
            <ConnectedWalletMenu />
          ) : (
            <ConnectWalletMenu />
          )}
        </Toolbar>
      </Box>
      <h1>My Open Position</h1>
      <Positions />
      <PositionCard />
      {modalIsOpen ? (
        <DepositModal
          instantiateContract={instantiateContract}
          txHashFromInstantiate={txHashFromInstantiate}
          setContract={setContract}
          txHashFromExecute={txHashFromExecute}
          contract={contract}
          setModalIsOpen={setModalIsOpen}
        />
      ) : null}
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
