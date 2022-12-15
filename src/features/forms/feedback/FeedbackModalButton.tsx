import { Text } from '@chakra-ui/react';

function FeedbackModalButton({ onOpen }: any) {
  return (
    <Text>
      <a href="#" onClick={onOpen}>
        <i className="material-symbols-outlined">chat</i>
        Feedback
      </a>
    </Text>
  );
}

export default FeedbackModalButton;
