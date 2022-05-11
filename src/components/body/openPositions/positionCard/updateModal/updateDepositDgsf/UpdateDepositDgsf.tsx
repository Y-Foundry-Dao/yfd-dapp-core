import { useState } from 'react';
import Button from 'components/basic/buttons/standard/Button';
import InputAmount from 'components/basic/input/InputAmount';
import InputLoop from 'components/basic/input/InputLoop';
import { useRecoilValue } from 'recoil';
import positionToUpdateAtom from 'recoil/positionToUpdate/atom';
import contractForPositionAtom from 'recoil/contractForPosition/atom';
import useHandleClicks from 'hooks/useHandleClicks';

function UpdateDepositDgsf() {
  const { handleClickDGSFDeposit } = useHandleClicks();
  const [amountToDepositDgsf, setAmountToDepositDgsf] = useState<any>(0);
  const contractForPosition = useRecoilValue(contractForPositionAtom);
  const positionToUpdate = useRecoilValue(positionToUpdateAtom);
  return (
    <>
      <InputAmount
        amount={Number(amountToDepositDgsf)}
        setAmount={setAmountToDepositDgsf}
        label="Add UST to position with default deposit parameters (4 loops, 2.5 collateral ratio):"
      />
      <InputLoop />
      <Button
        children="Add to Position"
        disabled={false}
        onClick={async () => {
          return await handleClickDGSFDeposit(
            contractForPosition,
            positionToUpdate,
            amountToDepositDgsf
          );
        }}
      />
    </>
  );
}

export default UpdateDepositDgsf;
