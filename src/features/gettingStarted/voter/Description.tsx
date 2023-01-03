import styles from '@scss/app.module.scss';
import imgBot from '@images/bots/voter/voter-square-512.png';
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
              <span className={styles['text-enhanced']}>Voters</span> decide the
              collective actions of the DAO by expressing their preference on
              governance and initiative proposals.
            </p>
            <br />
            <a href={URL_GUIDE_VOTER} className={styles['wide']} target="_blank" rel="noreferrer">
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
                  <GridItem>Stay Current on Issues</GridItem>
                </SimpleGrid>
              </WrapItem>
              <WrapItem className={styles['gsContent-feature']}>
                <SimpleGrid>
                  <GridItem>
                    <i className="material-symbols-outlined">{Icons.discuss}</i>
                  </GridItem>
                  <GridItem>Engage in Discussions</GridItem>
                </SimpleGrid>
              </WrapItem>
              <WrapItem className={styles['gsContent-feature']}>
                <SimpleGrid>
                  <GridItem>
                    <i className="material-symbols-outlined">{Icons.vote}</i>
                  </GridItem>
                  <GridItem>Vote on Proposals</GridItem>
                </SimpleGrid>
              </WrapItem>
            </Wrap>
            <br />
            <div className={styles.gsHeading}>The Benefits of Voting</div>
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
