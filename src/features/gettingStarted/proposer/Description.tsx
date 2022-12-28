import styles from '@scss/app.module.scss';
import imgBot from '@images/bots/proposer/proposer-vertical-512.png';
import {
  Box,
  SimpleGrid,
  GridItem,
  Wrap,
  WrapItem,
  Flex
} from '@chakra-ui/react';
import { Icons } from '@var/icons';
import { URL_GUIDE_PROPOSER } from '@utilities/variables';

export default function GSDescription() {
  return (
    <div className={styles['content-feature-frame']}>
      <div className={styles['heading']}>The Proposer</div>
      <div className={styles.gsContent}>
        <Flex>
          <Box className={styles.gsDescImage}>
            <img
              src={imgBot}
              className={styles['tutorial-intro']}
              alt="Proposer Bot"
            />
          </Box>
          <Box className={styles.gsDescText}>
            <div className={styles.gsHeading}>What are Proposers?</div>
            <p>
              <span className={styles['text-enhanced']}>Proposers</span> submit
              an idea as a proposal to be voted on by the community.
            </p>
            <br />
            <a href={URL_GUIDE_PROPOSER} className={styles['wide']}>
              Read more in the Proposer Guide
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
                    <i className="material-symbols-outlined">{Icons.propose}</i>
                  </GridItem>
                  <GridItem>Submit Proposals</GridItem>
                </SimpleGrid>
              </WrapItem>
              <WrapItem className={styles['gsContent-feature']}>
                <SimpleGrid>
                  <GridItem>
                    <i className="material-symbols-outlined">
                      {Icons.management}
                    </i>
                  </GridItem>
                  <GridItem>Manage Builder Progress</GridItem>
                </SimpleGrid>
              </WrapItem>
              <WrapItem className={styles['gsContent-feature']}>
                <SimpleGrid>
                  <GridItem>
                    <i className="material-symbols-outlined">
                      {Icons.research}
                    </i>
                  </GridItem>
                  <GridItem>Research Ideas & Strategies</GridItem>
                </SimpleGrid>
              </WrapItem>
            </Wrap>
            <br />
            <div className={styles.gsHeading}>The Benefits of Proposing</div>
            <Wrap
              className={styles.gsContent}
              justify="center"
              align="center"
              spacing="3rem"
            >
              <WrapItem className={styles['gsContent-feature']}>
                <SimpleGrid>
                  <GridItem>
                    <i className="material-symbols-outlined">{Icons.nft}</i>
                  </GridItem>
                  <GridItem>Acquire Proposal NFTs</GridItem>
                </SimpleGrid>
              </WrapItem>
              <WrapItem className={styles['gsContent-feature']}>
                <SimpleGrid>
                  <GridItem>
                    <i className="material-symbols-outlined">
                      {Icons.profit_share}
                    </i>
                  </GridItem>
                  <GridItem>Share in Profits</GridItem>
                </SimpleGrid>
              </WrapItem>
              <WrapItem className={styles['gsContent-feature']}>
                <SimpleGrid>
                  <GridItem>
                    <i className="material-symbols-outlined">
                      {Icons.reputation}
                    </i>
                  </GridItem>
                  <GridItem>Earn Reputation</GridItem>
                </SimpleGrid>
              </WrapItem>
            </Wrap>
          </Box>
        </Flex>
      </div>
    </div>
  );
}
