import {
  Flex,
  Heading,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper
} from '@chakra-ui/react';

function InputVoteAmount({
  voteTokenBalance,
  inputVoteTokenAmount,
  setInputVoteTokenAmount
}: any) {
  const handleInputVoteAmount = (value: any) => setInputVoteTokenAmount(value);
  return (
    <Flex alignItems="center" gap={5}>
      <Heading as="h3" size="md">
        Vote Token Amount:
      </Heading>

      <NumberInput
        maxW="140px"
        mr="2rem"
        defaultValue={0}
        min={0}
        max={voteTokenBalance.balance * Math.pow(10, -6)}
        value={inputVoteTokenAmount}
        onChange={handleInputVoteAmount}
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

export default InputVoteAmount;
