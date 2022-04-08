import { Coins } from '@terra-money/terra.js';
import { useConnectedWallet, useLCDClient } from '@terra-money/wallet-provider';
import Button from 'components/buttons/basic/Button';
import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

interface Props {
  setAmount: (arg0: number) => void;
}

function AvailableAmount({ setAmount }: Props) {
  const lcd = useLCDClient();
  const connectedWallet = useConnectedWallet();

  const [bank, setBank] = useState<null | any>();

  useEffect(() => {
    if (connectedWallet) {
      lcd.bank.balance(connectedWallet.walletAddress).then(([coins]) => {
        setBank(coins.toData());
      });
    } else {
      setBank(null);
    }
  }, [connectedWallet, lcd]);

  return (
    <Available>
      <Header>Available:</Header>
      {bank &&
        bank.map((coin: any, i: number) => {
          if (coin.denom === 'uusd') {
            return (
              <Div key={i}>
                <Amount onClick={() => setAmount(coin.amount * 10 ** -6)}>{`${
                  coin.amount * 10 ** -6
                } UST`}</Amount>
                <MaxButton
                  children="max"
                  onClick={() => setAmount(coin.amount * 10 ** -6)}
                  disabled={false}
                />
              </Div>
            );
          }
        })}
    </Available>
  );
}

const Div = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Header = styled.h3`
  font-size: 1rem;
`;

const Amount = styled.p`
  color: #29dec6;
  margin-left: 1%;
  cursor: pointer;
`;

const Available = styled.div`
  display: flex;
`;

const MaxButton = styled(Button)`
  align-self: center;
  font-weight: 500;
  margin-right: 0;
`;

export default AvailableAmount;
