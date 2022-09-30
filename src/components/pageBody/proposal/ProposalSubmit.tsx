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
  inputGitHub,
  inputNameProposal,
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

  const handleInputNameProposal = (event: any) =>
    setNameProposal(event.target.value);

  const handleInputUrlProposal = (event: any) =>
    setUrlProposal(event.target.value);

  const handleInputTvlLimit = (value: any) => setTvlLimit(value);

  const handleInputDevelopmentCost = (value: any) => setDevelopmentCost(value);

  const handleInputStatementOfWork = (event: any) =>
    setStatementOfWork(event.target.value);

  const handleInputPaymentSchedule = (value: any) => setPaymentSchedule(value);

  const handleInputGithub = (event: any) => setGithub(event.target.value);

  const handleInputQuorumPercent = (value: any) => setQuorumPercent(value);

  const handleInputSelfVouchedInformation = (event: any) =>
    setSelfVouchedInformation(event.target.value);

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

      {/* <Slider
          flex="1"
          focusThumbOnChange={false}
          defaultValue={1000000}
          step={1000}
          min={1000000}
          max={999999999}
          value={tvlLimit}
          onChange={handleInputTvlLimit}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb fontSize="sm" boxSize="12px" children={tvlLimit} />
        </Slider> */}

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
        {/* <Slider
          flex="1"
          focusThumbOnChange={false}
          defaultValue={5000}
          step={50}
          min={5000}
          max={1000000}
          value={developmentCost}
          onChange={handleInputDevelopmentCost}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb
            fontSize="sm"
            boxSize="12px"
            children={developmentCost}
          />
        </Slider> */}
      </Flex>

      <RadioGroup
        as={Flex}
        mt={5}
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

      <Flex width="100%" alignItems="center" gap={5}>
        <Heading as="h3" size="md">
          Quorum Percentage:
        </Heading>
        <NumberInput
          maxW="140px"
          mr="2rem"
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
