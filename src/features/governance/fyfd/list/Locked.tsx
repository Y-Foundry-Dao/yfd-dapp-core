import { Heading, Spacer, Flex, Box, Text } from '@chakra-ui/react';

export default function lockedYfd() {
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
}
