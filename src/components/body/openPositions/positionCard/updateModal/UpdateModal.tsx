import { useState } from 'react';
import styled from 'styled-components';

import { useRecoilValue, useSetRecoilState } from 'recoil';
import positionToUpdateAtom from 'recoil/positionToUpdate/atom';

import UpdateDgsfDeposit from './updateDgsfDeposit/UpdateDgsfDeposit';
import UpdateMirrorDeposit from './updateMirrorDeposit/UpdateMirrorDeposit';

import modalIsOpenUpdateAtom from 'recoil/modalIsOpenUpdate/atom';

import UpdateMirrorWithdraw from './updateMirrorWithdraw/UpdateMirrorWithdraw';
import UpdateMirrorBorrow from './updateMirrorBorrow/UpdateMirrorBorrow';
import UpdateMirrorBurn from './updateMirrorBurn/UpdateMirrorBurn';

function UpdateModal() {
  const setUpdateModalIsOpen = useSetRecoilState(modalIsOpenUpdateAtom);
  const positionToUpdate = useRecoilValue(positionToUpdateAtom);

  const handleClickCloseModal = async () => {
    return setUpdateModalIsOpen(false);
  };

  return (
    <ModalHolder>
      <Modal>
        <CloseButton onClick={handleClickCloseModal}>x</CloseButton>
        <Header>Degen Stable Farm ID: {positionToUpdate}</Header>
        <UpdateDgsfDeposit />
        <UpdateMirrorBorrow />
        <UpdateMirrorBurn />
        <UpdateMirrorWithdraw />
        <UpdateMirrorDeposit />
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
