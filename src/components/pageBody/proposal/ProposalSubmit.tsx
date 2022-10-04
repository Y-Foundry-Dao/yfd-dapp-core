import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  Heading,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  RadioGroup,
  Stack,
  Radio,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb
} from '@chakra-ui/react';
import useHandleClicks from 'hooks/useHandleClicks';
import { useRecoilState } from 'recoil';
import {
  inputDevelopmentCost,
  inputExpiration,
  inputGitHub,
  inputNameMsg,
  inputNameProposal,
  inputPaymentFrequency,
  inputPaymentSchedule,
  inputQuorumPercent,
  inputSelfVoucedInformation,
  inputStatementOfWork,
  inputTvlLimit,
  inputUrlProposal
} from 'recoil/input/atoms';

function ProposalSubmit() {
  const { handleClickProposal } = useHandleClicks();
  const [nameProposal, setNameProposal] = useRecoilState(inputNameProposal);
  const [nameMsg, setNameMsg] = useRecoilState(inputNameMsg);
  const [urlProposal, setUrlProposal] = useRecoilState(inputUrlProposal);
  const [tvlLimit, setTvlLimit] = useRecoilState(inputTvlLimit);
  const [developmentCost, setDevelopmentCost] =
    useRecoilState(inputDevelopmentCost);
  const [statementOfWork, setStatementOfWork] =
    useRecoilState(inputStatementOfWork);
  const [paymentSchedule, setPaymentSchedule] =
    useRecoilState(inputPaymentSchedule);
  const [github, setGithub] = useRecoilState(inputGitHub);
  const [quorumPercent, setQuorumPercent] = useRecoilState(inputQuorumPercent);
  const [selfVouchedInformation, setSelfVouchedInformation] = useRecoilState(
    inputSelfVoucedInformation
  );
  const [expiration, setExpiration] = useRecoilState(inputExpiration);
  const [paymentFrequency, setPaymentFrequency] = useRecoilState(
    inputPaymentFrequency
  );

  const handleInputNameProposal = (event: any) =>
    setNameProposal(event.target.value);

  const handleInputUrlProposal = (event: any) =>
    setUrlProposal(event.target.value);

  const handleInputTvlLimit = (value: any) => setTvlLimit(value);

  const handleInputDevelopmentCost = (value: any) => setDevelopmentCost(value);

  const handleInputStatementOfWork = (event: any) =>
    setStatementOfWork(event.target.value);

  const handleInputPaymentFrequency = (value: any) =>
    setPaymentFrequency(value);

  const handleInputGithub = (event: any) => setGithub(event.target.value);

  const handleInputQuorumPercent = (value: any) => setQuorumPercent(value);

  const handleInputSelfVouchedInformation = (event: any) =>
    setSelfVouchedInformation(event.target.value);

  const handleInputExpiration = (value: any) => {
    setExpiration(value);
  };

  return (
    <Flex direction="column" alignItems="center" minWidth="50%" mt={5}>
      <Heading as="h2" size="lg">
        Submit a Proposal
      </Heading>
      <Input
        mt={5}
        value={nameProposal}
        onChange={handleInputNameProposal}
        placeholder="Enter Proposal Name"
      />

      <InputGroup>
        <InputLeftAddon children="https://" />
        <Input
          value={urlProposal}
          onChange={handleInputUrlProposal}
          placeholder="Enter Proposal Url"
        />
      </InputGroup>
      <InputGroup>
        <InputLeftAddon children="https://" />
        <Input
          value={statementOfWork}
          onChange={handleInputStatementOfWork}
          placeholder="Enter URL to statement of work"
        />
      </InputGroup>
      <InputGroup>
        <InputLeftAddon children="https://" />
        <Input
          value={github}
          onChange={handleInputGithub}
          placeholder="Enter URL to Github"
        />
      </InputGroup>
      <InputGroup>
        <InputLeftAddon children="https://" />
        <Input
          value={selfVouchedInformation}
          onChange={handleInputSelfVouchedInformation}
          placeholder="Enter URL to Self Vouched Information"
        />
      </InputGroup>
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

      <Flex alignItems="center" gap={5}>
        <Heading as="h3" size="md">
          Development Cost:
        </Heading>
        <NumberInput
          maxW="140px"
          mr="2rem"
          defaultValue={5000}
          step={50}
          min={5000}
          max={1000000}
          value={developmentCost}
          onChange={handleInputDevelopmentCost}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </Flex>

      <Flex alignItems="center" gap={5}>
        <Heading as="h3" size="md">
          Expiration in Blocks:
        </Heading>
        <NumberInput
          maxW="140px"
          mr="2rem"
          defaultValue={43200}
          step={1}
          min={43200}
          value={expiration}
          onChange={handleInputExpiration}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </Flex>

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

      <Flex alignItems="center" gap={5}>
        <Heading as="h3" size="md">
          Payment Frequency in Blocks:
        </Heading>
        <NumberInput
          maxW="140px"
          mr="2rem"
          defaultValue={1000}
          step={1}
          min={1000}
          value={paymentFrequency}
          onChange={handleInputPaymentFrequency}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </Flex>

      <Flex width="100%" alignItems="center" gap={5}>
        <Heading as="h3" size="md">
          Quorum Percentage:
        </Heading>
        <NumberInput
          maxW="140px"
          mr="2rem"
          my={5}
          defaultValue={25}
          step={1}
          min={5}
          max={95}
          value={quorumPercent}
          onChange={handleInputQuorumPercent}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Slider
          flex="1"
          focusThumbOnChange={false}
          defaultValue={25}
          step={1}
          min={5}
          max={95}
          value={quorumPercent}
          onChange={handleInputQuorumPercent}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb fontSize="sm" boxSize="12px" children={quorumPercent} />
        </Slider>
      </Flex>

      <Button
        my={5}
        onClick={() => {
          handleClickProposal();
        }}
      >
        ProposalSubmit
      </Button>
    </Flex>
  );
}

export default ProposalSubmit;
