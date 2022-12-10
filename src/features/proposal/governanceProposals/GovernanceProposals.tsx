import { Heading } from '@chakra-ui/react';
import useContractForge from 'hooks/useContractForge';
import ProposalListAccordions from './proposalList/ProposalListAccordions';

function GovernanceProposals() {
  const { governanceProposals } = useContractForge();
  return (
    <>
      {governanceProposals.length === 0 ? (
        'no proposals'
      ) : (
        <>
          <ProposalListAccordions proposals={governanceProposals} />
        </>
      )}
    </>
  );
}

export default GovernanceProposals;
