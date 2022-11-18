import { Accordion } from '@chakra-ui/react';
import VaultProposalListAccordionItem from './VaultProposalListAccordionItem';
import styles from 'styles/app.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
  regular,
  brands,
  icon
} from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used
import { accordionAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(accordionAnatomy.keys);

const custom = definePartsStyle({
  panel: {
    border: '1px solid',
    borderColor: 'gray.200',
    background: 'gray.50',
    borderRadius: 'full',

    // Let's also provide dark mode alternatives
    _dark: {
      borderColor: 'gray.600',
      background: 'gray.800'
    }
  },
  icon: {
    border: '1px solid',
    borderColor: 'gray.200',
    background: 'gray.200',
    borderRadius: 'full',
    color: 'gray.500',

    _dark: {
      borderColor: 'gray.600',
      background: 'gray.600',
      color: 'gray.400'
    }
  }
});

export const accordionTheme = defineMultiStyleConfig({
  variants: { custom }
});

function VaultProposalListAccordions({ proposals }: any) {
  return (
    <Accordion w="100%" allowMultiple variant="custom">
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
