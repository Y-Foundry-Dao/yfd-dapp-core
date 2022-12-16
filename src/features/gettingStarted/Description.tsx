import styles from '@scss/app.module.scss';
import imgBot1 from '@images/bots/bot1.png';
import imgBot2 from '@images/bots/bot2.png';
import imgBot3 from '@images/bots/bot3.png';
import { SimpleGrid, GridItem, Wrap, WrapItem } from '@chakra-ui/react';
import { Icons } from '@var/icons';

export default function GSDescription() {
  return (
    <div className={styles['content-feature-frame']}>
      <div className={[styles['gsBorder'], styles['gsContent']].join(' ')}>
        <p>
          Y-Foundry provides a platform for creators to trustlessly propose,
          fund, and build ideas.
        </p>
        <Wrap
          className={styles['gsContent-wrap']}
          justify="center"
          align="center"
          spacing="2rem"
        >
          <WrapItem className={styles['gsContent-feature']}>
            <SimpleGrid>
              <GridItem>
                <i className="material-symbols-outlined">{Icons.vault}</i>
              </GridItem>
              <GridItem>Strategy Vaults</GridItem>
            </SimpleGrid>
          </WrapItem>
          <WrapItem className={styles['gsContent-feature']}>
            <SimpleGrid>
              <GridItem>
                <i className="material-symbols-outlined">{Icons.nft}</i>
              </GridItem>
              <GridItem>NFT Collections</GridItem>
            </SimpleGrid>
          </WrapItem>
          <WrapItem className={styles['gsContent-feature']}>
            <SimpleGrid>
              <GridItem>
                <i className="material-symbols-outlined">{Icons.softwaredev}</i>
              </GridItem>
              <GridItem>Software Development</GridItem>
            </SimpleGrid>
          </WrapItem>
          <WrapItem className={styles['gsContent-feature']}>
            <SimpleGrid>
              <GridItem>
                <i className="material-symbols-outlined">{Icons.charity}</i>
              </GridItem>
              <GridItem>Charitable Causes</GridItem>
            </SimpleGrid>
          </WrapItem>
          <WrapItem className={styles['gsContent-feature']}>
            <SimpleGrid>
              <GridItem>
                <i className="material-symbols-outlined">{Icons.escrow}</i>
              </GridItem>
              <GridItem>Community Escrow</GridItem>
            </SimpleGrid>
          </WrapItem>
          <WrapItem className={styles['gsContent-feature']}>
            <SimpleGrid>
              <GridItem>
                <i className="material-symbols-outlined">{Icons.business}</i>
              </GridItem>
              <GridItem> Off-chain Business</GridItem>
            </SimpleGrid>
          </WrapItem>
        </Wrap>
      </div>
    </div>
  );
}
