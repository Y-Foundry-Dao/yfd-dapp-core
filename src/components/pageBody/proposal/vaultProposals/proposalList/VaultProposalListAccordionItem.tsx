import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Text
} from '@chakra-ui/react';
import FinderContractLink from 'components/basic/finder/FinderContractLink';
import useContractProposal from 'hooks/useContractProposal';
import React from 'react';
import ProposalStatus from '../../governanceProposals/proposalList/proposalInfo/status/ProposalStatus';
import VaultProposalInfo from '../proposalInfo/VaultProposalInfo';

function VaultProposalListAccordionItem({
  proposalContract,
  proposalIndex
}: any) {
  const { vaultProposalInfo } = useContractProposal({
    proposalContract,
    proposalIndex
  });
  return (
    <AccordionItem layerStyle="accordionProposalItem">
      <AccordionButton>
        <Box flex="1" textAlign="left">
          <Heading size="md">{vaultProposalInfo.name}</Heading>
          <Text>
            <FinderContractLink contract={proposalContract} />
          </Text>
          <ProposalStatus
            proposalContract={proposalContract}
            proposalIndex={proposalIndex}
          />
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel layerStyle="accordionProposalPanel" pb="5">
        <VaultProposalInfo
          proposalContract={proposalContract}
          proposalIndex={proposalIndex}
        />
      </AccordionPanel>
    </AccordionItem>
  );
}

export default VaultProposalListAccordionItem;
