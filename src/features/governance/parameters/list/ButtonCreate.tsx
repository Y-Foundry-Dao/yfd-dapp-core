import { Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import buttonStyle from '@scss/component/button.module.scss';

export default function ParameterModalButton({ onOpen }: any) {
  return (
    <Text>
      <button className={buttonStyle['simple']} onClick={onOpen}>
        <FontAwesomeIcon icon={solid('square-plus')} />
        Propose
      </button>
    </Text>
  );
}
