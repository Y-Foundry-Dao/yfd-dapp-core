import { useEffect, useState } from 'react';
import { useLCDClient, useConnectedWallet } from '@terra-money/wallet-provider';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

import { blue } from '@mui/material/colors';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import CardContent from '@mui/material/CardContent';

interface ITransaction {
  memo?: string;
  msgs: {
    canonicalMsg: string[];
    msgType: string;
  }[];
  success: boolean;
  fee?:
    | {
        amount: number;
        denom: string;
      }[]
    | null;
  timestamp: number;
  txhash: string;
}

const maskString = (str: string) =>
  `${str.substring(0, 6)}...${str.substring(str.length - 6)}`;
const toDate = (date: number) => new Date(date).toLocaleString();

export function WalletTransactions() {
  const [history, setHistory] = useState<null | ITransaction[]>();
  const terra = useLCDClient();
  const connectedWallet = useConnectedWallet();

  const maskMessage = (str: string) => {
    const [fromWallet, send, amount, proposition, toWallet] = str.split(' ');

    return (
      <div>
        <Link
          href={`https://finder.terra.money/testnet/address/${fromWallet}`}
          target="_blank"
          rel="noreferrer"
          color={blue[800]}
        >
          {fromWallet !== connectedWallet?.walletAddress &&
            maskString(fromWallet)}
        </Link>{' '}
        {fromWallet === connectedWallet?.walletAddress ? (
          <strong>Sends</strong>
        ) : (
          send
        )}{' '}
        {amount} {proposition}{' '}
        <Link
          href={`https://finder.terra.money/testnet/address/${toWallet}`}
          target="_blank"
          rel="noreferrer"
          color={blue[800]}
        >
          {toWallet === connectedWallet?.walletAddress && 'My Wallet'}
          {toWallet !== connectedWallet?.walletAddress && maskString(toWallet)}
        </Link>
      </div>
    );
  };

  useEffect(() => {
    if (connectedWallet) {
      terra.apiRequester
        .get(
          `https://bombay-api.terra.dev/tx-history/station/${connectedWallet.walletAddress}`
        )
        .then((result: any | { list: ITransaction[] }) => {
          setHistory(result.list.splice(0, 5));
        });
    } else {
      setHistory(null);
    }
  }, [connectedWallet, terra]);

  return (
    <Container maxWidth={false}>
      <Typography
        variant="h5"
        component="div"
        sx={{ flexGrow: 1, mt: 4, mb: 2 }}
      >
        Transactions
      </Typography>

      {history &&
        history.map((transaction) => (
          <Card
            key={'transaction-' + transaction.timestamp}
            variant="outlined"
            sx={{ mb: 2, maxWidth: 700 }}
          >
            <CardContent>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: blue[500] }} aria-label="message">
                    S
                  </Avatar>
                }
                action={
                  <Link
                    href={`https://finder.terra.money/testnet/tx/${transaction.txhash}`}
                    target="_blank"
                    rel="noreferrer"
                    fontWeight={500}
                    underline="none"
                    color={blue[800]}
                  >
                    {maskString(transaction.txhash)}
                  </Link>
                }
                title={maskMessage(transaction.msgs[0].canonicalMsg[0])}
                subheader={toDate(transaction.timestamp)}
              />
              {transaction.memo && (
                <Typography variant="body2">
                  Memo: {transaction.memo}
                </Typography>
              )}
              {transaction.fee && (
                <Typography variant="body2">
                  Fee: {transaction.fee[0].amount}{' '}
                  {transaction.fee[0].denom.toUpperCase()}
                </Typography>
              )}
            </CardContent>
          </Card>
        ))}
    </Container>
  );
}
