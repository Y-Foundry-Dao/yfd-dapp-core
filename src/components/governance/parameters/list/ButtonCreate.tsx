import { Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
  regular,
  brands,
  icon
} from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used
import buttonStyle from 'styles/button.module.scss';

function ProposalModalButton({ onOpen }: any) {
  return (
    <Text>
      <a href="#" onClick={onOpen}>
        <FontAwesomeIcon
          className={buttonStyle.create}
          icon={solid('square-plus')}
        />
        Propose
      </a>
    </Text>
  );
}

export default ProposalModalButton;
