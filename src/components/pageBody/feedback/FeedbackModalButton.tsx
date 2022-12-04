import { Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used

function FeedbackModalButton({ onOpen }: any) {
  return (
    <Text>
      <a href="#" onClick={onOpen}>
        <FontAwesomeIcon color="orange" icon={solid('comments')} />
        Submit Feedback
      </a>
    </Text>
  );
}

export default FeedbackModalButton;
