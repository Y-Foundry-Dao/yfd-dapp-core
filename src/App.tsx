import { useEffect } from 'react';
import styled from 'styled-components';

import { useConnectedWallet } from '@terra-money/wallet-provider';

import HeaderBar from 'components/header/HeaderBar';
import FooterBar from 'components/footer/FooterBar';
import PageBody from 'components/body/Body';

import useContractRegistry from 'hooks/useContractRegistry';
import useContractDGSF from 'hooks/useContractDGSF';
import useQuery from 'hooks/useQuery';

import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import modalIsOpenUpdateAtom from 'recoil/modalIsOpenUpdate/atom';
import modalIsOpenDepositAtom from 'recoil/modalIsOpenDeposit/atom';
import positionsAtom from 'recoil/positions/atom';

import queryBalance from 'utilities/messagesQuery/balance';
import assetsObjectAtom from 'recoil/assetsObject/atom';

import tokenFactory from 'utilities/messagesQuery/tokenFactory';
import { TOKEN_FACTORY } from 'utilities/variables';

interface Props {
  modalIsOpen: boolean;
}

export default function App() {
  const connectedWallet: any = useConnectedWallet();
  const updateModalIsOpen = useRecoilValue(modalIsOpenUpdateAtom);
  const depositModalIsOpen = useRecoilValue(modalIsOpenDepositAtom);
  const setPositionsArray = useSetRecoilState(positionsAtom);
  const [assetsObject, setAssetsObject] = useRecoilState(assetsObjectAtom);

  const { queryRegistry } = useContractRegistry();
  const { queryMsg } = useContractDGSF();
  const { queryAllPositions } = useQuery();

  const getAssetObjectState = async () => {
    if (!connectedWallet) {
      return;
    }
    const walletAddress = connectedWallet.walletAddress;
    const queryBalanceMessage = queryBalance(walletAddress);
    const newObj: any = {};

    Object.entries(assetsObject).map(async ([key, value], i) => {
      const pairResponse: any = await queryMsg(
        TOKEN_FACTORY,
        tokenFactory(value.contract)
      );
      const balanceResponse: any = await queryMsg(
        value.contract,
        queryBalanceMessage
      );
      const balance = balanceResponse.balance;
      newObj[key] = {
        contract: value.contract,
        pair: pairResponse.contract_addr,
        label: value.label,
        balance
      };
      return setAssetsObject({
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
    getAssetObjectState();
    getAllOpenPositions();
  }, [connectedWallet]);

  return (
    <Main modalIsOpen={depositModalIsOpen || updateModalIsOpen}>
      <Blur modalIsOpen={depositModalIsOpen || updateModalIsOpen} />
      <HeaderBar />
      <PageBody />
      <FooterBar />
    </Main>
  );
}

const Main = styled.main<Props>`
  display: grid;
  grid: 'pageHeader' 'pageBody' 'pageFooter';
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
