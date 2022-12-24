import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
import { Icons } from '@var/icons';
import Voter from '@images/bots/voter/voter-bot-256.png';
import Proposer from '@images/bots/proposer/proposer-bot-256.png';
import Supporter from '@images/bots/supporter/supporter-bot-256.png';
import Builder from '@images/bots/builder/builder-bot-256.png';

export default function tutorialModal({ isOpen, onClose }: any) {
  const [tutorialHidden, setTutorialHidden] = useState(true);

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
          Choose Your Role...
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
                    <Link to="/getting-started" onClick={onClose}>
                      <img
                        src={Voter}
                        className={styles['tutorial-intro']}
                        alt="Voter"
                      />
                      Voter
                    </Link>
                  </GridItem>
                </SimpleGrid>
              </WrapItem>
              <WrapItem className={styles['gsContent-feature']}>
                <SimpleGrid>
                  <GridItem>
                    <Link to="/getting-started" onClick={onClose}>
                      <img
                        src={Proposer}
                        className={styles['tutorial-intro']}
                        alt="Proposer"
                      />
                      Proposer
                    </Link>
                  </GridItem>
                </SimpleGrid>
              </WrapItem>
              <WrapItem className={styles['gsContent-feature']}>
                <SimpleGrid>
                  <GridItem>
                    <Link to="/getting-started" onClick={onClose}>
                      <img
                        src={Supporter}
                        className={styles['tutorial-intro']}
                        alt="Supporter"
                      />
                      Supporter
                    </Link>
                  </GridItem>
                </SimpleGrid>
              </WrapItem>
              <WrapItem className={styles['gsContent-feature']}>
                <SimpleGrid>
                  <GridItem>
                    <Link to="/getting-started" onClick={onClose}>
                      <img
                        src={Builder}
                        className={styles['tutorial-intro']}
                        alt="Builder"
                      />
                      Builder
                    </Link>
                  </GridItem>
                </SimpleGrid>
              </WrapItem>
            </Wrap>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
