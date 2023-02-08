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
  VStack,
  Switch,
  FormLabel
} from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';
import txHashAtom from 'recoil/txHash/atom';
import ProposalSubmittedText from '../create/SubmittedText';
import { useConnectedWallet } from '@terra-money/wallet-provider';
import msgEncodedProposal from '@utilities/messagesToEncode/msgEncodedProposal';
import msgExecuteSend from '@utilities/messagesExecute/yfd/msgExecuteSend';
import useTx from '@hooks/useTx';
import { SUCCESS_CREATE_PROPOSAL } from '@utilities/variables/toastMessages';
import useMsg from '@hooks/useMsg';
import { useState } from 'react';
import {
  currentContractForgeAtom,
  currentContractGovTokenAtom
} from '@recoil/chainInfo/atoms';
import msgCreateProposalText from '@utilities/messagesExecute/forge/msgCreateProposalText';

function FormTextProposalCreation({ onClose }: any) {
  const contractForge = useRecoilValue(currentContractForgeAtom);
  const [text, setText] = useState('');
  const [isEmergency, setIsEmergency] = useState(false);
  const [justification, setJustification] = useState('');

  const txHash = useRecoilValue(txHashAtom);

  const connectedWallet = useConnectedWallet();
  const { executeMsg } = useMsg();
  const { toastSuccessful } = useTx();

  const handleClickCreateTextProposal = async () => {
    if (connectedWallet) {
      const msgCreateProposal = msgCreateProposalText(
        text,
        isEmergency,
        justification
      );
      const tx = await executeMsg(contractForge, msgCreateProposal);
      console.log(tx);
      toastSuccessful(tx, SUCCESS_CREATE_PROPOSAL);
    }
  };

  const onSubmit = () => {
    handleClickCreateTextProposal();
  };

  const toggleEmergency = () => {
    setIsEmergency((prevIsEmergency) => !prevIsEmergency);
  };

  return (
    <StepForm w="95%" onSubmit={onSubmit}>
      <FormLayout>
        <FormStepper orientation="vertical">
          <FormStep name="proposal" title="Text Proposal Details">
            <FormLayout>
              <Input
                value={text}
                onChange={(event: any) => setText(event.target.value)}
                placeholder="Enter Proposal Text"
              />
              Emergency Proposal
              <Switch
                id="emergencyTextSwitch"
                size="lg"
                onChange={toggleEmergency}
              />
              <InputGroup>
                <InputLeftAddon children="https://" />
                <Input
                  value={justification}
                  onChange={(event: any) =>
                    setJustification(event.target.value)
                  }
                  placeholder="Enter Justification URL"
                />
              </InputGroup>
              <ButtonGroup>
                <NextButton />
                <PrevButton variant="ghost" />
              </ButtonGroup>
            </FormLayout>
          </FormStep>
          <FormStep name="confirm" title="Confirm">
            <FormLayout>
              <Text>Please confirm the information below is correct.</Text>
              <PropertyList>
                <Text mt="5" size="sm">
                  Text Proposal Info
                </Text>
                <Divider />
                <Property label="Text" value={text} />
                <Property label="Emergency Proposal?" value={isEmergency} />
                <Property label="Justification URL" value={justification} />
              </PropertyList>
              <ButtonGroup>
                <NextButton />
                <PrevButton />
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

export default FormTextProposalCreation;
