import { Link } from 'react-router-dom';
import { useDisclosure, Image } from '@chakra-ui/react';

import styles from '@scss/side.module.scss';
import imgDework from '@images/external/dework.svg';
import { URL_DOCS, URL_DEWORK } from '@var/links';
import { Icons } from '@var/icons';

import FeedbackModal from '@features/forms/feedback/Modal';
import FeedbackModalButton from '@features/forms/feedback/FeedbackModalButton';

export default function MenuLeftAbout() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div className={styles['side-wrapper-menu']}>
        <div className={styles['side-title']}>About Y-Foundry DAO</div>
        <div className={styles['side-menu']}>
          <Link to="/getting-started">
            <i className="material-symbols-outlined">{Icons.gettingstarted}</i>
            Getting Started
          </Link>
          <a href={URL_DOCS} target="_blank">
            <i className="material-symbols-outlined">{Icons.docs}</i>
            Documentation
          </a>
          <a href={URL_DEWORK} target="_blank">
            <Image className={styles.image} src={imgDework} />
            Dework
          </a>
          <FeedbackModalButton onOpen={onOpen} />
          <FeedbackModal isOpen={isOpen} onClose={onClose} />
        </div>
      </div>
    </>
  );
}
