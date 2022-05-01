import { useConnectedWallet, useLCDClient } from '@terra-money/wallet-provider';
import Button from 'components/buttons/basic/Button';
import { useEffect, useState } from 'react';
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
      {bank &&
        bank.map((coin: any, i: number) => {
          if (coin.denom === 'uusd') {
            return (
              <Div key={i}>
                <AmountAvailable>
                  {`${coin.amount * 10 ** -6} UST`}
                </AmountAvailable>

                <Amount onClick={() => setAmount(coin.amount * 10 ** -6)}>
                  MAX
                </Amount>
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
  text-align: right;
  align-content: strech;
  justify-content: space-evenly;
  align-items: baseline;
`;

const Header = styled.h3`
  font-size: 1rem;
`;

const AmountAvailable = styled.span`
  text-align: left;
  width: 50%;
  font-size: 0.7em;
  color: #ccc;
  width: 100%;
  padding-left: 7%;
`;

const Amount = styled.span`
  color: #29dec6;
  margin-left: 3%;
  margin-top: 0px;
  cursor: pointer;
  text-align: right;
  width: 100%;
  padding-right: 7%;
`;

const Available = styled.div`
  //border: 1px dotted blue;
`;

const MaxDeposit = styled.span`
  text-align: right;
  width: 100%;
  letter-spacing: 2px;
`;

const MaxButton = styled(Button)`
  align-items: center;
  font-weight: 500;
  padding: 5%;
  height: 50%;
  letter-spacing: 2px;
`;

export default AvailableAmount;
