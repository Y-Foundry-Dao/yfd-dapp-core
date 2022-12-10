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
import { inputPaymentFrequency } from 'recoil/input/atoms';

function InputPaymentFrequency() {
  const paymentFrequency = useRecoilValue(inputPaymentFrequency);
  const { handleInputPaymentFrequency } = useHandleInputs();

  return (
    <Flex alignItems="center" gap={5}>
      <Heading as="h3" size="md">
        Payment Frequency in Blocks:
      </Heading>
      <NumberInput
        maxW="140px"
        mr="2rem"
        defaultValue={1000}
        step={1}
        min={10}
        value={paymentFrequency}
        onChange={handleInputPaymentFrequency}
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

export default InputPaymentFrequency;
