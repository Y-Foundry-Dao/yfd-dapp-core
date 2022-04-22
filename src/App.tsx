import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import {
  WalletStatus,
  useWallet,
  useConnectedWallet
} from '@terra-money/wallet-provider';
import Box from '@mui/material/Box';
import { ConnectedWalletMenu } from './components/ConnectedWalletMenu';
import { ConnectWalletMenu } from './components/ConnectWalletMenu';

import Toolbar from '@mui/material/Toolbar';

import socialInfo from 'utilities/socialInfo';

import HeaderBar from 'components/navigation/headerBar/HeaderBar';
import FooterBar from 'components/footer/footerBar/FooterBar';

import yLogo from 'assets/yfd/logo-orange.svg';
import longLogo from 'assets/yfd/logo-horizontal-orange-white.svg';
import strategyLogo from 'assets/yfd/logo-strategy.svg';

import OptionCard from 'components/availableOptionsCard/optionCard/OptionCard';
import DepositModal from 'components/depositModal/modal/DepositModal';
import useInstantiateContract from 'utilities/hooks/useInstantiateContract';
import Positions from 'components/openPositions/Positions';

import useContractRegistry from 'utilities/hooks/useContractRegistry';
import useQuery from 'utilities/hooks/useQuery';

interface Props {
  modalIsOpen: boolean;
}

export default function App() {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [positionsArray, setPositionsArray] = useState<any[]>([]);
  const { queryRegistry } = useContractRegistry();
  const {
    instantiateContract,
    txHashFromInstantiate,
    contract,
    setContract,
    txHashFromExecute
  } = useInstantiateContract();
  const connectedWallet: any = useConnectedWallet();
  const { status } = useWallet();
  const { queryAllPositions } = useQuery();

  const getAllOpenPositions = async () => {
    if (status == WalletStatus.WALLET_CONNECTED) {
      const response: any = await queryRegistry();
      const contractInstantiations = await response.instantiations;

      let openPositionsIndex: any[] = [];

      contractInstantiations.map(async (instantiation: any) => {
        if (connectedWallet.walletAddress == instantiation.instance_owner) {
          const allPositions: any = await queryAllPositions(
            instantiation.contract_addr
          );
          const positionsArr = allPositions.positions;
          if (positionsArr.length > 0) {
            positionsArr.map((positionArr: any) => {
              openPositionsIndex = [
                ...openPositionsIndex,
                [positionArr.idx, positionArr.owner]
              ];
              console.log(openPositionsIndex);
              setPositionsArray(openPositionsIndex);
            });
          }
        }
      });
      return openPositionsIndex;
    }
  };
  useEffect(() => {
    const getOpenPositions = async () => {
      await getAllOpenPositions();
    };
    getOpenPositions();
  }, [connectedWallet]);

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
      <Positions positions={positionsArray} />
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
