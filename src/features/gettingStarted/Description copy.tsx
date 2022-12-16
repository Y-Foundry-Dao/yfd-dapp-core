import styles from '@scss/app.module.scss';
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
        <Wrap className={styles['gsContent-wrap']} align="center">
          <WrapItem className={styles['gsContent-feature']}>
            <SimpleGrid>
              <GridItem>
                <i className="material-symbols-outlined">{Icons.vault}</i>
              </GridItem>
              <GridItem>Strategy Vaults</GridItem>
            </SimpleGrid>
          </WrapItem>
          <WrapItem className={styles['gsContent-feature']}>
            <i className="material-symbols-outlined">{Icons.nft}</i>
            <br />
            NFT Collections
          </WrapItem>
          <WrapItem className={styles['gsContent-feature']}>
            <i className="material-symbols-outlined">{Icons.softwaredev}</i>
            <br />
            Software Development
          </WrapItem>
          <WrapItem className={styles['gsContent-feature']}>
            <i className="material-symbols-outlined">{Icons.charity}</i>
            <br />
            Charitable Causes
          </WrapItem>
          <WrapItem className={styles['gsContent-feature']}>
            <i className="material-symbols-outlined">{Icons.escrow}</i>
            <br />
            Community Escrow
          </WrapItem>
          <WrapItem className={styles['gsContent-feature']}>
            <i className="material-symbols-outlined">{Icons.business}</i>
            <br />
            Off-chain Business
          </WrapItem>
        </Wrap>
      </div>
    </div>
  );
}
