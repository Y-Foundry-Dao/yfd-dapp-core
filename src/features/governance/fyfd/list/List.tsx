import {
  Heading,
  Accordion,
  Flex,
  Box,
  useDisclosure,
  Spacer
} from '@chakra-ui/react';
import ListItem from './Item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProposalModal from '@features/proposal/proposalCreationModal/ProposalModal';
import CreateGov from './ButtonCreate';

function List({ items }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex w="100%">
        <Box>
          <Heading size="md">Your fYFD Deposit History</Heading>
        </Box>
        <Spacer />
        <Box>
          <CreateGov onOpen={onOpen} />
          <ProposalModal isOpen={isOpen} onClose={onClose} />
        </Box>
      </Flex>
      <Accordion w="100%">
        {items.map((item: string) => {
          return <ListItem itemName={item}>{item}</ListItem>;
        })}
      </Accordion>
    </>
  );
}

export default List;
