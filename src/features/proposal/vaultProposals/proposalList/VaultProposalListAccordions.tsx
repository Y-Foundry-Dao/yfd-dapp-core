import { Accordion } from '@chakra-ui/react';
import VaultProposalListAccordionItem from './VaultProposalListAccordionItem';
import styles from '@scss/app.module.scss';

function VaultProposalListAccordions({ proposals }: any) {
  return (
    <Accordion
      w="100%"
      allowMultiple
      className={styles['proposal-list-wrapper-header']}
      layerStyle="accordionWrapper"
    >
      {proposals.map((proposal: any) => {
        return (
          <VaultProposalListAccordionItem
            key={proposal.addr}
            proposalContract={proposal.addr}
            proposalIndex={proposal.index}
            className={styles['proposal-list-item']}
          />
        );
      })}
    </Accordion>
  );
}

export default VaultProposalListAccordions;
