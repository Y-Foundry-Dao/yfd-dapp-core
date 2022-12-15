import { Text } from '@chakra-ui/react';

import styles from '@scss/color.module.scss';

function FeedbackModalButton({ onOpen }: any) {
  return (
    <Text>
      <a href="#" onClick={onOpen}>
        <span className={styles['icon-create'] + ' material-symbols-outlined'}>
          chat
        </span>
        Feedback
      </a>
    </Text>
  );
}

export default FeedbackModalButton;
