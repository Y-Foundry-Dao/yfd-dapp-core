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
import { inputTvlLimit } from 'recoil/input/atoms';

function InputTvlLimit() {
  const tvlLimit = useRecoilValue(inputTvlLimit);
  const { handleInputTvlLimit } = useHandleInputs();
  return (
    <Flex alignItems="center" gap={5} mt={5}>
      <Heading as="h3" size="md">
        Maximum Vault TVL:
      </Heading>
      <NumberInput
        maxW="140px"
        mr="2rem"
        defaultValue={1000000}
        step={1000}
        min={1000000}
        value={tvlLimit}
        onChange={handleInputTvlLimit}
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

export default InputTvlLimit;
