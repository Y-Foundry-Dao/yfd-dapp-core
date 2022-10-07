import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/react';
import useHandleInputs from 'hooks/useHandleInputs';
import { useRecoilValue } from 'recoil';
import { inputStatementOfWork } from 'recoil/input/atoms';

function InputStatementOfWork() {
  const statementOfWork = useRecoilValue(inputStatementOfWork);
  const { handleInputStatementOfWork } = useHandleInputs();
  return (
    <InputGroup>
      <InputLeftAddon children="https://" />
      <Input
        value={statementOfWork}
        onChange={handleInputStatementOfWork}
        placeholder="Enter URL to statement of work"
      />
    </InputGroup>
  );
}

export default InputStatementOfWork;
