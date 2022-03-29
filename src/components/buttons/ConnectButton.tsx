import { useWallet } from '@terra-money/wallet-provider';

const ConnectButton = () => {
  const { availableInstallations, availableConnections, connect } = useWallet();

  return (
    <div>
      <h1>Available Installations</h1>
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
    </div>
  );
};

export default ConnectButton;
