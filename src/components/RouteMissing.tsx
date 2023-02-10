import styles from '@scss/component/paper.module.scss';
import { Text, Box } from '@chakra-ui/react';

export default function InitiativesFeatured() {
  return (
    <Box className={styles['content-section']}>
      <Box className={styles.letter}>
        <Text>Hello, Dear Foundry Guest!</Text>
        <div className={styles['letter-title']}>We've Gotten Lost</div>
        <Text>
          <i>It is pitch black. You are likely to be eaten by a grue.</i>
        </Text>
        <Text>Please go back or try another page.</Text>
        <br />
        <div>
          <Text>
            Signed,
            <br />
            The Caretakers
          </Text>
        </div>
      </Box>
    </Box>
  );
}
