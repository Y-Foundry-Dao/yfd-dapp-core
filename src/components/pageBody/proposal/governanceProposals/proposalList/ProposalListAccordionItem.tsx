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
import useContractGovernanceProposal from 'hooks/useContractGovernanceProposal';
import ProposalInfo from './proposalInfo/ProposalInfo';
import ProposalStatus from './proposalInfo/status/ProposalStatus';

function ProposalListAccordionItem({ proposalContract, proposalIndex }: any) {
  const { governanceProposalInfo } = useContractGovernanceProposal({
    proposalContract,
    proposalIndex
  });
  return (
    <AccordionItem layerStyle="accordionProposalItem">
      <AccordionButton>
        <Box flex="1" textAlign="left">
          <Heading size="md">{governanceProposalInfo.name}</Heading>
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
