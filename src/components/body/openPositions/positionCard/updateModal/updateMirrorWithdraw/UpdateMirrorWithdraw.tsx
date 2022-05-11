import { useState } from 'react';
import Button from 'components/basic/buttons/standard/Button';
import InputAmount from 'components/basic/input/InputAmount';
import { useRecoilValue } from 'recoil';
import positionToUpdateAtom from 'recoil/positionToUpdate/atom';
import contractForPositionAtom from 'recoil/contractForPosition/atom';
import useHandleClicks from 'hooks/useHandleClicks';

function UpdateMirrorWithdraw() {
  const { handleClickMirrorWithdraw } = useHandleClicks();
  const [amountToWithdraw, setAmountToWithdraw] = useState<any>(0);
  const contractForPosition = useRecoilValue(contractForPositionAtom);
  const positionToUpdate = useRecoilValue(positionToUpdateAtom);
  return (
    <>
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
    </>
  );
}

export default UpdateMirrorWithdraw;
