import { useEffect } from 'react';
import styled from 'styled-components';

import { useConnectedWallet } from '@terra-money/wallet-provider';

import socialInfo from 'utilities/socialInfo';

import HeaderBar from 'components/navigation/headerBar/HeaderBar';
import FooterBar from 'components/footer/footerBar/FooterBar';

import yLogo from 'assets/yfd/logo-orange.svg';
import longLogo from 'assets/yfd/logo-horizontal-orange-white.svg';
import dgsfLogo from 'assets/yfd/logo-dgsf.svg';

import OptionCard from 'components/availableOptionsCard/optionCard/OptionCard';
import Positions from 'components/openPositions/Positions';

import useContractRegistry from 'utilities/hooks/useContractRegistry';
import useQuery from 'utilities/hooks/useQuery';
import modalIsOpenUpdateAtom from 'recoil/modalIsOpenUpdate/atom';
import modalIsOpenDepositAtom from 'recoil/modalIsOpenDeposit/atom';
import positionsAtom from 'recoil/positions/atom';
import { useSetRecoilState, useRecoilValue } from 'recoil';

interface Props {
  modalIsOpen: boolean;
}

export default function App() {
  const updateModalIsOpen = useRecoilValue(modalIsOpenUpdateAtom);
  const depositModalIsOpen = useRecoilValue(modalIsOpenDepositAtom);
  const setPositionsArray = useSetRecoilState(positionsAtom);

  const { queryRegistry } = useContractRegistry();
  const connectedWallet: any = useConnectedWallet();

  const { queryAllPositions } = useQuery();

  const getAllOpenPositions = async () => {
    if (!connectedWallet) {
      return;
    }

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
            setPositionsArray(openPositionsIndex);
          });
        }
      }
    });
    return openPositionsIndex;
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
      <HeaderBar src={yLogo} alt="Y Logo" />
      <StylizedDiv>
        <StyledPageTitle>Foundry</StyledPageTitle>
        <StylizedTitle>My Open Positions</StylizedTitle>
        <Positions />
        <OpenPositions>
          <StylizedTitle>Available Options</StylizedTitle>
          <OptionCard
            src={dgsfLogo}
            alt="Degen Stable Farm logo"
            title="Degen Stable Farm"
            strategist="DR CLE4NCUTS"
          />
        </OpenPositions>
      </StylizedDiv>
      <FooterBar logo={longLogo} alt="YFD Logo" socialInfo={socialInfo} />
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

  :after,
  :before {
    content: ' ';
    display: block;
    border-bottom: 1px solid ${(props) => `${props.theme.colors.color3}`};
    box-shadow: 0 6px 7px -7px ${(props) => `${props.theme.colors.color1}`};
    height: 5px;
  }
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
  border-top: 5px solid ${(props) => `${props.theme.colors.color3}`};
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
