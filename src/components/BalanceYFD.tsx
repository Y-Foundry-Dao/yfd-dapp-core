import { balanceYFDQuery } from '@recoil/balanceConnected/selectors';
import { useRecoilValueLoadable } from 'recoil';

export default function BalanceYFD() {
  const balanceYFDLoadable = useRecoilValueLoadable(balanceYFDQuery);
  switch (balanceYFDLoadable.state) {
    case 'hasValue':
      return <div>YFD Balance: {balanceYFDLoadable.contents}</div>;
    case 'loading':
      return <div>Loading...</div>;
    case 'hasError':
      throw balanceYFDLoadable.contents;
  }
}
