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
import { inputEmergencyExpiration } from 'recoil/input/atoms';

function InputEmergencyExpiration({ proposalIndex }: any) {
  const [emergencyExpiration, setEmergencyExpiration] = useRecoilState(
    inputEmergencyExpiration(proposalIndex)
  );
  const handleInputEmergencyExpiration = (value: any) => {
    setEmergencyExpiration(value);
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
        value={emergencyExpiration}
        onChange={handleInputEmergencyExpiration}
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

export default InputEmergencyExpiration;
