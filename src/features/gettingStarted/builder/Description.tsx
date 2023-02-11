import styles from '@scss/app.module.scss';
import imgBot from '@images/bots/builder/builder-vertical-512.png';
import {
  Box,
  SimpleGrid,
  GridItem,
  Wrap,
  WrapItem,
  Flex,
  Text
} from '@chakra-ui/react';
import { Icons } from '@var/icons';
import { URL_GUIDE_BUILDER } from '@utilities/variables';

export default function GSDescription() {
  return (
    <fieldset className={styles.headingWrapperInset}>
      <legend className={styles.headingLegend}>The Builder</legend>
      <div className={styles.gsContent}>
        <Flex pb={5} pr={2}>
          <Box className={styles.gsDescImage}>
            <img
              src={imgBot}
              className={styles['tutorial-intro']}
              alt="Builder Bot"
            />
          </Box>
          <Box className={styles.gsDescText}>
            <div className={styles.gsHeading}>What are Builders?</div>
            <Text>
              <span className={styles.textEnhanced}>Builders</span> are
              whitelisted members of the Y-Foundry DAO community that are doing
              the work. This includes completing general tasks for the DAO as
              well as any development needed for proposed vaults.
            </Text>
            <br />
            <a href={URL_GUIDE_BUILDER} target="_blank" rel="noreferrer">
              Read More in the Builder Guide
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
                    <i className="material-symbols-outlined">
                      {Icons.task_complete}
                    </i>
                  </GridItem>
                  <GridItem>Accomplish Tasks</GridItem>
                </SimpleGrid>
              </WrapItem>
              <WrapItem className={styles['gsContent-feature']}>
                <SimpleGrid>
                  <GridItem>
                    <i className="material-symbols-outlined">{Icons.bid}</i>
                  </GridItem>
                  <GridItem>Bid on Proposals</GridItem>
                </SimpleGrid>
              </WrapItem>
              <WrapItem className={styles['gsContent-feature']}>
                <SimpleGrid>
                  <GridItem>
                    <i className="material-symbols-outlined">
                      {Icons.deliverable_complete}
                    </i>
                  </GridItem>
                  <GridItem>Complete Deliverables</GridItem>
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
                      {Icons.compensation}
                    </i>
                  </GridItem>
                  <GridItem>Receive Compensation</GridItem>
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
    </fieldset>
  );
}
