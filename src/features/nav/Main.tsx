import { Box, Flex, Spacer } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import styles from '@scss/nav/main.module.scss';

export default function MainMenu() {
  return (
    <div className={styles['mainHeader']}>
      <div className={styles['menuHeader']}>
        <Flex>
          <Spacer />
          <Box>
            <Link to="/" className={styles.mainHeaderLink}>
              Dashboard
            </Link>
            <Link to="/vaults" className={styles.mainHeaderLink}>
              Vaults
            </Link>
            <Link to="/initiatives" className={styles.mainHeaderLink}>
              Initiatives
            </Link>
            <Link to="/governance-proposals" className={styles.mainHeaderLink}>
              Governance
            </Link>
          </Box>
          <Spacer />
        </Flex>
      </div>
    </div>
  );
}
