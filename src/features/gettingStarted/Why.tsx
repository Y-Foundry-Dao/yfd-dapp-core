import styles from '@scss/app.module.scss';
import imgBot1 from '@images/bots/bot1.png';
import imgBot2 from '@images/bots/bot2.png';
import imgBot3 from '@images/bots/bot3.png';
import { Flex, Box, Spacer } from '@chakra-ui/react';
export default function GSWhy() {
  return (
    <div className={styles['content-feature-frame']}>
      <div className={styles['heading']}> Why Y-Foundry? </div>
      <Flex className={[styles['gsBorder'], styles['gsContent']].join(' ')}>
        <Box className={[styles['listFrame'], styles['wide']].join(' ')}>
          <ul>
            <li>Open-source: Transparent and auditable</li>
            <li>Create free market funded grants and initiatives.</li>
            <li>
              Connect talent and ideas to accelerate ecosystem expansion across
              the Cosmos.
            </li>
            <li>
              Extensive safety considerations and designed to evolve with the
              community.
            </li>
          </ul>
        </Box>
      </Flex>
    </div>
  );
}
