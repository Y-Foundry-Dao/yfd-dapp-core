import {
  useWallet,
  WalletStatus,
  useConnectedWallet,
  useLCDClient
} from '@terra-money/wallet-provider';
import React, { useEffect, useState } from 'react';
import {
  selectMinFYFDVaultProp,
  selectMinFYFDGovProp,
  selectMinFYFDEmergencyProp
} from '@recoil/governance/parameters/selectors';
import { selectMyFYFD, selectMyYFD } from '@recoil/connected/balance/selectors';

import { Icons } from '@var/icons';
import styles from '@scss/app.module.scss';
import ConnectWalletMenu from '@components/ConnectWallet/Object';

export default function MenuPopoverBalance() {
  const { status, supportFeatures } = useWallet();

  return (
    <div className={styles.textSpecial}>
      {status === WalletStatus.WALLET_CONNECTED ? (
        <QuerySample />
      ) : (
        <ConnectWalletMenu />
      )}
    </div>
  );
}

export function QuerySample() {
  const lcd = useLCDClient();
  const connectedWallet = useConnectedWallet();

  const [bank, setBank] = useState<null | string>();

  useEffect(() => {
    if (connectedWallet) {
      lcd.bank.balance(connectedWallet.walletAddress).then(([coins]) => {
        setBank(coins.toString());
        setBank((parseInt(coins.toString()) / 1000000).toString());
      });
    } else {
      setBank(null);
    }
  }, [connectedWallet, lcd]);

  return (
    <div>
      {bank && <pre>{bank}</pre>}
      {!connectedWallet && <p>Wallet not connected!</p>}
    </div>
  );
}
