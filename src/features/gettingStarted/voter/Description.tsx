import styles from '@scss/app.module.scss';
import imgBot from '@images/bots/voter/voter-bot-512.png';
import {
  Box,
  SimpleGrid,
  GridItem,
  Wrap,
  WrapItem,
  Flex
} from '@chakra-ui/react';
import { Icons } from '@var/icons';
import { URL_GUIDE_VOTER } from '@utilities/variables';

export default function GSDescription() {
  return (
    <div className={styles['content-feature-frame']}>
      <div className={styles['heading']}>The Voter</div>
      <div className={styles.gsContent}>
        <Flex>
          <Box className={styles.gsDescImage}>
            <img
              src={imgBot}
              className={styles['tutorial-intro']}
              alt="Voter Bot"
            />
          </Box>
          <Box className={styles.gsDescText}>
            <div className={styles.gsHeading}>What are Voters?</div>
            <p>
              <span className={styles['text-enhanced']}>Voters</span>{' '}
              participate in governance votes of the Y-Foundry DAO.
            </p>
            <br />
            <a href={URL_GUIDE_VOTER} className={styles['wide']}>
              Read more in the Voter Guide
            </a>
            <br />
            <br />
            <div className={styles.gsHeading}>Responsibilities</div>
            <Wrap
              className={styles.gsContent}
              justify="center"
              align="center"
              spacing="3rem"
            >
              <WrapItem className={styles['gsContent-feature']}>
                <SimpleGrid>
                  <GridItem>
                    <i className="material-symbols-outlined">{Icons.learn}</i>
                  </GridItem>
                  <GridItem>Learning About Issues</GridItem>
                </SimpleGrid>
              </WrapItem>
              <WrapItem className={styles['gsContent-feature']}>
                <SimpleGrid>
                  <GridItem>
                    <i className="material-symbols-outlined">{Icons.vote}</i>
                  </GridItem>
                  <GridItem>Voting on Proposals</GridItem>
                </SimpleGrid>
              </WrapItem>
            </Wrap>
            <br />
            <div className={styles.gsHeading}>The Benefits of Building</div>
            <Wrap
              className={styles.gsContent}
              justify="center"
              align="center"
              spacing="3rem"
            >
              <WrapItem className={styles['gsContent-feature']}>
                <SimpleGrid>
                  <GridItem>
                    <i className="material-symbols-outlined">
                      {Icons.direction}
                    </i>
                  </GridItem>
                  <GridItem>Guide the DAO</GridItem>
                </SimpleGrid>
              </WrapItem>
              <WrapItem className={styles['gsContent-feature']}>
                <SimpleGrid>
                  <GridItem>
                    <i className="material-symbols-outlined">{Icons.approve}</i>
                  </GridItem>
                  <GridItem>Approve Projects</GridItem>
                </SimpleGrid>
              </WrapItem>
            </Wrap>
          </Box>
        </Flex>
      </div>
    </div>
  );
}
