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
import { inputNFTAmount } from 'recoil/input/atoms';

function InputNFTAmount() {
  const nftAmount = useRecoilValue(inputNFTAmount);
  const { handleInputNFTAmount } = useHandleInputs();

  return (
    <Flex alignItems="center" gap={5}>
      <Heading as="h3" size="md">
        NFT Amount:
      </Heading>
      <NumberInput
        maxW="140px"
        mr="2rem"
        defaultValue={100}
        step={1}
        min={1}
        value={nftAmount}
        onChange={handleInputNFTAmount}
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

export default InputNFTAmount;
