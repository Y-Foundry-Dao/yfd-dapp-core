import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useHandleClicks from 'hooks/useHandleClicks';
import CurrencyInput from 'react-currency-input-field';
import TxHashLink from '../availableOptions/optionCard/depositPanel/txHashLink/TxHashLink';
import useContract from 'hooks/useContract';
import BalanceYFD from './BalanceYFD';
import BalancefYFD from './BalancefYFD';
import { useRecoilState } from 'recoil';
import amountDepositYFDAtom from 'recoil/amountDepositYFD/atom';
import InputCurrency from 'components/basic/input/InputCurrency';

function StakeYFD() {
  const [amountDepositYFD, setAmountDepositYFD] =
    useRecoilState(amountDepositYFDAtom);
  const { handleClickStakeYFD } = useHandleClicks();
  const { txHashFromExecute } = useContract();
  const { txHashTest } = useHandleClicks();
  const [newTxHash, setNewTxHash] = useState('');

  useEffect(() => {
    console.log(txHashTest);
  }, [txHashTest, amountDepositYFD]);

  return (
    <>
      <div>{txHashFromExecute}</div>
      <InputCurrency
        id="stake-yfd-input"
        name="stake-yfd-input"
        placeholder="Enter YFD Amount"
        decimalsLimit={5}
        setAmount={setAmountDepositYFD}
        amount={amountDepositYFD}
        label="Deposit YFD"
      />
      <Button
        variant="contained"
        onClick={async () => {
          console.log(amountDepositYFD);
          return await handleClickStakeYFD(amountDepositYFD);
        }}
      >
        deposit yfd
      </Button>
      <BalanceYFD />
      <BalancefYFD />
      <div>{txHashFromExecute}</div>
      <div>{txHashTest}</div>
      <div>{newTxHash}</div>
    </>
  );
}

export default StakeYFD;
