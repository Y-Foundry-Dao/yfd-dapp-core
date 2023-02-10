import { useRecoilValueLoadable } from 'recoil';
import { Button, Box, useToast, SimpleGrid, Text } from '@chakra-ui/react';
import styles from '@scss/app.module.scss';

import { selectMyYFD, selectMyFYFD } from '@recoil/connected/balance/selectors';
import NoticeLoading from '@components/NoticeLoading';
import { Icons } from '@utilities/variables/icons';

export default function MenuFyfdBalance() {
  const toast = useToast();
  const myYFD = useRecoilValueLoadable(selectMyYFD);
  const myFYFD = useRecoilValueLoadable(selectMyFYFD);
  const balanceYFD =
    myYFD.state == 'hasValue' ? myYFD.contents : <NoticeLoading />;
  const balanceFYFD = myFYFD.state == 'hasValue' ? myFYFD.contents : 0;
  return (
    <Box>
      <SimpleGrid columns={2} spacingX={10} alignItems={'center'} pb={'0.5em'}>
        <Box>
          <fieldset className={styles.headingWrapperMinimal}>
            <legend
              className={styles.headingLegendTextMinimal}
              role="presentation"
            >
              Unlocked
            </legend>
            <span className={styles.textSpecial}>
              <NoticeLoading />
            </span>
          </fieldset>
        </Box>
        <Box pb={'1.5em'}>
          <Button
            as="button"
            variant="outline"
            title="Reclaim YFD from decayed fYFD"
            size="sm"
            className={styles.buttonSimpleWide}
            isDisabled={true}
          >
            <span className="material-symbols-outlined">
              {Icons.reclaim_yfd}
            </span>
            <span className={styles.headingLegendText}>Claim</span>
          </Button>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
