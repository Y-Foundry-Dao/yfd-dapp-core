import {
  Button,
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  NumberInput,
  Heading
} from '@chakra-ui/react';
import { useConnectedWallet } from '@terra-money/wallet-provider';
import useHandleClicks from 'hooks/useHandleClicks';
import React from 'react';
import { useRecoilState } from 'recoil';
import {
  inputContactList,
  inputDevelopmentCost,
  inputGitHub,
  inputNameProposal,
  inputPaymentFrequency,
  inputPaymentSchedule,
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
  const [paymentSchedule, setPaymentScheudle] =
    useRecoilState(inputPaymentSchedule);
  const [paymentFrequency, setPaymentFrequency] = useRecoilState(
    inputPaymentFrequency
  );
  const [github, setGithub] = useRecoilState(inputGitHub);

  const handleInputNameProposal = (event: any) =>
    setNameProposal(event.target.value);

  const handleInputUrlProposal = (event: any) =>
    setUrlProposal(event.target.value);

  const handleInputTvlLimit = (event: any) => setTvlLimit(event.target.value);

  const handleInputDevelopmentCost = (event: any) =>
    setDevelopmentCost(event.target.value);

  const handleInputStatementOfWork = (event: any) =>
    setStatementOfWork(event.target.value);

  const handleInputpaymentSchedule = (event: any) =>
    setPaymentScheudle(event.target.value);

  return (
    <Flex direction="column" alignItems="center" maxW="md" mt={5}>
      <Heading size="md">Enter Proposal Information</Heading>
      <Input
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
      <Input
        value={tvlLimit}
        onChange={handleInputTvlLimit}
        placeholder="Enter TVL Limit"
      />
      <Input
        value={developmentCost}
        onChange={handleInputDevelopmentCost}
        placeholder="Enter Development Cost in $"
      />
      <InputGroup>
        <InputLeftAddon children="https://" />
        <Input
          value={statementOfWork}
          onChange={handleInputStatementOfWork}
          placeholder="Enter URL to statement of work"
        />
      </InputGroup>
      <Button
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
