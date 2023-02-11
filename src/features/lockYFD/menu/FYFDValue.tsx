import { useRecoilValueLoadable } from 'recoil';
import { selectMyFYFD } from '@recoil/connected/balance/selectors';
import NoticeLoading from '@components/NoticeLoading';

export default function PopoverBalanceFYFD() {
  const myFYFD = useRecoilValueLoadable(selectMyFYFD);
  // need to wrap balancefYFD in useMemo to avoid infinite loop
  const balancefYFD = Math.round(parseInt(myFYFD.contents)).toLocaleString();

  if (myFYFD.state == 'hasValue') {
    return <>{balancefYFD}</>;
  } else {
    return <NoticeLoading />;
  }
}
