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
import ProposalInfo from './proposalInfo/ProposalInfo';
import ProposalStatus from './proposalInfo/status/ProposalStatus';

function ProposalListAccordionItem({ proposalContract, proposalIndex }: any) {
  const { proposalInfo, voteContract } = useContractProposal({
    proposalContract,
    proposalIndex
  });
  return (
    <AccordionItem layerStyle="accordionProposalItem">
      <>{console.log(proposalInfo)}</>
      <AccordionButton>
        <Box flex="1" textAlign="left">
          <Heading size="md">{proposalInfo.name}</Heading>
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
        <ProposalInfo
          proposalContract={proposalContract}
          proposalIndex={proposalIndex}
        />
      </AccordionPanel>
    </AccordionItem>
  );
}

export default ProposalListAccordionItem;
