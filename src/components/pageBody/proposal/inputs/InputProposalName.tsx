import { Input } from '@chakra-ui/react';
import useHandleInputs from 'hooks/useHandleInputs';
import { useRecoilValue } from 'recoil';
import { inputNameProposal } from 'recoil/input/atoms';

function InputProposalName() {
  const nameProposal = useRecoilValue(inputNameProposal);
  const { handleInputNameProposal } = useHandleInputs();
  return (
    <Input
      mt={5}
      value={nameProposal}
      onChange={handleInputNameProposal}
      placeholder="Enter Proposal Name"
    />
  );
}

export default InputProposalName;
