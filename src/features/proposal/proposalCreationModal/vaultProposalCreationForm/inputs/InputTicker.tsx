import { Input } from '@chakra-ui/react';
import useHandleInputs from 'hooks/useHandleInputs';
import { useRecoilValue } from 'recoil';
import { inputTicker } from 'recoil/input/atoms';

function InputTicker() {
  const ticker = useRecoilValue(inputTicker);
  const { handleInputTicker } = useHandleInputs();
  return (
    <Input
      mt={5}
      value={ticker}
      onChange={handleInputTicker}
      placeholder="Enter Ticker"
    />
  );
}

export default InputTicker;
