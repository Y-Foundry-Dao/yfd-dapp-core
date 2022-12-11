import { Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
  regular,
  brands,
  icon
} from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used
import buttonStyle from '@scss/button.module.scss';

function ProposalModalButton({ onOpen }: any) {
  return (
    <Text>
      <button className={buttonStyle['simple']} onClick={onOpen}>
        <FontAwesomeIcon icon={solid('square-plus')} />
        Propose
      </button>
    </Text>
  );
}

export default ProposalModalButton;
