import { useRecoilValueLoadable } from 'recoil';
import { selectMyFYFD } from '@recoil/connected/balance/selectors';
import NoticeLoading from '@components/NoticeLoading';
import { balanceFyfdConnectedAtom } from '@recoil/connected/address/atoms';

export default function FYFDFundValue() {
  const myFYFD = useRecoilValueLoadable(selectMyFYFD);
  if (myFYFD.state == 'hasValue') {
    return (
      <>
        $
        {Math.round(
          parseInt((+myFYFD.contents * 0.01).toString())
        ).toLocaleString()}{' '}
        USD
      </>
    );
  } else {
    return <NoticeLoading />;
  }
}
