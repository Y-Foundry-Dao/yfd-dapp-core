import { useDisclosure, Image } from '@chakra-ui/react';

import styles from '@scss/side.module.scss';
import imgDework from '@images/external/dework.svg';
import { URL_DOCS, URL_DEWORK } from '@var/links';
import { Icons } from '@var/icons';

import FeedbackModal from '@features/forms/feedback/Modal';
import FeedbackModalButton from '@features/forms/feedback/ModalButton';
import TutorialModal from '@features/gettingStarted/modal/tutorial';
import TutorialModalButton from '@features/gettingStarted/modal/tutorialButton';

export default function MenuLeftAbout() {
  const {
    isOpen: tutorialIsOpen,
    onOpen: tutorialOnOpen,
    onClose: tutorialOnClose
  } = useDisclosure();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div className={styles['side-wrapper-menu']}>
        <div className={styles['side-title']}>About Y-Foundry DAO</div>
        <div className={styles['side-menu']}>
          <TutorialModalButton onOpen={tutorialOnOpen} />
          <TutorialModal isOpen={tutorialIsOpen} onClose={tutorialOnClose} />
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
