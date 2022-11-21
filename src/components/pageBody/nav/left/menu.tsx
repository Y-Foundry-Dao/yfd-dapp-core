import styles from 'styles/app.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
  regular,
  brands,
  icon
} from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used
import { useDisclosure } from '@chakra-ui/react';
import ProposalModal from 'components/pageBody/proposal/proposalCreationModal/ProposalModal';
import ProposalModalButton from 'components/pageBody/proposal/proposalCreationModal/ProposalModalButton';

function MenuLeft() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div className={styles['side-wrapper']}>
        <div className={styles['side-title']}>Personal</div>
        <div className={styles['side-menu']}>
          <a href="#">
            <FontAwesomeIcon icon={solid('cubes')} />
            My Dashboard
          </a>
          <a href="#">
            <FontAwesomeIcon icon={solid('rotate-left')} />
            Updates
            <span
              className={[styles['notification-number'], styles.updates].join(
                ' '
              )}
            >
              3
            </span>
          </a>
        </div>
      </div>
      <div className={styles['side-wrapper']}>
        <div className={styles['side-title']}>Initatives</div>
        <div className={styles['side-menu']}>
          <ProposalModalButton onOpen={onOpen} />
          <ProposalModal isOpen={isOpen} onClose={onClose} />
          <a href="#">
            <FontAwesomeIcon icon={solid('vault')} />
            Vaults
          </a>
          <a href="#">
            <FontAwesomeIcon icon={solid('hands-holding-circle')} />
            Funding
          </a>
        </div>
      </div>
      <div className={styles['side-wrapper']}>
        <div className={styles['side-title']}>Governance</div>
        <div className={styles['side-menu']}>
          <a href="#">
            <FontAwesomeIcon fill="currentColor" icon={solid('coins')} />
            Deposit fYFD
          </a>
          <a href="#">
            <FontAwesomeIcon icon={solid('handshake')} />
            DAO Proposals
          </a>
        </div>
      </div>
      <div className={styles['side-wrapper']}>
        <div className={styles['side-title']}>About Y-Foundry DAO</div>
        <div className={styles['side-menu']}>
          <a href="#">
            <FontAwesomeIcon icon={solid('rocket')} />
            Getting Started
          </a>
          <a href="#">
            <FontAwesomeIcon icon={solid('graduation-cap')} />
            Documentation
          </a>
          <a href="#">
            <FontAwesomeIcon icon={brands('discord')} />
            Discord
          </a>
          <a href="#">
            <FontAwesomeIcon icon={brands('twitter')} />
            Twitter
          </a>
          <a href="#">
            <FontAwesomeIcon icon={solid('code')} />
            Source Code
          </a>
        </div>
      </div>
    </>
  );
}

export default MenuLeft;
