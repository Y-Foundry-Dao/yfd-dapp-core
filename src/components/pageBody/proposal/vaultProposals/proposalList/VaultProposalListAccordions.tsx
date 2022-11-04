import { Accordion } from '@chakra-ui/react';
import VaultProposalListAccordionItem from './VaultProposalListAccordionItem';

function VaultProposalListAccordions({ proposals }: any) {
  return (
    <Accordion w="100%" allowMultiple>
      {proposals.map((proposal: any) => {
        return (
          <VaultProposalListAccordionItem
            key={proposal.addr}
            proposalContract={proposal.addr}
            proposalIndex={proposal.index}
          />
        );
      })}
    </Accordion>
  );
}

export default VaultProposalListAccordions;
