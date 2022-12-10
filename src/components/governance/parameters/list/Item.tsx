import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Stack,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Input,
  Box,
  Flex,
  Spacer,
  Heading,
  Text
} from '@chakra-ui/react';
import useGovernanceParameter from 'hooks/useGovernanceParameter';
import ItemDetail from './ItemDetail';
import chakra from '@scss/chakra.module.scss';

function ListItem({ itemName }: any) {
  const { governanceParameterDetails } = useGovernanceParameter(itemName);

  if (Object.keys(governanceParameterDetails).length > 0) {
    const paramType = Object.keys(governanceParameterDetails.parameter_type)[0];
    let paramTypeName = paramType.replace('_', ' ');
    paramTypeName = paramTypeName.toUpperCase();
    const itemData: any = Object.values(
      governanceParameterDetails.parameter_type
    )[0];
    return (
      <AccordionItem layerStyle="accordionProposalItem">
        <AccordionButton>
          <Flex w="100%">
            <Box textAlign="left" pt="2" w="75%">
              <Text>{governanceParameterDetails.name}</Text>
            </Box>
            <Spacer />
            <Box w="25%">
              {paramTypeName}
              <br />
              <InputGroup>
                <InputLeftAddon
                  className={chakra.inputAddon}
                  children={itemData.min}
                />
                {governanceParameterDetails.active ? (
                  <Input
                    className={chakra.inputGovActive}
                    w="100px"
                    placeholder={itemData.value}
                    _placeholder={{
                      opacity: 1,
                      fontWeight: 500,
                      color: '#eee'
                    }}
                  />
                ) : (
                  <Input
                    disabled
                    className={chakra.inputGovDisable}
                    placeholder={itemData.value}
                  />
                )}
                <InputRightAddon
                  className={chakra.inputAddon}
                  bgColor="gray"
                  children={itemData.max}
                />
              </InputGroup>
            </Box>
            <Spacer />
            <Box alignContent="right">
              <AccordionIcon />
            </Box>
          </Flex>
        </AccordionButton>
        <AccordionPanel layerStyle="accordionProposalPanel" pb="5">
          <Flex>
            <Box w="70%" className={chakra.description}>
              <Text px="2">{governanceParameterDetails.description}</Text>
            </Box>
            <Spacer />
            <Box w="30%">
              <ItemDetail />
            </Box>
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    );
  }
  return <Text>Loading...</Text>;
}

export default ListItem;
