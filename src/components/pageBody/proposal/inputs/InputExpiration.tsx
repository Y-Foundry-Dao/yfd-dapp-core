import {
  Flex,
  Heading,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper
} from '@chakra-ui/react';
import useHandleInputs from 'hooks/useHandleInputs';
import { useRecoilValue } from 'recoil';
import { inputExpiration } from 'recoil/input/atoms';

function InputExpiration() {
  const expiration = useRecoilValue(inputExpiration);
  const { handleInputExpiration } = useHandleInputs();
  return (
    <Flex alignItems="center" gap={5}>
      <Heading as="h3" size="md">
        Expiration in Blocks:
      </Heading>
      <NumberInput
        maxW="140px"
        mr="2rem"
        defaultValue={43200}
        step={1}
        min={43200}
        value={expiration}
        onChange={handleInputExpiration}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </Flex>
  );
}

export default InputExpiration;
