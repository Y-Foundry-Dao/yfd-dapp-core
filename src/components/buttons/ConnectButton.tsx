import { useWallet, WalletStatus } from '@terra-money/wallet-provider';

const ConnectButton = () => {
  const {
    availableInstallations,
    availableConnections,
    connect,
    status,
    disconnect
  } = useWallet();

  return (
    <div>
      {status === WalletStatus.WALLET_CONNECTED ? (
        <button onClick={() => disconnect()}>Disconnect</button>
      ) : (
        <div>
          {availableConnections.map(({ type, identifier, name, icon }, i) => (
            <button key={i} onClick={() => connect(type, identifier)}>
              <img
                src={icon}
                alt={name}
                style={{ width: '1em', height: '1em' }}
              />
              Connect {name} [{identifier}]
            </button>
          ))}
          {availableInstallations.map(({ identifier, name, icon, url }, i) => (
            <button key={i} onClick={() => (window.location.href = url)}>
              <img
                src={icon}
                alt={name}
                style={{ width: '1em', height: '1em' }}
              />
              Install {name} [{identifier}]
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ConnectButton;
