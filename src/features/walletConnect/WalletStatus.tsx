import { useWallet, WalletStatus } from '@terra-money/wallet-provider';
import React from 'react';
export default function Connect() {
  const {
    status,
    network,
    wallets,
    availableConnectTypes,
    connect,
    disconnect
  } = useWallet();
  return (
    <>
      {JSON.stringify({ status, network, wallets }, null, 2)}
      {status === WalletStatus.WALLET_NOT_CONNECTED && (
        <>
          {availableConnectTypes.map((connectType) => (
            <button
              key={'connect-' + connectType}
              onClick={() => connect(connectType)}
            >
              Connect {connectType}
            </button>
          ))}
        </>
      )}
      {status === WalletStatus.WALLET_CONNECTED && (
        <button onClick={() => disconnect()}>Disconnect</button>
      )}
    </>
  );
}
