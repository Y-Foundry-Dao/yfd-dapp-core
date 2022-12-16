import styles from '@scss/app.module.scss';

import { Grid, GridItem } from '@chakra-ui/react';

import GSDescription from '@features/gettingStarted/Description';
import GSFeatures from '@features/gettingStarted/Features';
import GSWhy from '@features/gettingStarted/Why';
import GSTokenomics from '@features/gettingStarted/TBD';
import GSCrucibles from '@features/gettingStarted/Decentralize';

export default function PageGettingStarted() {
  return (
    <div className={[styles['content-section'], styles['wide']].join(' ')}>
      <Grid
        className={styles.gsGrid}
        templateAreas={`
                  "description"
                  "features"
                  "why"
                  "decentralize"
                  "tokenomics"
                  `}
        gridTemplateRows={'1.3fr 1.9fr 1.2fr 2fr 1.5fr'}
        gridTemplateColumns={'1fr'}
        gap="2em"
      >
        <GridItem className={styles.gsGridItem} area={'description'}>
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
