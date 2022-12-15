import styles from '@scss/paper.module.scss';
import { Flex, Box, Spacer } from '@chakra-ui/react';

export default function InitiativesFeatured() {
  return (
    <Box className={styles['content-section']}>
      <Box className={styles.letter}>
        <p>Hello, Dear Foundry Guest!</p>
        <div className={styles['letter-title']}>We've Gotten Lost</div>
        <p>
          <i>It is pitch black. You are likely to be eaten by a grue.</i>
        </p>
        <p>Please go back or try another page.</p>
        <br />
        <div>
          <p>
            Signed,
            <br />
            The Caretakers
          </p>
        </div>
      </Box>
    </Box>
  );
}
