import { Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used
import buttonStyle from '@scss/button.module.scss';

export default function DepositModalButton({ onOpen }: any) {
  return (
    <Text>
      <a href="#" onClick={onOpen}>
        <button className={buttonStyle['standard']}>Deposit</button>
      </a>
    </Text>
  );
}
