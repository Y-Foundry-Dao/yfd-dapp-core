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
        <Box className={styles.listFrame}>
          <ul>
            <li>
              Open-source and independently developed grants distribution for
              the Cosmos ecosystem.
            </li>
            <li>
              Rapid ecosystem expansion, connecting talents and ideas with the
              ingredients for growth.
            </li>
            <li>
              Transparent and auditable, extensive safety considerations, and
              designed to evolve with the community
            </li>
          </ul>
        </Box>
      </Flex>
    </div>
  );
}
