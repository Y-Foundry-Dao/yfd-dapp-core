import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/react';
import useHandleInputs from 'hooks/useHandleInputs';
import { useRecoilValue } from 'recoil';
import { inputGithub } from 'recoil/input/atoms';

function InputGithub() {
  const github = useRecoilValue(inputGithub);
  const { handleInputGithub } = useHandleInputs();
  return (
    <InputGroup>
      <InputLeftAddon children="https://" />
      <Input
        value={github}
        onChange={handleInputGithub}
        placeholder="Enter URL to Github"
      />
    </InputGroup>
  );
}

export default InputGithub;
