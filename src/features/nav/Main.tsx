import { Box, Flex, Spacer, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import styles from '@scss/nav/main.module.scss';

export default function MainMenu() {
  return (
    <div className={styles['main-header']}>
      <div className={styles['header-menu']}>
        <Flex>
          <Spacer />
          <Box>
            <Link to="/" className={styles['main-header-link']}>
              Dashboard
            </Link>
            <Link to="/vaults" className={styles['main-header-link']}>
              Vaults
            </Link>
            <Link to="/initiatives" className={styles['main-header-link']}>
              Initiatives
            </Link>
            <Link
              to="/proposals-governance"
              className={styles['main-header-link']}
            >
              Governance
            </Link>
          </Box>
          <Spacer />
        </Flex>
      </div>
    </div>
  );
}
