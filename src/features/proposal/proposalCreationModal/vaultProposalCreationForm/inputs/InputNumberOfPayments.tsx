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
import {
  inputNumberOfPayments,
  inputPaymentFrequency
} from 'recoil/input/atoms';

function InputNumberOfPayments() {
  const numberOfPayments = useRecoilValue(inputNumberOfPayments);
  const { handleInputNumberOfPayments } = useHandleInputs();

  return (
    <Flex alignItems="center" gap={5}>
      <Heading as="h3" size="md">
        Number of payments:
      </Heading>
      <NumberInput
        maxW="140px"
        mr="2rem"
        defaultValue={2}
        step={1}
        min={1}
        value={numberOfPayments}
        onChange={handleInputNumberOfPayments}
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

export default InputNumberOfPayments;
