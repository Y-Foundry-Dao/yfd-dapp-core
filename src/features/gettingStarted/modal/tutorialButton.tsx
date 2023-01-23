import { Text } from '@chakra-ui/react';
import styles from '@scss/app.module.scss';
import { Icons } from '@var/icons';

export default function TutorialModalButton({ onOpen }: any) {
  return (
    <Text>
      <a href="#" onClick={onOpen}>
        <span className={styles.icon + ' material-symbols-outlined'}>
          {Icons.gettingstarted}
        </span>
        Getting Started
      </a>
    </Text>
  );
}
