import { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Checkbox,
  Input,
  Stack,
  Button
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
import useContractForge from '@hooks/useContractForge';
import useChainInfo from '@hooks/useChainInfo';

const msgCreateProposalText = (
  text: string,
  isEmergency: boolean,
  justification: string
) => {
  return {
    create_proposal: {
      proposal_type: {
        text: {
          text: text
        }
      },
      emergency: isEmergency,
      justification_link: justification
    }
  };
};

export default function ProposalCreationForm({ onClose }: any) {
  const chainID = useChainInfo().currentChainID;
  const tokenContract = getChainDeploy(chainID, 'token');

  const txHash = useRecoilValue(txHashAtom);
  const connectedWallet = useConnectedWallet();
  const { executeMsg } = useMsg();
  const { toastSuccessful } = useTx();

  const [text, setText] = useState('');
  const [isEmergency, setIsEmergency] = useState(false);
  const [justification, setJustification] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const msgCreateProposal = msgCreateProposalText(
      text,
      isEmergency,
      justification
    );
    console.log('submitting prop: ', msgCreateProposal);
    const tx = executeMsg(String(tokenContract), msgCreateProposal);
    console.log(tx);
    toastSuccessful(tx, SUCCESS_CREATE_PROPOSAL);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack>
        <FormControl>
          <FormLabel htmlFor="text">Text</FormLabel>
          <Input
            id="text"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="isEmergency">Emergency</FormLabel>
          <Checkbox
            id="isEmergency"
            checked={isEmergency}
            onChange={(e) => setIsEmergency(e.target.checked)}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="justification">Justification</FormLabel>
          <Input
            id="justification"
            type="text"
            value={justification}
            onChange={(e) => setJustification(e.target.value)}
          />
        </FormControl>
        <Button mt={4} type="submit">
          Submit
        </Button>
      </Stack>
    </form>
  );
}
