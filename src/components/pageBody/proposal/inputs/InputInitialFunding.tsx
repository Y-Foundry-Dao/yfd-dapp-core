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
import { inputDevelopmentCost, inputInitialFunding } from 'recoil/input/atoms';

function InputInitialFunding() {
  const developmentCost = useRecoilValue(inputDevelopmentCost);
  const initialFunding = useRecoilValue(inputInitialFunding);
  const { handleInputInitialFunding } = useHandleInputs();
  return (
    <Flex alignItems="center" gap={5}>
      <Heading as="h3" size="md">
        Initial Funding in YFD:
      </Heading>
      <NumberInput
        maxW="140px"
        mr="2rem"
        defaultValue={0}
        step={1}
        min={0}
        max={developmentCost}
        value={initialFunding}
        onChange={handleInputInitialFunding}
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

export default InputInitialFunding;
