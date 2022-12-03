import { Link } from 'react-router-dom';
import styles from 'styles/app.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { useDisclosure } from '@chakra-ui/react';
import ProposalModal from 'components/pageBody/proposal/proposalCreationModal/ProposalModal';
import ProposalModalButton from 'components/pageBody/proposal/proposalCreationModal/ProposalModalButton';

function MenuLeftInitiatives() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div className={styles['side-wrapper']}>
        <div className={styles['side-title']}>Initatives</div>
        <div className={styles['side-menu']}>
          <ProposalModalButton onOpen={onOpen} />
          <ProposalModal isOpen={isOpen} onClose={onClose} />
          <Link to="/proposals-vaults">
            <FontAwesomeIcon icon={solid('vault')} />
            Vaults
          </Link>
          <Link to="/proposals-initiatives">
            <FontAwesomeIcon icon={solid('hands-holding-circle')} />
            Funding
          </Link>
        </div>
      </div>
    </>
  );
}

export default MenuLeftInitiatives;
