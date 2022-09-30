import { useEffect, useState } from 'react';
import useHandleClicks from 'hooks/useHandleClicks';
import useContract from 'hooks/useContract';
import BalanceYFD from './BalanceYFD';
import BalancefYFD from './BalancefYFD';
import { useRecoilState } from 'recoil';
import amountDepositYFDAtom from 'recoil/amountDepositYFD/atom';
import InputCurrency from 'components/basic/input/InputCurrency';
import { Button, Flex } from '@chakra-ui/react';

function StakeYFD() {
  const [amountDepositYFD, setAmountDepositYFD] =
    useRecoilState(amountDepositYFDAtom);
  const { handleClickStakeYFD } = useHandleClicks();
  const { txHashTest } = useHandleClicks();

  useEffect(() => {
    console.log(txHashTest);
  }, [txHashTest, amountDepositYFD]);

  return (
    <Flex alignItems="center" gap={10}>
      <Flex direction="column" gap={5}>
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
          onClick={async () => {
            console.log(amountDepositYFD);
            return await handleClickStakeYFD(amountDepositYFD);
          }}
        >
          deposit yfd
        </Button>
      </Flex>
      <Flex direction="column">
        <BalanceYFD />
        <BalancefYFD />
      </Flex>
    </Flex>
  );
}

export default StakeYFD;
