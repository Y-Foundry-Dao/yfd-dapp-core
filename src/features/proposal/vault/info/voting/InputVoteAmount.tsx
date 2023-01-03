import {
  Flex,
  Heading,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper
} from '@chakra-ui/react';
import convertFromBase from 'utilities/converters/convertFromBase';

function InputVoteAmount({
  voteTokenBalance,
  inputVoteTokenAmount,
  setInputVoteTokenAmount
}: any) {
  const handleInputVoteAmount = (value: any) => setInputVoteTokenAmount(value);
  return (
    <Flex alignItems="center" gap={5}>
      {voteTokenBalance > 0 ? (
        <>
          <Heading as="h3" size="md">
            Vote Token Amount:
          </Heading>

          <NumberInput
            maxW="200px"
            mr="2rem"
            defaultValue={0}
            min={0}
            max={convertFromBase(voteTokenBalance)}
            value={inputVoteTokenAmount}
            onChange={handleInputVoteAmount}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </>
      ) : null}
    </Flex>
  );
}

export default InputVoteAmount;
