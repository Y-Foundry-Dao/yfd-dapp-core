import { useState } from 'react';
import styled from 'styled-components';

import Button from 'components/buttons/basic/Button';
import InputAmount from 'components/input/InputAmount';

import useHandleClicks from 'utilities/hooks/useHandleClicks';

interface Props {
  position: string;
  contract: string;
  modalIsOpen: boolean;
  positionToUpdate: string;
  setModalIsOpen: (arg0: boolean) => void;
}

interface StyledProps {
  position: string;
  positionToUpdate: string;
}

function UpdateModal({
  position,
  contract,
  positionToUpdate,
  setModalIsOpen
}: Props) {
  const {
    handleClickMirrorDeposit,
    handleClickMirrorBurn,
    handleClickMirrorBorrow,
    handleClickMirrorWithdraw,
    handleClickDGSFDeposit
  } = useHandleClicks();
  const [amountToDepositDgsf, setAmountToDepositDgsf] = useState<any>(0);
  const [amountToBorrow, setAmountToBorrow] = useState<any>(0);
  const [amountToWithdraw, setAmountToWithdraw] = useState<any>(0);
  const [amountToBurn, setAmountToBurn] = useState<any>(0);
  const [amountToDepositMirror, setAmountToDepositMirror] = useState<any>(0);

  const handleClickCloseModal = async () => {
    return setModalIsOpen(false);
  };

  return (
    <ModalHolder position={position} positionToUpdate={positionToUpdate}>
      <Modal>
        <CloseButton onClick={handleClickCloseModal}>x</CloseButton>
        <Header>Degen Stable Farm ID: {position}</Header>

        <InputAmount
          amount={Number(amountToDepositDgsf)}
          setAmount={setAmountToDepositDgsf}
          label="Add UST to position with default deposit parameters (4 loops, 2.5 collateral ratio):"
        />
        <Button
          children="Add to Position"
          disabled={false}
          onClick={async () => {
            return await handleClickDGSFDeposit(
              contract,
              positionToUpdate,
              amountToDepositDgsf
            );
          }}
        />

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
              contract,
              position,
              Number(amountToBorrow)
            );
          }}
        />

        <InputAmount
          amount={Number(amountToBurn)}
          setAmount={setAmountToBurn}
          label="Burn mAssets"
        />
        <Button
          children="Pay Back Debt"
          disabled={false}
          onClick={async () => {
            return await handleClickMirrorBurn(
              contract,
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
              contract,
              position,
              Number(amountToWithdraw)
            );
          }}
        />

        <InputAmount
          amount={Number(amountToDepositMirror)}
          setAmount={setAmountToDepositMirror}
          label="Deposit aUST"
        />
        <Button
          children="Deposit aUST"
          disabled={false}
          onClick={async () => {
            return await handleClickMirrorDeposit(
              contract,
              positionToUpdate,
              amountToDepositMirror
            );
          }}
        />
      </Modal>
    </ModalHolder>
  );
}

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

const ModalHolder = styled.div<StyledProps>`
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
