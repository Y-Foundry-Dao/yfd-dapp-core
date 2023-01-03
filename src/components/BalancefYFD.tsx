import { Text } from '@chakra-ui/react';
import useContractForge from 'hooks/useContractForge';
import convertFromBase from 'utilities/converters/convertFromBase';

function BalancefYFD() {
  const { tokenBalance } = useContractForge();

  return <Text>{convertFromBase(tokenBalance).toFixed(5)}</Text>;
}

export default BalancefYFD;
