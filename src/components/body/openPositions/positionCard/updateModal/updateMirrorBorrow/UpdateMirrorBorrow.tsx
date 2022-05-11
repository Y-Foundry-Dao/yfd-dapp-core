import { useState } from 'react';
import Button from 'components/basic/buttons/standard/Button';
import InputAmount from 'components/basic/input/InputAmount';
import { useRecoilValue } from 'recoil';
import positionToUpdateAtom from 'recoil/positionToUpdate/atom';
import contractForPositionAtom from 'recoil/contractForPosition/atom';
import useHandleClicks from 'hooks/useHandleClicks';

function UpdateMirrorBorrow() {
  const { handleClickMirrorBorrow } = useHandleClicks();
  const [amountToBorrow, setAmountToBorrow] = useState<any>(0);
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
