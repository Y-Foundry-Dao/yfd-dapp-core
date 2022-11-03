import { Accordion, Box } from '@chakra-ui/react';
import React from 'react';
import EmergencyProposal from './emergencyInfo/EmergencyProposalInfo';
import EmergencyListAccordionItem from './EmergencyListAccordionItem';

function EmergencyListAccordions({ emergencies }: any) {
  return (
    <Accordion w="100%" allowMultiple>
      {emergencies.map((emergency: any) => {
        return (
          <EmergencyListAccordionItem
            key={emergency.addr}
            emergency={emergency}
          />
        );
      })}
    </Accordion>
  );
}

export default EmergencyListAccordions;
