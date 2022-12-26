import styles from '@scss/app.module.scss';
import { Grid, GridItem } from '@chakra-ui/react';
import GSDescription from '@features/gettingStarted/supporter/Description';

export default function PageSupporter() {
  return (
    <div className={[styles['content-section'], styles['wide']].join(' ')}>
      <Grid
        className={styles.gsGrid}
        templateAreas={`
                  "description"
                  `}
        gridTemplateRows={'1fr'}
        gridTemplateColumns={'1fr'}
        gap="2em"
      >
        <GridItem className={styles.gsGridItem} area={'description'}>
          <GSDescription />
        </GridItem>
      </Grid>
    </div>
  );
}
