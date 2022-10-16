import {
  Flex,
  Heading,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper
} from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { inputExpirationEmergency } from 'recoil/input/atoms';

function InputExpirationEmergency({ proposalIndex }: any) {
  const [expirationEmergency, setExpirationEmergency] = useRecoilState(
    inputExpirationEmergency(proposalIndex)
  );
  const handleInputExpirationEmergency = (value: any) => {
    setExpirationEmergency(value);
  };
  return (
    <Flex alignItems="center" gap={5}>
      <Heading as="h3" size="md">
        Expiration in Blocks:
      </Heading>
      <NumberInput
        maxW="140px"
        mr="2rem"
        defaultValue={14400}
        step={1}
        min={10}
        value={expirationEmergency}
        onChange={handleInputExpirationEmergency}
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

export default InputExpirationEmergency;
