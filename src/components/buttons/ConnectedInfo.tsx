import { useWallet } from '@terra-money/wallet-provider';

function ConnectedInfo() {
  const { status, network, wallets } = useWallet();

  return (
    <section>
      <pre>
        {JSON.stringify(
          {
            status,
            network,
            wallets
          },
          null,
          2
        )}
      </pre>
    </section>
  );
}

export default ConnectedInfo;
