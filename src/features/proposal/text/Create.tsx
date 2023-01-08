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
import getChainDeploy from '@utilities/getValues';
import Base64 from '@utilities/base64';
import useMsg from '@hooks/useMsg';
import { useState } from 'react';
import useContractForge from '@hooks/useContractForge';
import useChainInfo from '@hooks/useChainInfo';

function ProposalCreationForm({ onClose }: any) {
  //token contract
  const chainID = useChainInfo().currentChainID;
  const tokenContract = getChainDeploy(chainID, 'token');
  console.log('token: ', tokenContract);

  const [text, setText] = useState('');

  const [emergency] = useState(false);

  const txHash = useRecoilValue(txHashAtom);

  const connectedWallet = useConnectedWallet();
  const { executeMsg } = useMsg();
  const { toastSuccessful } = useTx();

  return (
    <div>
      Welcome Home to {chainID}
      <br />
      Where we proudly use token:
      <br />
      {tokenContract}
    </div>
  );
}

export default ProposalCreationForm;
