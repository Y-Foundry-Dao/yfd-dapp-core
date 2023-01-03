import styles from '@scss/app.module.scss';
import imgBot from '@images/bots/supporter/supporter-square-512.png';
import {
  Box,
  SimpleGrid,
  GridItem,
  Wrap,
  WrapItem,
  Flex
} from '@chakra-ui/react';
import { Icons } from '@var/icons';
import { URL_GUIDE_SUPPORTER } from '@utilities/variables';

export default function GSDescription() {
  return (
    <div className={styles['content-feature-frame']}>
      <div className={styles['heading']}>The Supporter</div>
      <div className={styles.gsContent}>
        <Flex>
          <Box className={styles.gsDescImage}>
            <img
              src={imgBot}
              className={styles['tutorial-intro']}
              alt="Supporter Bot"
            />
          </Box>
          <Box className={styles.gsDescText}>
            <div className={styles.gsHeading}>What are Supporters?</div>
            <p>
              <span className={styles['text-enhanced']}>Supporters</span>{' '}
              contribute resources to a proposal. These resources are released
              at proposal milestones and utilized by the Builder to achieve
              proposal objectives.
            </p>
            <br />
            <a
              href={URL_GUIDE_SUPPORTER}
              className={styles['wide']}
              target="_blank"
              rel="noreferrer"
            >
              Read more in the Supporter Guide
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
                    <i className="material-symbols-outlined">{Icons.escrow}</i>
                  </GridItem>
                  <GridItem>Support Proposals</GridItem>
                </SimpleGrid>
              </WrapItem>
              <WrapItem className={styles['gsContent-feature']}>
                <SimpleGrid>
                  <GridItem>
                    <i className="material-symbols-outlined">{Icons.judge}</i>
                  </GridItem>
                  <GridItem>Govern Proposals</GridItem>
                </SimpleGrid>
              </WrapItem>
              <WrapItem className={styles['gsContent-feature']}>
                <SimpleGrid>
                  <GridItem>
                    <i className="material-symbols-outlined">
                      {Icons.disbursement_approval}
                    </i>
                  </GridItem>
                  <GridItem>Disburse Builder Funds</GridItem>
                </SimpleGrid>
              </WrapItem>
            </Wrap>
            <br />
            <div className={styles.gsHeading}>The Benefits of Supporting</div>
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
            </Wrap>
          </Box>
        </Flex>
      </div>
    </div>
  );
}
