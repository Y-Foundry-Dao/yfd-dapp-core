import { Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used
import buttonStyle from '@scss/button.module.scss';

export default function ClaimModalButton({ onOpen }: any) {
  return (
    <Text>
      <button className={buttonStyle['standard-create']}>Claim</button>
    </Text>
  );
}
