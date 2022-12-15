import { Link } from 'react-router-dom';
import styles from '@scss/side.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { useDisclosure, Image } from '@chakra-ui/react';

import FeedbackModal from '@features/forms/feedback/Modal';
import FeedbackModalButton from '@features/forms/feedback/FeedbackModalButton';
import {
  URL_DISCORD,
  URL_GITHUB,
  URL_TWITTER,
  URL_DOCS,
  URL_DEWORK
} from '@var/links';
import imgDework from '@images/external/dework.svg';

function MenuLeft() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div className={styles['side-wrapper']}>
        <div className={styles['side-title']}>About Y-Foundry DAO</div>
        <div className={styles['side-menu']}>
          <Link to="/getting-started">
            <i className="material-symbols-outlined">rocket_launch</i>
            Getting Started
          </Link>
          <a href={URL_DOCS} target="_blank">
            <i className="material-symbols-outlined">local_library</i>
            Documentation
          </a>
          <a href={URL_DEWORK} target="_blank">
            <Image className={styles.image} src={imgDework} />
            Dework
          </a>
          <a href={URL_DISCORD} target="_blank">
            <FontAwesomeIcon icon={brands('discord')} />
            Discord
          </a>
          <a href={URL_TWITTER} target="_blank">
            <FontAwesomeIcon icon={brands('twitter')} />
            Twitter
          </a>
          <a href={URL_GITHUB} target="_blank">
            <i className="material-symbols-outlined">code</i>
            Source Code
          </a>
          <FeedbackModalButton onOpen={onOpen} />
          <FeedbackModal isOpen={isOpen} onClose={onClose} />
        </div>
      </div>
    </>
  );
}

export default MenuLeft;
