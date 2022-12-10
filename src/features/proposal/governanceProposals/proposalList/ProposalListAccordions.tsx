import { Accordion } from '@chakra-ui/react';
import ProposalListAccordionItem from './ProposalListAccordionItem';

function ProposalListAccordions({ proposals }: any) {
  return (
    <Accordion w="100%" allowMultiple>
      {proposals.map((proposal: any) => {
        return (
          <ProposalListAccordionItem
            key={proposal.addr}
            proposalContract={proposal.addr}
            proposalIndex={proposal.index}
          />
        );
      })}
    </Accordion>
  );
}

export default ProposalListAccordions;
