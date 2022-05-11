import { useState } from 'react';
import Button from 'components/basic/buttons/standard/Button';
import InputAmount from 'components/basic/input/InputAmount';
import { useRecoilValue } from 'recoil';
import positionToUpdateAtom from 'recoil/positionToUpdate/atom';
import contractForPositionAtom from 'recoil/contractForPosition/atom';
import useHandleClicks from 'hooks/useHandleClicks';
import styled from 'styled-components';
import assetsObjectAtom from 'recoil/assetsObject/atom';

function UpdateMirrorBurn() {
  const { handleClickMirrorBurn } = useHandleClicks();
  const [amountToBurn, setAmountToBurn] = useState<any>(0);
  const contractForPosition = useRecoilValue(contractForPositionAtom);
  const positionToUpdate = useRecoilValue(positionToUpdateAtom);
  const assetsObject: any = useRecoilValue(assetsObjectAtom);
  return (
    <>
      <InputAmount
        amount={Number(amountToBurn)}
        setAmount={setAmountToBurn}
        label="Burn mAssets"
      />
      <StyledBalance>Available mBTC: {assetsObject.MBTC.balance}</StyledBalance>
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
    </>
  );
}

const StyledBalance = styled.p`
  color: white;
`;

export default UpdateMirrorBurn;
