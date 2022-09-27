import Button from 'components/basic/buttons/standard/Button';
import InputAmount from 'components/basic/input/InputAmount';
import { useRecoilValue, useRecoilState } from 'recoil';
import positionToUpdateAtom from 'recoil/positionToUpdate/atom';
import contractForPositionAtom from 'recoil/contractForPosition/atom';
import useHandleClicks from 'hooks/useHandleClicks';
import amountMirrorDepositAtom from 'recoil/amountMirrorDeposit/atom';

function UpdateMirrorDeposit() {
  const { handleClickMirrorDeposit } = useHandleClicks();
  const [amountToDepositMirror, setAmountToDepositMirror] = useRecoilState(
    amountMirrorDepositAtom
  );
  const contractForPosition = useRecoilValue(contractForPositionAtom);
  const positionToUpdate = useRecoilValue(positionToUpdateAtom);
  return (
    <>
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
            contractForPosition,
            positionToUpdate,
            amountToDepositMirror
          );
        }}
      />
    </>
  );
}

export default UpdateMirrorDeposit;
