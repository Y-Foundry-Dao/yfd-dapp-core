import { Text } from '@chakra-ui/react';
import '@scss/icon.module.scss';

function ProposalModalButton({ onOpen }: any) {
  return (
    <Text>
      <a href="#" onClick={onOpen}>
        <i id="test" className="material-symbols-outlined">
          add_box
        </i>
        Propose
      </a>
    </Text>
  );
}

export default ProposalModalButton;
