import { Heading, Spacer, Flex, Text, Box } from '@chakra-ui/react';

export default function balanceDetail({ balance }: any) {
  console.log(balance);
  if (balance > 0) {
    return (
      <>
        <Flex>
          <Box>
            <Heading size="md">Your thing here</Heading>
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
