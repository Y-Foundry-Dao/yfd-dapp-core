import { useWallet } from '@terra-money/wallet-provider';

function ConnectedInfo() {
  const {
    status,
    network,
    wallets,
    availableConnectTypes,
    availableInstallTypes,
    supportFeatures
  } = useWallet();

  return (
    <section>
      <pre>
        {JSON.stringify(
          {
            status,
            network,
            wallets,
            supportFeatures: Array.from(supportFeatures),
            availableConnectTypes,
            availableInstallTypes
          },
          null,
          2
        )}
      </pre>
    </section>
  );
}

export default ConnectedInfo;
