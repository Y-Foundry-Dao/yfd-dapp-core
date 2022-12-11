import {
  Heading,
  Accordion,
  Flex,
  Box,
  useDisclosure,
  Spacer
} from '@chakra-ui/react';
import useContractForge from '@hooks/useContractForge';
import ProposalModal from '@features/proposal/proposalCreationModal/ProposalModal';
import ListItem from './Item';
import EmptyList from './Empty';
import ButtonDeposit from './ButtonDeposit';
import ButtonClaim from './ButtonClaim';

export default function List({ items }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex w="100%">
        <Box>
          <Heading size="md">Governance Parameters</Heading>
        </Box>
        <Spacer />
        <Box>
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
