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
import useContractForge from 'hooks/useContractForge';
import useHandleInputs from 'hooks/useHandleInputs';
import { useRecoilValue } from 'recoil';
import {
  inputDevelopmentCost,
  inputInitialFunding,
  inputNFTAmount
} from 'recoil/input/atoms';
import queryVaultFundingMath from 'utilities/messagesQuery/forge/queryVaultFundingMath';

function InputInitialFunding() {
  const developmentCost = useRecoilValue(inputDevelopmentCost);
  const initialFunding = useRecoilValue(inputInitialFunding);
  const { requiredInitialFunding } = useContractForge();
  const { handleInputInitialFunding } = useHandleInputs();
  return (
    <Flex alignItems="center" gap={5}>
      <VStack align="left">
        <Heading as="h3" size="md">
          Initial Funding in YFD:
        </Heading>
        <Text as="sub">
          minimum required: {requiredInitialFunding.toFixed(6)}
        </Text>
      </VStack>
      <NumberInput
        maxW="140px"
        mr="2rem"
        defaultValue={0.005}
        step={0.001}
        min={requiredInitialFunding}
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
