import { Input } from '@chakra-ui/react';
import useHandleInputs from 'hooks/useHandleInputs';
import { useRecoilValue } from 'recoil';
import { inputDeveloperWallet } from 'recoil/input/atoms';

function InputDeveloper() {
  const developer = useRecoilValue(inputDeveloperWallet);
  const { handleInputDeveloper } = useHandleInputs();
  return (
    <Input
      mt={5}
      value={developer}
      onChange={handleInputDeveloper}
      placeholder="Enter Developer Wallet Address"
    />
  );
}

export default InputDeveloper;
