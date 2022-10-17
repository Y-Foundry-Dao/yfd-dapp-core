import {
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon
} from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { inputEmergencyJustification } from 'recoil/input/atoms';

function InputEmergencyJustification({ proposalIndex }: any) {
  const [emergencyJustification, setEmergencyJustification] = useRecoilState(
    inputEmergencyJustification(proposalIndex)
  );
  const handleInputEmergencyJustification = (event: any) => {
    setEmergencyJustification(event.target.value);
  };
  return (
    <Flex alignItems="center" gap={5}>
      <Heading as="h3" size="md">
        Justification for Emergency
      </Heading>
      <InputGroup>
        <InputLeftAddon children="https://" />
        <Input
          value={emergencyJustification}
          onChange={handleInputEmergencyJustification}
          placeholder="Justfication"
        />
      </InputGroup>
    </Flex>
  );
}

export default InputEmergencyJustification;
