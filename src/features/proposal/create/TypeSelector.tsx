import { Select } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { inputProposalType } from 'recoil/input/atoms';
import styles from '@scss/app.module.scss';

function ProposalTypeSelector() {
  const [proposalTypeSelected, setProposalTypeSelected] =
    useRecoilState(inputProposalType);

  const handleChange = (event: any) => {
    setProposalTypeSelected(event.target.value);
  };

  return (
    <Select value={proposalTypeSelected} onChange={handleChange}>
      <option value="vault">Vault Proposal</option>
      <option value="governanceParameter">Governance Parameter</option>
      <option value="governanceWhitelistRole">Role Whitelist</option>
      <option value="governanceWhitelistTokenAddress">Token Whitelist</option>
      <option value="governanceText">Text Proposal</option>
    </Select>
  );
}
// <option value="governanceSpend">Spend Proposal</option>
// <option value="governanceText">Text Proposal</option>

export default ProposalTypeSelector;
