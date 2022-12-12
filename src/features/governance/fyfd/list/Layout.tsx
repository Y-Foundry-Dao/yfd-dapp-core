import { Heading, Spacer, Flex, Box } from '@chakra-ui/react';

import useContractForge from '@hooks/useContractForge';

import EmptyList from './Empty';
import Balances from './Balances';
import Locked from './Locked';
import Deposited from './Deposited';

export default function layoutFyfd() {
  const { balanceDetail }: any = useContractForge();

  if (Object.keys(balanceDetail).length > 0) {
    const balanceKeys = Object.keys(balanceDetail);
    console.log(balanceKeys);
    return (
      <>
        <Flex width="100%">
          <Box></Box>
          <Spacer />
          <Box>
            <Balances balance={balanceDetail.balance} />
          </Box>
        </Flex>
        <hr />
        <br />
        <Flex>
          <Box>
            <Heading size="md">Your Locked Fyfd</Heading>
          </Box>
          <Spacer />
        </Flex>
        <hr />
        <br />
        <Flex>
          <Box>
            <Heading size="md">YFD Deposit History</Heading>
          </Box>
          <Spacer />
        </Flex>
      </>
    );
  } else {
    return (
      <>
        <EmptyList />
      </>
    );
  }
}
