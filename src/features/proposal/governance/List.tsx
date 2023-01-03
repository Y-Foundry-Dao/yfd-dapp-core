import { Heading } from '@chakra-ui/react';
import useContractForge from 'hooks/useContractForge';
import ProposalListAccordions from './info/ProposalListAccordions';

function GovernanceProposals() {
  const { governanceProposals } = useContractForge();
  return (
    <>
      {governanceProposals.length === 0 ? (
        'No Proposals'
      ) : (
        <>
          <ProposalListAccordions proposals={governanceProposals} />
        </>
      )}
    </>
  );
}

export default GovernanceProposals;
