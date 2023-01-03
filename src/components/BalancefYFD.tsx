import { Text } from '@chakra-ui/react';
import { balancefYFDQuery } from '@recoil/balanceConnected/selectors';
import { useRecoilValueLoadable } from 'recoil';

export default function BalancefYFD() {
  const balancefYFDLoadable = useRecoilValueLoadable(balancefYFDQuery);
  switch (balancefYFDLoadable.state) {
    case 'hasValue':
      return <Text>fYFD Balance: {balancefYFDLoadable.contents}</Text>;
    case 'loading':
      return <div>Loading...</div>;
    case 'hasError':
      throw balancefYFDLoadable.contents;
  }
}
