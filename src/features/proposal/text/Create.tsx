import {
  ButtonGroup,
  FormLayout,
  FormStep,
  FormStepper,
  Loader,
  NextButton,
  PrevButton,
  Property,
  PropertyList,
  StepForm,
  StepperCompleted
} from '@saas-ui/react';
import {
  Divider,
  Text,
  Input,
  InputGroup,
  InputLeftAddon,
  Flex,
  Heading,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  VStack
} from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';
import txHashAtom from 'recoil/txHash/atom';
import ProposalSubmittedText from '../create/SubmittedText';
import { useConnectedWallet } from '@terra-money/wallet-provider';
import msgEncodedProposal from '@utilities/messagesToEncode/msgEncodedProposal';
import msgExecuteSend from '@utilities/messagesExecute/yfd/msgExecuteSend';
import useTx from '@hooks/useTx';
import { SUCCESS_CREATE_PROPOSAL } from '@utilities/variables/toastMessages';
import convertToBase from '@utilities/converters/convertToBase';
import { FORGE_TEST, YFD_TEST } from '@utilities/variables';
import Base64 from '@utilities/base64';
import useMsg from '@hooks/useMsg';
import { useState } from 'react';
import useContractForge from '@hooks/useContractForge';

function ProposalCreationForm({ onClose }: any) {
  const [name, setName] = useState('');
  const [ticker, setTicker] = useState('');
  const [proposalUrl, setProposalUrl] = useState('');
  const [tvlLimit, setTvlLimit] = useState(1000000);
  const [contact, setContact] = useState(['nobody@example.com']);
  const [developer, setDeveloper] = useState('');
  const [developmentCost, setDevelopmentCost] = useState(0.067);
  const [fundingOnly, setFundingOnly] = useState(false);
  const [fundingDenomination, setFundingDenomination] = useState(YFD_TEST);
  const [nftQuantity, setNftQuantity] = useState(100);
  const [statementOfWork, setStatementOfWork] = useState('');
  const [numberOfPayments, setNumberOfPayments] = useState(2);
  const [paymentFrequency, setPaymentFrequency] = useState(1000);
  const [github, setGithub] = useState('');
  const [selfVouchedInformation, setSelfVouchedInformation] = useState('');
  const [initialFunding, setInitialFunding] = useState(0.005);

  const txHash = useRecoilValue(txHashAtom);

  const connectedWallet = useConnectedWallet();
  const { executeMsg } = useMsg();
  const { toastSuccessful } = useTx();
  const { requiredInitialFunding } = useContractForge(
    developmentCost,
    nftQuantity
  );

  const handleClickCreateVaultProposal = async () => {
    if (connectedWallet) {
      const msgToEncode = msgEncodedProposal(
        name,
        ticker,
        proposalUrl,
        tvlLimit,
        contact,
        developer,
        convertToBase(developmentCost),
        fundingOnly,
        fundingDenomination,
        nftQuantity,
        statementOfWork,
        numberOfPayments,
        paymentFrequency,
        github,
        selfVouchedInformation
      );
      const encodedMessage = Base64.btoa(msgToEncode);
      const msgCreateProposal = msgExecuteSend(
        FORGE_TEST,
        encodedMessage,
        convertToBase(initialFunding)
      );
      const tx = await executeMsg(YFD_TEST, msgCreateProposal);
      console.log(tx);
      toastSuccessful(tx, SUCCESS_CREATE_PROPOSAL);
    }
  };

  const onSubmit = () => {
    handleClickCreateVaultProposal();
  };

  return (
    <StepForm w="95%" onSubmit={onSubmit}>
      <FormLayout>
        <FormStepper orientation="vertical">
          <FormStep name="proposal" title="Proposal Details">
            <FormLayout>
              <Input
                value={name}
                onChange={(event: any) => setName(event.target.value)}
                placeholder="Enter Proposal Name"
              />
              <Input
                value={ticker}
                onChange={(event: any) => setTicker(event.target.value)}
                placeholder="Enter Ticker"
              />
              <InputGroup>
                <InputLeftAddon children="https://" />
                <Input
                  value={proposalUrl}
                  onChange={(event: any) => setProposalUrl(event.target.value)}
                  placeholder="Enter Proposal URL"
                />
              </InputGroup>
              <InputGroup>
                <InputLeftAddon children="https://" />
                <Input
                  value={statementOfWork}
                  onChange={(event: any) =>
                    setStatementOfWork(event.target.value)
                  }
                  placeholder="Enter URL to statement of work"
                />
              </InputGroup>
              <NextButton />
            </FormLayout>
          </FormStep>
          <FormStep name="proposer" title="Proposer Info">
            <FormLayout>
              <InputGroup>
                <InputLeftAddon children="https://" />
                <Input
                  value={github}
                  onChange={(event: any) => setGithub(event.target.value)}
                  placeholder="Enter URL to Github"
                />
              </InputGroup>
              <InputGroup>
                <InputLeftAddon children="https://" />
                <Input
                  value={selfVouchedInformation}
                  onChange={(event: any) =>
                    setSelfVouchedInformation(event.target.value)
                  }
                  placeholder="Enter URL to Self Vouched Information"
                />
              </InputGroup>
              <ButtonGroup>
                <NextButton />
                <PrevButton variant="ghost" />
              </ButtonGroup>
            </FormLayout>
          </FormStep>
          <FormStep name="funding" title="Funding Info">
            <FormLayout>
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
                  onChange={(value: any) => setTvlLimit(value)}
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
                  Development Cost in YFD:
                </Heading>
                <NumberInput
                  maxW="140px"
                  mr="2rem"
                  defaultValue={0.067}
                  step={0.001}
                  min={0.067}
                  max={1}
                  value={developmentCost}
                  onChange={(value: any) => setDevelopmentCost(value)}
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
                  NFT Amount:
                </Heading>
                <NumberInput
                  maxW="140px"
                  mr="2rem"
                  defaultValue={100}
                  step={1}
                  min={1}
                  value={nftQuantity}
                  onChange={(value: any) => setNftQuantity(value)}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </Flex>
              <Flex alignItems="center" gap={5}>
                <VStack align="left">
                  <Heading as="h3" size="md">
                    Initial Funding in YFD:
                  </Heading>
                  <Text as="sub">
                    minimum required: {requiredInitialFunding.toFixed(6)}
                  </Text>
                </VStack>
                <NumberInput
                  maxW="140px"
                  mr="2rem"
                  defaultValue={0.005}
                  step={0.001}
                  min={requiredInitialFunding}
                  max={developmentCost}
                  value={initialFunding}
                  onChange={(value: any) => setInitialFunding(value)}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </Flex>
              <ButtonGroup>
                <NextButton />
                <PrevButton variant="ghost" />
              </ButtonGroup>
            </FormLayout>
          </FormStep>
          <FormStep name="finalizing" title="Finalizing Parameters">
            <FormLayout>
              <Input
                mt={5}
                value={developer}
                onChange={(event: any) => setDeveloper(event.target.value)}
                placeholder="Enter Developer Wallet Address"
              />
              <Flex alignItems="center" gap={5}>
                <Heading as="h3" size="md">
                  Number of payments:
                </Heading>
                <NumberInput
                  maxW="140px"
                  mr="2rem"
                  defaultValue={2}
                  step={1}
                  min={1}
                  value={numberOfPayments}
                  onChange={(value: any) => setNumberOfPayments(value)}
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
                  Payment Frequency in Blocks:
                </Heading>
                <NumberInput
                  maxW="140px"
                  mr="2rem"
                  defaultValue={1000}
                  step={1}
                  min={10}
                  value={paymentFrequency}
                  onChange={(value: any) => setPaymentFrequency(value)}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </Flex>
              <ButtonGroup>
                <NextButton />
                <PrevButton variant="ghost" />
              </ButtonGroup>
            </FormLayout>
          </FormStep>
          <FormStep name="confirm" title="Confirm">
            <FormLayout>
              <Text>Please confirm that your information is correct.</Text>
              <PropertyList>
                <Text mt="5" size="sm">
                  Proposal Info
                </Text>
                <Divider />
                <Property label="Name" value={name} />
                <Property label="Ticker" value={ticker} />
                <Property label="Proposal URL" value={proposalUrl} />
                <Property
                  label="Statement of Work URL"
                  value={statementOfWork}
                />
                <Text mt="5" size="sm">
                  Proposer Info
                </Text>
                <Divider />
                <Property label="Github URL" value={github} />
                <Property
                  label="Self Vouched Info"
                  value={selfVouchedInformation}
                />
                <Text mt="5" size="sm">
                  Funding Info
                </Text>
                <Divider />
                <Property label="Maximum TVL" value={tvlLimit} />
                <Property label="Development Cost" value={developmentCost} />
                <Property label="Initial Funding" value={initialFunding} />
                <Text mt="5" size="sm">
                  Finalize Parameters
                </Text>
                <Divider />
                <Property label="Developer" value={developer} />
                <Property label="Payment Schedule" value={numberOfPayments} />
                <Property label="Payment Frequency" value={paymentFrequency} />
                <Property label="NFT Amount" value={nftQuantity} />
                <Divider />
              </PropertyList>
              <ButtonGroup>
                <NextButton />
                <PrevButton variant="ghost" />
              </ButtonGroup>
            </FormLayout>
          </FormStep>

          <StepperCompleted>
            {txHash !== '' ? (
              <ProposalSubmittedText onClose={onClose} />
            ) : (
              <Loader>Submitting proposal, just a moment...</Loader>
            )}
          </StepperCompleted>
        </FormStepper>
      </FormLayout>
    </StepForm>
  );
}

export default ProposalCreationForm;
