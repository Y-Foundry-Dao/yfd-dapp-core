import Button from 'components/basic/buttons/standard/Button';
import InputAmount from 'components/basic/input/InputAmount';
import { useRecoilValue, useRecoilState } from 'recoil';
import positionToUpdateAtom from 'recoil/positionToUpdate/atom';
import contractForPositionAtom from 'recoil/contractForPosition/atom';
import useHandleClicks from 'hooks/useHandleClicks';
import amountMirrorWithdrawAtom from 'recoil/amountMirrorWithdraw/atom';

function UpdateMirrorWithdraw() {
  const { handleClickMirrorWithdraw } = useHandleClicks();
  const [amountToWithdraw, setAmountToWithdraw] = useRecoilState(
    amountMirrorWithdrawAtom
  );
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
