import {
  Flex,
  Heading,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
  VStack
} from '@chakra-ui/react';
import useHandleInputs from 'hooks/useHandleInputs';
import { useRecoilValue } from 'recoil';
import { inputDevelopmentCost } from 'recoil/input/atoms';

function InputDevelopmentCost() {
  const developmentCost = useRecoilValue(inputDevelopmentCost);
  const { handleInputDevelopmentCost } = useHandleInputs();
  return (
    <Flex alignItems="center" gap={5}>
      <Heading as="h3" size="md">
        Development Cost in YFD:
      </Heading>
      <NumberInput
        maxW="140px"
        mr="2rem"
        defaultValue={1}
        step={0.1}
        min={0}
        max={1}
        value={developmentCost}
        onChange={handleInputDevelopmentCost}
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

export default InputDevelopmentCost;
