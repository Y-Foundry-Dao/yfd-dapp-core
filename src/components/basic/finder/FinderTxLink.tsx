import { Link } from '@chakra-ui/react';
import { Web3Address } from '@saas-ui/web3';

function FinderTxLink({ txHash }: any) {
  if (!txHash) {
    return null;
  }
  //finder.terra.money/testnet/address/terra1l40t9unus08y00h4hjtvmfspkzl5v8lz2a9k0racxaxjq4vsudvsq2emjw
  return (
    <Link isExternal href={`https://finder.terra.money/testnet/tx/${txHash}`}>
      TxHash: <Web3Address address={txHash} />
    </Link>
  );
}

export default FinderTxLink;
