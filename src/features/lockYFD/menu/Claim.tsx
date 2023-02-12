import { useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { Button, Box, useToast, SimpleGrid, Text } from '@chakra-ui/react';
import styles from '@scss/app.module.scss';
import NoticeLoading from '@components/NoticeLoading';
import { Icons } from '@utilities/variables/icons';
import YFDClaimValue from './ClaimValue';
import useHandleClicks from '@hooks/useHandleClicks';
import { myClaimableYFDIndexAtom } from '@recoil/connected/balance/atoms';
import { isDisabled } from '@chakra-ui/utils';

export default function MenuYFDClaim() {
  const { handleClickClaimYFD } = useHandleClicks();
  const idx = useRecoilValue(myClaimableYFDIndexAtom);

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
              <Button as="button" variant="link" className={styles.textSpecial}>
                claim details
              </Button>
            </span>
          </fieldset>
        </Box>
        <Box pb={'0.5em'}>
          <Button
            as="button"
            variant="outline"
            title="Reclaim YFD from decayed fYFD"
            size="sm"
            className={styles.buttonMenu}
            isDisabled={idx ? false : true}
            onClick={async () => {
              return await handleClickClaimYFD(idx);
            }}
          >
            <span className="material-symbols-outlined">
              {Icons.reclaim_yfd}
            </span>
            <span className={styles.headingLegendText}>Claim</span>
          </Button>
        </Box>
      </SimpleGrid>
      <span className={styles.textSpecial}>
        <YFDClaimValue />
      </span>
    </Box>
  );
}
