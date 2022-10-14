import { Link } from '@chakra-ui/react';
import { Web3Address } from '@saas-ui/web3';

function FinderContractLink({ contract }: any) {
  if (!contract) {
    return null;
  }
  return (
    <Link
      isExternal
      href={`https://finder.terra.money/testnet/address/${contract}`}
    >
      <Web3Address
        textDecorationLine="underline"
        address={contract}
        startLength={8}
      />
    </Link>
  );
}

export default FinderContractLink;
