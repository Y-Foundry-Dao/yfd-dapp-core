import { Select } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { inputProposalType } from 'recoil/input/atoms';

function ProposalTypeSelector() {
  const [proposalTypeSelected, setProposalTypeSelected] =
    useRecoilState(inputProposalType);

  const handleChange = (event: any) => {
    setProposalTypeSelected(event.target.value);
  };

  return (
    <Select w="60%" value={proposalTypeSelected} onChange={handleChange}>
      <option value="vault">Vault Proposal</option>
      <option value="governanceParameter">Governance Parameter</option>
      <option value="governanceWhitelistWalletAddress">Role Whitelist</option>
      <option value="governanceWhitelistTokenAddress">Token Whitelist</option>
    </Select>
  );
}
// <option value="governanceSpend">Spend Proposal</option>
// <option value="governanceText">Text Proposal</option>

export default ProposalTypeSelector;
