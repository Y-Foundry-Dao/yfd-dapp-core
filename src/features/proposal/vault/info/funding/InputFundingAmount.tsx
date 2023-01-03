import {
  Flex,
  Heading,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper
} from '@chakra-ui/react';

function InputFundingAmount({
  inputFundingAmount,
  setInputFundingAmount
}: any) {
  const handleInputFundingAmount = (value: any) => setInputFundingAmount(value);
  return (
    <Flex alignItems="center" gap={5}>
      <Heading as="h3" size="md">
        YFD:
      </Heading>

      <NumberInput
        maxW="140px"
        mr="2rem"
        defaultValue={0}
        min={0}
        value={inputFundingAmount}
        onChange={handleInputFundingAmount}
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

export default InputFundingAmount;
