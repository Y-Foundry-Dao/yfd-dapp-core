import { useEffect } from 'react';
import styled from 'styled-components';

import { useConnectedWallet } from '@terra-money/wallet-provider';

import HeaderBar from 'components/header/headerBar/HeaderBar';
import FooterBar from 'components/footer/footerBar/FooterBar';

import useContractRegistry from 'hooks/useContractRegistry';
import useQuery from 'hooks/useQuery';
import modalIsOpenUpdateAtom from 'recoil/modalIsOpenUpdate/atom';
import modalIsOpenDepositAtom from 'recoil/modalIsOpenDeposit/atom';
import positionsAtom from 'recoil/positions/atom';
import Body from 'components/body/Body';
import useContractDGSF from 'hooks/useContractDGSF';
import queryBalance from 'utilities/messagesQuery/balance';

import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
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
      newObj[key] = { contract: value.contract, balance };
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
      <Body />
      <FooterBar />
    </Main>
  );
}

const Main = styled.main<Props>`
  z-index: 0;
  pointer-events: ${({ modalIsOpen }) => (modalIsOpen ? 'none' : 'auto')};
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
