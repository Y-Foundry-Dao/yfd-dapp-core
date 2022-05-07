import { useEffect } from 'react';
import styled from 'styled-components';

import { useConnectedWallet } from '@terra-money/wallet-provider';

import useContractRegistry from 'utilities/hooks/useContractRegistry';
import useContractDGSF from 'utilities/hooks/useContractDGSF';
import useQuery from 'utilities/hooks/useQuery';
import queryBalance from 'utilities/messagesQuery/balance';

import OptionCard from 'components/availableOptionsCard/optionCard/OptionCard';
import Positions from 'components/openPositions/Positions';
import HeaderBar from 'components/navigation/headerBar/HeaderBar';
import FooterBar from 'components/footer/footerBar/FooterBar';

import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';

import modalIsOpenUpdateAtom from 'recoil/modalIsOpenUpdate/atom';
import modalIsOpenDepositAtom from 'recoil/modalIsOpenDeposit/atom';
import positionsAtom from 'recoil/positions/atom';
import mirrorObjectAtom from 'recoil/mirror/atom';

interface Props {
  modalIsOpen: boolean;
}

export default function App() {
  const updateModalIsOpen = useRecoilValue(modalIsOpenUpdateAtom);
  const depositModalIsOpen = useRecoilValue(modalIsOpenDepositAtom);
  const setPositionsArray = useSetRecoilState(positionsAtom);

  const [mirrorObject, setMirrorObject] = useRecoilState(mirrorObjectAtom);

  const { queryRegistry } = useContractRegistry();
  const connectedWallet: any = useConnectedWallet();
  const { queryMsg } = useContractDGSF();

  const { queryAllPositions } = useQuery();

  const getAssetBalances = async () => {
    if (!connectedWallet) {
      return;
    }
    const walletAddress = connectedWallet.walletAddress;
    const queryBalanceMessage = queryBalance(walletAddress);
    const newObj: any = {};

    Object.entries(mirrorObject).map(async ([key, value], i) => {
      const balanceResponse: any = await queryMsg(
        value.contract,
        queryBalanceMessage
      );
      const balance = balanceResponse.balance;
      newObj[key] = { contract: value.contract, label: value.label, balance };
      return setMirrorObject({
        ...newObj
      });
    });

    return;
  };

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
    getAssetBalances();
    getAllOpenPositions();
  }, [connectedWallet]);

  return (
    <Main modalIsOpen={depositModalIsOpen || updateModalIsOpen}>
      <Blur modalIsOpen={depositModalIsOpen || updateModalIsOpen} />
      <HeaderBar />
      <StylizedDiv>
        <StyledPageTitle>Foundry</StyledPageTitle>
        <StylizedTitle>My Open Positions</StylizedTitle>
        <Positions />
        <OpenPositions>
          <StylizedTitle>Available Options</StylizedTitle>
          <OptionCard />
        </OpenPositions>
      </StylizedDiv>
      <FooterBar />
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
