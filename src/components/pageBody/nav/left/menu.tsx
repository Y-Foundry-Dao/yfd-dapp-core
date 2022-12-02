import { Link } from 'react-router-dom';
import styles from 'styles/app.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { useDisclosure } from '@chakra-ui/react';
import ProposalModal from 'components/pageBody/proposal/proposalCreationModal/ProposalModal';
import ProposalModalButton from 'components/pageBody/proposal/proposalCreationModal/ProposalModalButton';
import { DISCORD, GITHUB, TWITTER, DOCS } from 'utilities/variables/links';

function MenuLeft() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div className={styles['side-wrapper']}>
        <div className={styles['side-title']}>Personal</div>
        <div className={styles['side-menu']}>
          <Link to="/">
            <FontAwesomeIcon icon={solid('cubes')} />
            My Dashboard
          </Link>
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
      <div className={styles['side-wrapper']}>
        <div className={styles['side-title']}>Governance</div>
        <div className={styles['side-menu']}>
          <Link to="/deposit-yfd">
            <FontAwesomeIcon fill="currentColor" icon={solid('coins')} />
            Deposit $YFD
          </Link>
          <Link to="/proposals-governance">
            <FontAwesomeIcon icon={solid('handshake')} />
            DAO Proposals
          </Link>
        </div>
      </div>
      <div className={styles['side-wrapper']}>
        <div className={styles['side-title']}>About Y-Foundry DAO</div>
        <div className={styles['side-menu']}>
          <Link to="/getting-started">
            <FontAwesomeIcon icon={solid('rocket')} />
            Getting Started
          </Link>
          <a href={DOCS} target="_blank">
            <FontAwesomeIcon icon={solid('graduation-cap')} />
            Documentation
          </a>
          <a href={DISCORD} target="_blank">
            <FontAwesomeIcon icon={brands('discord')} />
            Discord
          </a>
          <a href={TWITTER} target="_blank">
            <FontAwesomeIcon icon={brands('twitter')} />
            Twitter
          </a>
          <a href={GITHUB} target="_blank">
            <FontAwesomeIcon icon={solid('code')} />
            Source Code
          </a>
        </div>
      </div>
    </>
  );
}

export default MenuLeft;
