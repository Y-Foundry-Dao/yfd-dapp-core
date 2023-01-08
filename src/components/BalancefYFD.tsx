import { Text } from '@chakra-ui/react';
//import { selectFyfd } from '@recoil/connected/balance/selectors';
import { useRecoilValueLoadable } from 'recoil';

export default function BalancefYFD() {

  return 469;

/*  const balancefYFDLoadable = [50// useRecoilValueLoadable(selectFyfd);
  switch (balancefYFDLoadable.state) {
    case 'hasValue':
      return (
        <>
          <Text>fYFD Balance: {balancefYFDLoadable.contents}</Text>
        </>
      );
    case 'loading':
      return <div>Loading...</div>;
    case 'hasError':
      throw balancefYFDLoadable.contents;
  }
  */
}
