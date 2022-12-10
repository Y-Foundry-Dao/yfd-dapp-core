import { Heading, RadioGroup, Flex, Stack, Radio } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { inputPaymentSchedule } from 'recoil/input/atoms';

function InputPaymentSchedule() {
  const [paymentSchedule, setPaymentSchedule] =
    useRecoilState(inputPaymentSchedule);
  return (
    <RadioGroup
      as={Flex}
      my={5}
      direction="column"
      alignItems="center"
      onChange={setPaymentSchedule}
      value={paymentSchedule}
    >
      <Heading as="h3" size="md">
        Select Payment Schedule
      </Heading>
      <Stack direction="row">
        <Radio value="0">All at Beginning</Radio>
        <Radio value="1">All at Completion</Radio>
        <Radio value="2">Half at Frequency, Half at Completion</Radio>
        <Radio value="3">Thirds</Radio>
      </Stack>
    </RadioGroup>
  );
}

export default InputPaymentSchedule;
