import styles from '@scss/app.module.scss';

import { Grid, GridItem } from '@chakra-ui/react';

import GSDescription from '@features/gettingStarted/Description';
import GSFeatures from '@features/gettingStarted/Features';
import GSWhy from '@features/gettingStarted/Why';
import GSTokenomics from '@features/gettingStarted/Tokenomics';
import GSCrucibles from '@features/gettingStarted/Decentralize';

export default function PageGettingStarted() {
  return (
    <div className={[styles['content-section'], styles['wide']].join(' ')}>
      <Grid
        className={styles.gsGrid}
        templateAreas={`"description features features"
                  "why features features"
                  "decentralize decentralize decentralize"
                  "tokenomics tokenomics tokenomics"
                  `}
        gridTemplateRows={'1fr 1fr 1fr 1fr'}
        gridTemplateColumns={'4fr 1fr 2fr '}
        gap="2em"
      >
        <GridItem
          className={styles.gsGridItem}
          width="100%"
          area={'description'}
        >
          <GSDescription />
        </GridItem>
        <GridItem className={styles.gsGridItem} area={'features'}>
          <GSFeatures />
        </GridItem>
        <GridItem className={styles.gsGridItem} area={'why'}>
          <GSWhy />
        </GridItem>
        <GridItem className={styles.gsGridItem} area={'tokenomics'}>
          <GSTokenomics />
        </GridItem>
        <GridItem className={styles.gsGridItem} area={'decentralize'}>
          <GSCrucibles />
        </GridItem>
      </Grid>
    </div>
  );
}
