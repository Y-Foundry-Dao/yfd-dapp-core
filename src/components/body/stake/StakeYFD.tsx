import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import useHandleClicks from 'hooks/useHandleClicks';
import CurrencyInput from 'react-currency-input-field';
import TxHashLink from '../availableOptions/optionCard/depositPanel/txHashLink/TxHashLink';
import useContract from 'hooks/useContract';
import BalanceYFD from './BalanceYFD';
import BalancefYFD from './BalancefYFD';

function StakeYFD() {
  const [amountDepositYFD, setAmountDepositYFD] = useState(0);
  const { handleClickStakeYFD } = useHandleClicks();
  const { txHashFromExecute } = useContract();

  useEffect(() => {
    console.log(txHashFromExecute);
  }, [txHashFromExecute]);

  return (
    <>
      <div>{txHashFromExecute}</div>
      <BalanceYFD />
      <BalancefYFD />
      <CurrencyInput
        id="stake-yfd-input"
        name="stake-yfd-input"
        allowNegativeValue={false}
        placeholder="Enter YFD Amount"
        decimalsLimit={5}
        onValueChange={(value) => setAmountDepositYFD(Number(value))}
      />
      <Button
        variant="contained"
        onClick={async () => {
          return await handleClickStakeYFD(amountDepositYFD);
        }}
      >
        deposit yfd
      </Button>
    </>
  );
}

export default StakeYFD;
