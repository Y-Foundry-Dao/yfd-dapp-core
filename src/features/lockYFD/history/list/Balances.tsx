import { Heading, Spacer, Flex, Text, Box } from '@chakra-ui/react';

export default function balanceDetail({ balance }: any) {
  if (balance > 0) {
    return (
      <>
        <Flex>
          <Box>
            <Heading size="md">YFD Balance: {balance}</Heading>
          </Box>
          <Spacer />
          <Box>
            <Text>
              More stuff here
              <br />
              and yet more stuff
            </Text>
          </Box>
        </Flex>
      </>
    );
  } else {
    return <>Deposit</>;
  }
}
