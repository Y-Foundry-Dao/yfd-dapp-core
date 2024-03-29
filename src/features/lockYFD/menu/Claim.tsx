import { useRecoilValue } from 'recoil';
import { Button, Box, SimpleGrid } from '@chakra-ui/react';
import styles from '@scss/app.module.scss';
import { Icons } from '@utilities/variables/icons';
import YFDClaimValue from './ClaimValue';
import useHandleClicks from '@hooks/useHandleClicks';
import {
  myClaimableYFDAtom,
  myClaimableYFDIndexAtom
} from '@recoil/connected/balance/atoms';

export default function MenuYFDClaim() {
  const { handleClickClaimYFD } = useHandleClicks();
  const idx = useRecoilValue(myClaimableYFDIndexAtom);
  const claimBalance = useRecoilValue(myClaimableYFDAtom);

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
            <span className={styles.textSpecial}>{claimBalance}</span>
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
