import styles from '@scss/app.module.scss';
import imgBot1 from '@images/bots/bot1.png';
import imgBot2 from '@images/bots/bot2.png';
import imgBot3 from '@images/bots/bot3.png';
import { Flex, Box, Heading, Spacer } from '@chakra-ui/react';
export default function GSFeatures() {
  return (
    <div className={styles['content-feature-frame']}>
      <div className={styles['content-wrapper-header']}>
        <span className={styles['text-title']}> Key Features </span>
      </div>
      <Flex className={styles.gsBorder}>
        <Box>
          <Heading className={styles.gsHeading}>Propose</Heading>
          <p>
            Submit your ideas as proposals and build them with the support of
            the YFD community.
          </p>
          <Heading className={styles.gsHeading}>Govern</Heading>
          <p>
            Exert your voice as a member of the protocol, participate in the
            governance and safekeeping of the platform.
          </p>
          <Heading className={styles.gsHeading}>Support</Heading>
          <p>
            Select and fund proposals of other users, and share in the success
            of the finished project.
          </p>
          <Heading className={styles.gsHeading}>Build</Heading>
          <p>
            Bring your skills and expertise to bear on the needs of the
            community, receive payments secured by smart contracts, and earn
            reputation,
          </p>
        </Box>
      </Flex>
    </div>
  );
}
