import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Text
} from '@chakra-ui/react';
import useGovernanceParameter from 'hooks/useGovernanceParameter';

function ListItem(itemName: any) {
  const { governanceParameterDetails } = useGovernanceParameter(
    'GovernanceVoteLength'
  );

  return (
    <AccordionItem layerStyle="accordionProposalItem">
      <AccordionButton>
        <Box flex="1" textAlign="left">
          <Heading size="sm">{governanceParameterDetails.name}</Heading>
          <br />
          <Text>{governanceParameterDetails.description}</Text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel layerStyle="accordionProposalPanel" pb="5">
        <Text>
          "name": "Governance Proposal Voting Period Length", "description":
          "Amount of blocks that a governance proposal is considered active for
          voting, after which it no longer accepts votes.", "parameter_type":
          "block_height": "value": "201600", "min": "600", "max": "438000"
          "active": true
        </Text>
      </AccordionPanel>
    </AccordionItem>
  );
}

export default ListItem;
