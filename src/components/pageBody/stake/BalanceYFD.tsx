import { Text } from '@chakra-ui/react';
import useContractYFD from 'hooks/useContractYFD';
import convertFromBase from 'utilities/converters/convertFromBase';

function BalanceYFD() {
  const { tokenBalance } = useContractYFD();

  return (
    <Text>Balance YFD: {convertFromBase(Number(tokenBalance)).toFixed(5)}</Text>
  );
}

export default BalanceYFD;
