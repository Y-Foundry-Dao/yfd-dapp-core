import styles from '@scss/app.module.scss';
import imgBot1 from '@images/bots/bot1.png';
import imgBot2 from '@images/bots/bot2.png';
import imgBot3 from '@images/bots/bot3.png';
import { Flex, Box, Spacer } from '@chakra-ui/react';
export default function GSTokenomics() {
  return (
    <div className={styles['content-feature-frame']}>
      <div className={styles['heading']}> TBD </div>
      <Flex className={styles.gsBorder}>
        <Box>
          <img src={imgBot3} alt="Beep" />
        </Box>
        <Spacer />
        <Box>
          <img src={imgBot1} alt="Boop" />
        </Box>
        <Spacer />
        <Box>
          <img src={imgBot2} alt="Beep" />
        </Box>
      </Flex>
    </div>
  );
}
