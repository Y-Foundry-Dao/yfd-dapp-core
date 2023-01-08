import { useRecoilValueLoadable } from 'recoil';
//import { selectYFD } from '@recoil/connected/balance/selectors';
const selectYFD = '1000';
export default function BalanceYFD() {
  return (
    <>
      <div>
      { /* YFD Balance: <>{useRecoilValueLoadable(selectYFD)}</> */ }
      YFD Balance: <>{selectYFD}</>
      </div>
    </>
  );
}
