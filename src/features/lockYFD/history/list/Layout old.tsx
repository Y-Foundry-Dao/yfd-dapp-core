import {
  Heading,
  Accordion,
  Flex,
  Box,
  useDisclosure,
  Spacer
} from '@chakra-ui/react';
import useContractForge from '@hooks/useContractForge';
import ProposalModal from '@features/proposal/modal';
import List from './List';
import EmptyList from './Empty';
import ButtonDeposit from './ButtonDeposit';
import ButtonClaim from './ButtonClaim';

export default function Layout() {
  const { balanceDetail }: any = useContractForge();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex w="100%">
        <Box>
          <Heading size="md">Your YFD: {balanceDetail.balance}</Heading>
        </Box>
        <Spacer />
        <Box>
          <ButtonDeposit onOpen={onOpen} />
          <ProposalModal isOpen={isOpen} onClose={onClose} />
        </Box>
      </Flex>
      <hr />
      <br />
      <Flex>
        <Box>
          <Heading size="md">Your Locked Fyfd</Heading>
        </Box>
        <Spacer />
        <Box>Not yet implemented.</Box>
      </Flex>
      <hr />
      <br />
      <Flex>
        <Box>
          <Heading size="md">Your fYFD Deposit History</Heading>
        </Box>
        <Spacer />
        <Box>
          <ButtonClaim />
        </Box>
      </Flex>
      <Flex>
        <Box>
          <Accordion w="100%">
            <List items={balanceDetail} />
          </Accordion>
        </Box>
      </Flex>
    </>
  );
}
