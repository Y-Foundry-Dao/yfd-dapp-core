import { Link } from '@chakra-ui/react';
import { Web3Address } from '@saas-ui/web3';

function FinderLink({ txHash }: any) {
  if (!txHash) {
    return null;
  }
  return (
    <Link isExternal href={`https://finder.terra.money/testnet/tx/${txHash}`}>
      TxHash: <Web3Address address={txHash} />
    </Link>
  );
}

export default FinderLink;
