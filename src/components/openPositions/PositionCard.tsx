import InputAmount from 'components/depositModal/input/InputAmount';
import Button from 'components/buttons/basic/Button';
import { useEffect, useState } from 'react';
import useContract from 'utilities/hooks/useContractDGSF';
import { useConnectedWallet } from '@terra-money/wallet-provider';
import styled from 'styled-components';
import { Coins } from '@terra-money/terra.js';
import TxHashLink from 'components/depositModal/txHash/TxHashLink';
import { MBTC, MBTC_UST } from 'utilities/variables';
import PositionInfo from 'components/openPositions/PositionInfo';

interface Props {
  position: string;
  contract: string;
}

function PositionCard({ position, contract }: Props) {
  const [positionIdx, setPositionIdx] = useState('');
  const [amount, setAmount] = useState<any>(0);
  const { executeMsg, txHashFromExecute } = useContract();
  const connectedWallet: any = useConnectedWallet();
  const [contractTest, setContractTest] = useState('');
  const [amountToBorrow, setAmountToBorrow] = useState<any>(0);

  useEffect(() => {
    setContractTest(contract);
    setPositionIdx(position);
  }, []);

  const handleClickAddToPosition = async (amount: number, position: string) => {
    const amountInCoin: Coins.Input = { uusd: amount * Math.pow(10, 6) };
    const msgAddToPosition = {
      deposit: {
        loops: '4',
        asset: MBTC,
        asset_pair: MBTC_UST,
        collateral_ratio: '2.5',
        position_idx: position
      }
    };
    return await executeMsg(
      connectedWallet,
      contractTest,
      msgAddToPosition,
      amountInCoin
    );
  };

  const handleClickBorrowFromPosition = async (
    amount: number,
    position: string
  ) => {
    const amountInCoin: number = amount * Math.pow(10, 6);
    const msgBorrowFromPosition = {
      mirror: {
        mint: {
          asset: {
            info: {
              token: {
                contract_addr: MBTC
              }
            },
            amount: String(amountInCoin)
          },
          position_idx: position
        }
      }
    };
    return await executeMsg(
      connectedWallet,
      contractTest,
      msgBorrowFromPosition
    );
  };

  return (
    <Position>
      <p>{positionIdx}</p>
      <InputAmount
        amount={amountToBorrow}
        setAmount={setAmountToBorrow}
        label="Borrow mAsset"
      />
      <Button
        children="Borrow mAsset"
        disabled={false}
        onClick={async () => {
          return await handleClickBorrowFromPosition(
            Number(amountToBorrow),
            position
          );
        }}
      />

      <PositionInfo position={positionIdx} contract={contractTest} />
      <a
        href={`https://terrasco.pe/testnet/address/${contract}`}
        target="_blank"
      >
        {contract}
      </a>
      {txHashFromExecute ? <TxHashLink txHash={txHashFromExecute} /> : null}
      <InputAmount
        amount={Number(amount)}
        setAmount={setAmount}
        label="Deposit UST"
      />
      <Button
        children="Update Position"
        disabled={false}
        onClick={async () => {
          return await handleClickAddToPosition(amount, position);
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
