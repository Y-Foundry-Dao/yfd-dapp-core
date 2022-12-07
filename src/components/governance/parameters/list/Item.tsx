import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Spacer,
  Heading,
  Text
} from '@chakra-ui/react';
import useGovernanceParameter from 'hooks/useGovernanceParameter';

function ListItem({ itemName }: any) {
  const { governanceParameterDetails } = useGovernanceParameter(itemName);
  const paramType = Object.keys(governanceParameterDetails.parameter_type)[0];
  let paramTypeName = paramType.replace('_', ' ');
  paramTypeName = paramTypeName.toUpperCase();
  const paramDetails = Object.values(
    governanceParameterDetails.parameter_type
  )[0];
  console.log(paramDetails);

  return (
    <AccordionItem layerStyle="accordionProposalItem">
      <AccordionButton>
        <Flex w="100%">
          <Box textAlign="left" pt="2">
            <Heading size="sm">{governanceParameterDetails.name}</Heading>
            <Text p="4">{governanceParameterDetails.description}</Text>
          </Box>
          <Spacer />
          {governanceParameterDetails.active ? (
            <Box
              as="button"
              borderRadius="md"
              bg="green"
              color="white"
              px={4}
              h={8}
            >
              {paramTypeName}
            </Box>
          ) : (
            <Box
              as="button"
              borderRadius="md"
              bg="gray"
              color="white"
              px={4}
              h={8}
            >
              Disabled
            </Box>
          )}
          <Box alignContent="right">
            <AccordionIcon />
          </Box>
        </Flex>
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
