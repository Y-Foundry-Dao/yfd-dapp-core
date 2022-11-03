import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading
} from '@chakra-ui/react';
import useContractEmergency from 'hooks/useContractEmergency';
import React from 'react';
import EmergencyProposalInfo from './emergencyInfo/EmergencyProposalInfo';
import EmergencyStatus from './emergencyInfo/status/EmergencyStatus';

function EmergencyListAccordionItem({ emergency }: any) {
  const { emergencyInfo, emergencyVoteBalance, votes } = useContractEmergency({
    emergency
  });
  return (
    <AccordionItem layerStyle="accordionEmergencyItem">
      <AccordionButton>
        <Box flex="1" textAlign="left">
          <Heading size="md">{emergencyInfo?.name}</Heading>
          {/* <ProposalStatus
            proposalContract={proposalContract}
            proposalIndex={proposalIndex}
          /> */}
          <EmergencyStatus emergencyInfo={emergencyInfo} />
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel layerStyle="accordionEmergencyPanel" pb="5">
        <EmergencyProposalInfo emergency={emergency} />
      </AccordionPanel>
    </AccordionItem>
  );
}

export default EmergencyListAccordionItem;
