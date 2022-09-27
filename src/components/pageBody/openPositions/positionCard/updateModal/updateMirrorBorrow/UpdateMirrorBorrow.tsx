import { useState } from 'react';
import Button from 'components/basic/buttons/standard/Button';
import InputAmount from 'components/basic/input/InputAmount';
import { useRecoilValue, useRecoilState } from 'recoil';
import positionToUpdateAtom from 'recoil/positionToUpdate/atom';
import contractForPositionAtom from 'recoil/contractForPosition/atom';
import useHandleClicks from 'hooks/useHandleClicks';
import amountMirrorBorrowAtom from 'recoil/amountMirrorBorrow/atom';

function UpdateMirrorBorrow() {
  const { handleClickMirrorBorrow } = useHandleClicks();
  const [amountToBorrow, setAmountToBorrow] = useRecoilState(
    amountMirrorBorrowAtom
  );
  const contractForPosition = useRecoilValue(contractForPositionAtom);
  const positionToUpdate = useRecoilValue(positionToUpdateAtom);
  return (
    <>
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
    </>
  );
}

export default UpdateMirrorBorrow;
