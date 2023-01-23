import { Link } from '@chakra-ui/react';
import { Web3Address } from '@saas-ui/web3';

type FinderTxLinkProps = {
  txHash: string;
};

function FinderTxLink({ txHash }: FinderTxLinkProps) {
  if (!txHash) {
    return null;
  }
  return (
    <Link isExternal href={`https://finder.terra.money/testnet/tx/${txHash}`}>
      TxHash: <Web3Address address={txHash} />
    </Link>
  );
}

export default FinderTxLink;
