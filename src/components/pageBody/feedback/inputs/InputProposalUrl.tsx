import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/react';
import useHandleInputs from 'hooks/useHandleInputs';
import { useRecoilValue } from 'recoil';
import { inputUrlProposal } from 'recoil/input/atoms';

function InputProposalUrl() {
  const urlProposal = useRecoilValue(inputUrlProposal);
  const { handleInputUrlProposal } = useHandleInputs();
  return (
    <InputGroup>
      <InputLeftAddon children="https://" />
      <Input
        value={urlProposal}
        onChange={handleInputUrlProposal}
        placeholder="Enter Proposal Url"
      />
    </InputGroup>
  );
}

export default InputProposalUrl;
