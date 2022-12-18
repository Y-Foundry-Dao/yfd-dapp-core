import React, { useState } from 'react';
import styles from '@scss/app.module.scss';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  SimpleGrid,
  GridItem,
  Wrap,
  WrapItem
} from '@chakra-ui/react';
import FeedbackForm from './Form';
import { URL_BUGREPORT, URL_PRAISEREPORT } from '@var/links';
import { Icons } from '@var/icons';

function FeedbackModal({ isOpen, onClose }: any) {
  const [feedbackHidden, setFeedbackHidden] = useState(true);

  return (
    <Modal
      size={['lg', '2xl', '3xl', '4xl']}
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      useInert={false}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader className={styles.feedbackHeader}>
          Submit your Feedback
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody className={styles.feedbackSelect}>
          <div id="feedbackSelect">
            <Wrap
              className={styles['gsContent-wrap']}
              justify="center"
              align="center"
              spacing="2rem"
            >
              <WrapItem className={styles['gsContent-feature']}>
                <SimpleGrid>
                  <GridItem>
                    <a href={URL_BUGREPORT} target="_blank" onClick={onClose}>
                      <i className="material-symbols-outlined">{Icons.error}</i>
                      Report a Bug
                    </a>
                  </GridItem>
                </SimpleGrid>
              </WrapItem>
              <WrapItem className={styles['gsContent-feature']}>
                <SimpleGrid>
                  <GridItem>
                    <a
                      href={URL_PRAISEREPORT}
                      target="_blank"
                      onClick={onClose}
                    >
                      <i className="material-symbols-outlined">
                        {Icons.praise}
                      </i>
                      Praise a Feature
                    </a>
                  </GridItem>
                </SimpleGrid>
              </WrapItem>
              <WrapItem className={styles['gsContent-feature']}>
                <SimpleGrid>
                  <GridItem>
                    <p>OR</p>
                  </GridItem>
                </SimpleGrid>
              </WrapItem>
              <WrapItem className={styles['gsContent-feature']}>
                <SimpleGrid>
                  <GridItem>
                    <i
                      className="material-symbols-outlined"
                      onClick={() => setFeedbackHidden((s) => !s)}
                    >
                      {Icons.feedback}
                    </i>
                    Submit Quick Feedback
                  </GridItem>
                </SimpleGrid>
              </WrapItem>
            </Wrap>
          </div>
          {!feedbackHidden ? <FeedbackForm onClose={onClose} /> : null}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default FeedbackModal;
