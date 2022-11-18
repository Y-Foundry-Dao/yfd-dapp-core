import styles from 'styles/app.module.scss';
import yLogo from 'assets/yfd/logo-orange.svg';
import { Image } from '@chakra-ui/react';

export default function ThemeToggle() {
  return (
    <div className={styles['dark-light']}>
      <Image h={6} src={yLogo} alt="Y-Foundry DAO Logo" />
    </div>
  );
}
