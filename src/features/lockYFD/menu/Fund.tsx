import { useRecoilValueLoadable } from 'recoil';
import { Button, Box, useToast, SimpleGrid } from '@chakra-ui/react';
import styles from '@scss/app.module.scss';

import { selectMyYFD, selectMyFYFD } from '@recoil/connected/balance/selectors';
import NoticeLoading from '@components/NoticeLoading';
import { Icons } from '@utilities/variables/icons';

export default function MenuFyfdBalanceFund() {
  const toast = useToast();
  const myYFD = useRecoilValueLoadable(selectMyYFD);
  const myFYFD = useRecoilValueLoadable(selectMyFYFD);
  const balanceYFD =
    myYFD.state == 'hasValue' ? myYFD.contents : <NoticeLoading />;
  const balanceFYFD =
    myFYFD.state == 'hasValue' ? myFYFD.contents : <NoticeLoading />;
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
              {+balanceFYFD > 0 ? (
                '$ ' +
                Math.round(
                  parseInt((+balanceFYFD * 0.01).toString())
                ).toLocaleString() +
                ' USD'
              ) : (
                <NoticeLoading />
              )}
            </span>
          </fieldset>
        </Box>
        <Box pb={'1.5em'}>
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
