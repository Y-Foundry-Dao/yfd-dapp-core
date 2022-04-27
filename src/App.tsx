import { useEffect, useState } from 'react';
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

interface StyledProps {
  burgerIsOpen: boolean;
}

export default function App() {
  const [burgerIsOpen, setBurgerIsOpen] = useState<boolean>(false);
  const [depositModalIsOpen, setDepositModalIsOpen] = useState<boolean>(false);
  const [updateModalIsOpen, setUpdateModalIsOpen] = useState<boolean>(false);
  const [positionsArray, setPositionsArray] = useState<any[]>([]);
  const [contractToDeposit, setContractToDeposit] = useState('');
  const { queryRegistry } = useContractRegistry();
  const {
    instantiateContract,
    txHashFromInstantiate,
    contractFromInstantiation,
    setContractFromInstantiation,
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
          setContractToDeposit(instantiation.contract_addr);
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
    <Main modalIsOpen={depositModalIsOpen || updateModalIsOpen}>
      <Blur modalIsOpen={depositModalIsOpen || updateModalIsOpen} />
      <HeaderBar
        modalIsOpen={updateModalIsOpen || depositModalIsOpen}
        id="home"
        src={yLogo}
        alt="Y Logo"
        navLinks={['about', 'medium', 'join community', 'brand kit', 'roadmap']}
        open={burgerIsOpen}
        setOpen={setBurgerIsOpen}
      />
      <WalletConnectButton burgerIsOpen={burgerIsOpen} sx={{ flexGrow: 1 }}>
        <Toolbar>
          {status === WalletStatus.WALLET_CONNECTED ? (
            <ConnectedWalletMenu />
          ) : (
            <ConnectWalletMenu />
          )}
        </Toolbar>
      </WalletConnectButton>
      <StylizedDiv>
        <OpenPositions>
          <h1>Foundry</h1>
          <StylizedTitle>My Open Positions</StylizedTitle>
          <Positions
            updateModalIsOpen={updateModalIsOpen}
            burgerIsOpen={burgerIsOpen}
            setModalIsOpen={setUpdateModalIsOpen}
            positions={positionsArray}
          />
          {depositModalIsOpen ? (
            <DepositModal
              instantiateContract={instantiateContract}
              txHashFromInstantiate={txHashFromInstantiate}
              txHashFromExecuteInstantiate={txHashFromExecute}
              contractToDeposit={contractToDeposit}
              setContractToDeposit={setContractToDeposit}
              contractFromInstantiation={contractFromInstantiation}
              setContractFromInstantiation={setContractFromInstantiation}
              setModalIsOpen={setDepositModalIsOpen}
            />
          ) : null}
        </OpenPositions>

        <StylizedTitle>Available Options</StylizedTitle>
        <AvailablePositions>
          <OptionCard
            src={strategyLogo}
            alt="Degen Stable Farm logo"
            title="Degen Stable Farm"
            strategist="DR CLE4NCUTS"
            modalIsOpen={depositModalIsOpen}
            setModalIsOpen={setDepositModalIsOpen}
          />
        </AvailablePositions>
      </StylizedDiv>
      <FooterBar
        burgerIsOpen={burgerIsOpen}
        logo={longLogo}
        alt="YFD Logo"
        socialInfo={socialInfo}
      />
    </Main>
  );
}

const WalletConnectButton = styled(Box)<StyledProps>`
  position: relative;
  z-index: ${({ burgerIsOpen }) => (burgerIsOpen ? '-1' : '1')};
`;

const Main = styled.main<Props>`
  z-index: 0;
  pointer-events: ${({ modalIsOpen }) => (modalIsOpen ? 'none' : 'auto')};
  > * {
    filter: ${({ modalIsOpen }) => modalIsOpen && 'blur(20px)'};
  }
`;

const StylizedDiv = styled.div`
  width: 92%;
  margin: auto;
  padding-bottom: 30px;
`;

const StylizedTitle = styled.h2`
  color: ${(props) => `${props.theme.colors.color3}`};
  padding-top: 15px;
`;

const OpenPositions = styled.div`
  color: ${(props) => `${props.theme.colors.color3}`};
`;

const Blur = styled.div<Props>`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: ${({ modalIsOpen }) => (modalIsOpen ? '1' : '-1')};
`;

const AvailablePositions = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 1%;
  margin-right: 1%;
  width: 100%;
  filter: blur(0px) !important;
  background: linear-gradient(hsl(203, 25%, 8%), hsl(203, 50%, 0%));
  padding: 2rem 0.5rem;
  text-align: center;
  color: hsl(300, 50%, 95%);
  border-top: 1px solid hsl(215, 5%, 50%);
  border-right: 1px solid hsl(215, 5%, 25%);
  border-left: 1px solid hsl(215, 5%, 25%);
  border-bottom: 1px solid hsl(215, 4%, 15%);
  border-radius: 1.375rem;
`;
