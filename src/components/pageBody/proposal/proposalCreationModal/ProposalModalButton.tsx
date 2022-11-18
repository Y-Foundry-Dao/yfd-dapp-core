import { Text, Box, Button } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
  regular,
  brands,
  icon
} from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used

function ProposalModalButton({ onOpen }: any) {
  return (
    <Text>
      <a href="#" onClick={onOpen}>
        <FontAwesomeIcon color="orange" icon={solid('square-plus')} />
        Create Proposal
      </a>
    </Text>
  );
}

export default ProposalModalButton;
