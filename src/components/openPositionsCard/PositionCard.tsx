import InputAmount from 'components/depositModal/input/InputAmount';
import DepositButton from 'components/buttons/basic/Button';
import { useEffect, useState } from 'react';
import msgAddToPosition from 'utilities/messagesExecute/msgAddToPosition';
import useContract from 'utilities/hooks/useContract';
import { useConnectedWallet } from '@terra-money/wallet-provider';
import styled from 'styled-components';
import { Coins } from '@terra-money/terra.js';
import TxHashLink from 'components/depositModal/txHash/TxHashLink';

interface Props {
  contract: string;
}

function PositionCard({ contract }: Props) {
  const [positionIdx, setPositionIdx] = useState('');
  const [amount, setAmount] = useState<any>(0);
  const { executeMsg, txHashFromExecute } = useContract();
  const connectedWallet: any = useConnectedWallet();
  const [contractTest, setContractTest] = useState('');
  useEffect(() => {
    if (localStorage.getItem('position_idx') !== null) {
      const positionFromStorage: any = localStorage.getItem('position_idx');
      const contractFromStorage: any = localStorage.getItem('contractAddress');
      setContractTest(contractFromStorage);
      return setPositionIdx(positionFromStorage);
    }
  }, [positionIdx, contract]);

  const handleClick = async (amount: any) => {
    const amountInCoin: Coins.Input = { uusd: amount * Math.pow(10, 6) };
    return await executeMsg(
      connectedWallet,
      contractTest,
      msgAddToPosition,
      amountInCoin
    );
  };

  return (
    <Position>
      <p>{positionIdx}</p>
      {txHashFromExecute ? <TxHashLink txHash={txHashFromExecute} /> : null}
      <InputAmount amount={Number(amount)} setAmount={setAmount} />
      <DepositButton
        children="Update Position"
        disabled={false}
        onClick={async () => {
          return await handleClick(amount);
        }}
      />
    </Position>
  );
}

const Position = styled.div`
  border: 2px solid ${(props) => `${props.theme.colors.blue}`};
  width: 25%;
  margin: 3% 6%;
  padding: 2% 3% 3% 2%;
  border-radius: 20px;
  background: rgba(8, 6, 11, 0.75);
  min-width: 300px;
  z-index: 1;
  overflow: hidden;
`;

export default PositionCard;
