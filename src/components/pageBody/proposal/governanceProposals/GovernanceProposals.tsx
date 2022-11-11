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
          <Heading as="h2" size="lg">
            Current Governance Proposals
          </Heading>
          <ProposalListAccordions proposals={governanceProposals} />
        </>
      )}
    </>
  );
}

export default GovernanceProposals;
