import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/react';
import useHandleInputs from 'hooks/useHandleInputs';
import { useRecoilValue } from 'recoil';
import { inputSelfVoucedInformation } from 'recoil/input/atoms';

function InputSelfVouchedInformation() {
  const selfVouchedInformation = useRecoilValue(inputSelfVoucedInformation);
  const { handleInputSelfVouchedInformation } = useHandleInputs();
  return (
    <InputGroup>
      <InputLeftAddon children="https://" />
      <Input
        value={selfVouchedInformation}
        onChange={handleInputSelfVouchedInformation}
        placeholder="Enter URL to Self Vouched Information"
      />
    </InputGroup>
  );
}

export default InputSelfVouchedInformation;
