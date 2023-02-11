import { useRecoilValueLoadable } from 'recoil';
import { Button, Box, useToast, SimpleGrid } from '@chakra-ui/react';
import styles from '@scss/app.module.scss';

import { selectMyYFD, selectMyFYFD } from '@recoil/connected/balance/selectors';
import NoticeLoading from '@components/NoticeLoading';
import FYFDFundValue from './FundValue';
import { Icons } from '@utilities/variables/icons';

export default function MenuFyfdBalanceFund() {
  const toast = useToast();
  return (
    <Box>
      <SimpleGrid columns={2} spacingX={10} alignItems={'center'} pb={'0.5em'}>
        <Box>
          <fieldset className={styles.headingWrapperMinimal}>
            <legend
              className={styles.headingLegendTextMinimal}
              role="presentation"
            >
              Funding Limit
            </legend>
            <span className={styles.textSpecial}>
              <FYFDFundValue />
            </span>
          </fieldset>
        </Box>
        <Box pb={'0.5em'}>
          <Button
            as="button"
            className={styles.buttonSimpleWide}
            variant="outline"
            title="Fund Proposals"
            size="sm"
            isDisabled={true}
          >
            <span className="material-symbols-outlined">{Icons.money}</span>
            <span className={styles.headingLegendText}>Fund</span>
          </Button>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
