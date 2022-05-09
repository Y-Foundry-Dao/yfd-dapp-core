import { useRecoilState } from 'recoil';
import loopAmountAtom from 'recoil/loopAmount/atom';

function InputLoop() {
  const [loopAmount, setLoopAmount] = useRecoilState(loopAmountAtom);
  return (
    <label htmlFor="loop amount">
      Loops
      <input
        id="loops"
        type="text"
        value={loopAmount}
        onChange={(event) => setLoopAmount(event.currentTarget.value)}
      />
    </label>
  );
}

export default InputLoop;
