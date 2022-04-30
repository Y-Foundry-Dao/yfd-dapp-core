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
import dgsfLogo from 'assets/yfd/logo-dgsf.svg';
import hedgeLogo from 'assets/yfd/logo_square_blue.png';
import shieldedshortsLogo from 'assets/yfd/logo_square_mauve.png';

import OptionCard from 'components/availableOptionsCard/optionCard/OptionCard';
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
  const [updateModalIsOpen, setUpdateModalIsOpen] = useState<boolean>(false);
  const [positionsArray, setPositionsArray] = useState<any[]>([]);
  const { queryRegistry } = useContractRegistry();
  const connectedWallet: any = useConnectedWallet();
  const { status } = useWallet();
  const { queryAllPositions } = useQuery();
  const [contractToDeposit, setContractToDeposit] = useState('');
  const [depositModalIsOpen, setDepositModalIsOpen] = useState<boolean>(false);

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
        walletConnected={status}
      />
      <StylizedDiv>
        <StyledPageTitle>Foundry</StyledPageTitle>
        <StylizedTitle>My Open Positions</StylizedTitle>
        <Positions
          updateModalIsOpen={updateModalIsOpen}
          burgerIsOpen={burgerIsOpen}
          setModalIsOpen={setUpdateModalIsOpen}
          positions={positionsArray}
        />
        <OpenPositions>
          <StylizedTitle>Available Options</StylizedTitle>
          <OptionCard
            src={dgsfLogo}
            alt="Degen Stable Farm logo"
            title="Degen Stable Farm"
            strategist="DR CLE4NCUTS"
            modalIsOpen={depositModalIsOpen}
            setModalIsOpen={setDepositModalIsOpen}
          />
        </OpenPositions>
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

const Main = styled.main<Props>`
  z-index: 0;
  pointer-events: ${({ modalIsOpen }) => (modalIsOpen ? 'none' : 'auto')};
`;

const StylizedDiv = styled.div`
  width: 92%;
  margin: auto;
  padding-bottom: 30px;
  color: ${(props) => `${props.theme.colors.color5}`};
`;

const StylizedTitle = styled.h2`
  text-shadow: 1px 3px 6px black, 0 0 0 gray, 1px 4px 2px #333;
  margin-bottom: -1%;
  margin-top: 3%;
  color: ${(props) => `${props.theme.colors.color3}`};
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  grid-template-rows: 27px 0;
  grid-gap: 20px;
  align-items: center;
}

:after, :before {
  content: " ";
  display: block;
  border-bottom: 1px solid ${(props) => `${props.theme.colors.color3}`};
  box-shadow: 0 6px 7px -7px ${(props) => `${props.theme.colors.color1}`};
  height: 5px;
`;

const StyledPageTitle = styled.h1`
  text-shadow: 1px 4px 6px black, 0 0 0 gray, 1px 4px 2px orange;
  text-align: center;
  position: relative;
  width: 100%;
  margin: 2% auto 0 auto;
  text-transform: uppercase;
  text-rendering: optimizeLegibility;
  letter-spacing: 0.3em;
  text-shadow: 0px 1px 0 ${(props) => `${props.theme.colors.color1}`},
    4px 4px 0 #333;
  color: ${(props) => `${props.theme.colors.color3}`};
  border-bottom: 5px solid ${(props) => `${props.theme.colors.color3}`};
  // box-shadow: 0 6px 7px -7px ${(props) => `${props.theme.colors.color1}`};
  border-top: 5px solid ${(props) => `${props.theme.colors.color3}`};
`;

const StyledTitleAngle = styled.h2`
  text-transform: uppercase;
  border-bottom: 3px dotted ${(props) => `${props.theme.colors.color3}`};
  transform: translate(-50%, -50%) skew(10deg) rotate(-10deg);
  font-size: 2vw;
  top: 110px;
  left: 6%;
  position: absolute;
  text-rendering: optimizeLegibility;
  font-weight: 900;
  color: ${(props) => `${props.theme.colors.color2}`};
  text-shadow: 1px 4px 6px green, 0 0 0 yellow, 1px 4px 2px blue;
  white-space: nowrap;

  &:before {
    content: attr(data-heading);
    position: absolute;
    left: 0;
    top: -4.8%;
    overflow: hidden;
    width: 100%;
    height: 50%;
    color: #fbf7f4;
    transform: translate(1.6vw, 0) skew(-13deg) scale(1, 1.2);
    z-index: 2;
    text-shadow: 2px -1px 6px rgba(0, 0, 0, 0.2);
  }

  &:after {
    position: absolute;
    content: attr(data-heading);
    left: 0;
    top: 0;
    overflow: hidden;
    width: 20%;
    height: 20%;
    z-index: 1;
    color: #d3cfcc;
    transform: translate(0vw, 0) skew(13deg) scale(1, 0.8);
    clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0% 100%);
    text-shadow: 2px -1px 6px rgba(0, 0, 0, 0.3);
  }
`;

const OpenPositions = styled.div`
  color: ${(props) => `${props.theme.colors.color5}`};
`;

const Blur = styled.div<Props>`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: ${({ modalIsOpen }) => (modalIsOpen ? '1' : '-1')};
  > * {
    filter: ${({ modalIsOpen }) => modalIsOpen && 'blur(20px)'};
  }
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
  color: ${(props) => `${props.theme.colors.color5}`};
  border-top: 1px solid hsl(215, 5%, 50%);
  border-right: 1px solid hsl(215, 5%, 25%);
  border-left: 1px solid hsl(215, 5%, 25%);
  border-bottom: 1px solid hsl(215, 4%, 15%);
  border-radius: 1.375rem;
  z-index: 1;
`;
