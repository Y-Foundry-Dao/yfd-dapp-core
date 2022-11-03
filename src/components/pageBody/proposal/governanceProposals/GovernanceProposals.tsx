import { Heading } from '@chakra-ui/react';
import useContractForge from 'hooks/useContractForge';
import ProposalListAccordions from './proposalList/ProposalListAccordions';

function GovernanceProposals() {
  const { proposals } = useContractForge();
  return (
    <>
      {proposals.length === 0 ? (
        'no proposals'
      ) : (
        <>
          <Heading as="h2" size="lg">
            Current Governance Proposals
          </Heading>
          <ProposalListAccordions proposals={proposals} />
        </>
      )}
    </>
  );
}

export default GovernanceProposals;
