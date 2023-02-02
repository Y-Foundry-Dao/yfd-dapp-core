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
import Voter from '@images/bots/voter/voter-square-256.png';
import Proposer from '@images/bots/proposer/proposer-square-256.png';
import Supporter from '@images/bots/supporter/supporter-square-256.png';
import Builder from '@images/bots/builder/builder-square-256.png';

export default function tutorialModal({ isOpen, onClose }: any) {
  return (
    <Modal
      size={['lg', '2xl', '3xl', '4xl']}
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      useInert={false}
      preserveScrollBarGap={true}
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
                    <Link to="/getting-started/voter" onClick={onClose}>
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
                    <Link to="/getting-started/proposer" onClick={onClose}>
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
                    <Link to="/getting-started/supporter" onClick={onClose}>
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
                    <Link to="/getting-started/builder" onClick={onClose}>
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
