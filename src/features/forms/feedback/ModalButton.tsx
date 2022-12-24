import { Text } from '@chakra-ui/react';

import styles from '@scss/color.module.scss';
import { Icons } from '@var/icons';

function FeedbackModalButton({ onOpen }: any) {
  return (
    <Text>
      <a href="#" onClick={onOpen}>
        <span className={styles['icon-create'] + ' material-symbols-outlined'}>
          {Icons.feedback}
        </span>
        Feedback
      </a>
    </Text>
  );
}

export default FeedbackModalButton;
