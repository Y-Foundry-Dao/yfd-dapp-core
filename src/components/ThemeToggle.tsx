import styles from 'styles/app.module.scss';
import yLogo from 'assets/yfd/logo-orange.svg';
import { Image, useColorMode } from '@chakra-ui/react';

export default function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div className={styles['dark-light']}>
      <Image
        h={6}
        src={yLogo}
        onClick={toggleColorMode}
        alt="Y-Foundry DAO Logo"
      />
    </div>
  );
}
