import { useState } from 'react';
import styled from 'styled-components';

import { useRecoilValue, useSetRecoilState } from 'recoil';
import positionToUpdateAtom from 'recoil/positionToUpdate/atom';

import Button from 'components/basic/buttons/standard/Button';
import InputAmount from 'components/basic/input/InputAmount';
import UpdateDgsfDeposit from './updateDgsfDeposit/UpdateDgsfDeposit';
import UpdateMirrorDeposit from './updateMirrorDeposit/UpdateMirrorDeposit';

import useHandleClicks from 'hooks/useHandleClicks';
import contractForPositionAtom from 'recoil/contractForPosition/atom';
import modalIsOpenUpdateAtom from 'recoil/modalIsOpenUpdate/atom';

import assetsObjectAtom from 'recoil/assetsObject/atom';

function UpdateModal() {
  const {
    handleClickMirrorBurn,
    handleClickMirrorBorrow,
    handleClickMirrorWithdraw
  } = useHandleClicks();
  const setUpdateModalIsOpen = useSetRecoilState(modalIsOpenUpdateAtom);
  const contractForPosition = useRecoilValue(contractForPositionAtom);
  const positionToUpdate = useRecoilValue(positionToUpdateAtom);

  const [amountToBorrow, setAmountToBorrow] = useState<any>(0);
  const [amountToWithdraw, setAmountToWithdraw] = useState<any>(0);
  const [amountToBurn, setAmountToBurn] = useState<any>(0);

  const assetsObject: any = useRecoilValue(assetsObjectAtom);

  const handleClickCloseModal = async () => {
    return setUpdateModalIsOpen(false);
  };

  return (
    <ModalHolder>
      <Modal>
        <CloseButton onClick={handleClickCloseModal}>x</CloseButton>
        <Header>Degen Stable Farm ID: {positionToUpdate}</Header>
        <UpdateDgsfDeposit />
        <InputAmount
          amount={amountToBorrow}
          setAmount={setAmountToBorrow}
          label="Borrow mAsset"
        />
        <Button
          children="Borrow mAsset"
          disabled={false}
          onClick={async () => {
            return await handleClickMirrorBorrow(
              contractForPosition,
              positionToUpdate,
              Number(amountToBorrow)
            );
          }}
        />

        <InputAmount
          amount={Number(amountToBurn)}
          setAmount={setAmountToBurn}
          label="Burn mAssets"
        />
        <StyledBalance>
          Available mBTC: {assetsObject.MBTC.balance}
        </StyledBalance>
        <Button
          children="Pay Back Debt"
          disabled={false}
          onClick={async () => {
            return await handleClickMirrorBurn(
              contractForPosition,
              positionToUpdate,
              amountToBurn
            );
          }}
        />

        <InputAmount
          amount={amountToWithdraw}
          setAmount={setAmountToWithdraw}
          label="Withdraw aUST"
        />
        <Button
          children="Withdraw aUST"
          disabled={false}
          onClick={async () => {
            return await handleClickMirrorWithdraw(
              contractForPosition,
              positionToUpdate,
              Number(amountToWithdraw)
            );
          }}
        />
        <UpdateMirrorDeposit />
      </Modal>
    </ModalHolder>
  );
}

const StyledBalance = styled.p`
  color: white;
`;

const Header = styled.h2`
  align-self: center;
  margin-top: -4%;
  margin-bottom: 10%;
`;

const CloseButton = styled.button`
  color: ${(props) => `${props.theme.colors.color4}`};
  background-color: rgba(8, 6, 11, 0.9);
  border: none;
  position: relative;
  width: 30px;
  right: -110%;
  font-size: 1.4rem;
`;

const ModalHolder = styled.div`
  position: fixed;
  left: 18%;
  top: 0;
  background: rgba(8, 6, 11, 0.9);
  border-radius: 20px;
  width: 70%;
  pointer-events: auto;
  z-index: 2;
`;

const Modal = styled.div`
  padding: 4%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 70%;
  margin-left: 10%;
  pointer-events: auto;
`;

export default UpdateModal;
