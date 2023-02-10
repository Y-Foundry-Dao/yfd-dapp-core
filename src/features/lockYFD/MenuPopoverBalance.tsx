import { useRecoilValueLoadable } from 'recoil';
import {
  Box,
  Wrap,
  PopoverContent,
  PopoverBody,
  useToast,
  Divider
} from '@chakra-ui/react';
import styles from '@scss/app.module.scss';

import { selectMyYFD, selectMyFYFD } from '@recoil/connected/balance/selectors';
import NoticeLoading from '@components/NoticeLoading';
import PopoverBalanceFYFD from './menu/FYFD';
import PopoverBalanceYFD from './MenuBalanceYFD';
import PopoverIconEmergency from './PopoverIconEmergency';
import PopoverIconVote from './PopoverIconVote';
import PopoverIconProposal from './PopoverIconProposal';
import MenuFyfdBalanceClaim from './menu/Claim';
import MenuFyfdBalanceLock from './menu/Lock';
import MenuFyfdBalanceFund from './menu/Fund';

export default function MenuFyfdBalance() {
  const toast = useToast();
  return (
    <PopoverContent className={styles.popoverWrapper}>
      <fieldset className={styles.popoverActionsSection} role="presentation">
        <legend className={styles.headingLegend} role="presentation">
          <h2>Actions</h2>
        </legend>
        <Wrap
          className={styles.popoverActionsWrapper}
          justify="center"
          spacing="2.5rem"
        >
          <PopoverIconVote />
          <PopoverIconProposal />
          <PopoverIconEmergency />
        </Wrap>
      </fieldset>
      <PopoverBody className={styles.popoverBalancesWrapper}>
        <fieldset className={styles.headingWrapper} role="presentation">
          <legend className={styles.headingLegend} role="presentation">
            <h2>fYFD</h2>
          </legend>
          <Box h={'2em'}>
            <PopoverBalanceFYFD />
          </Box>
          <Divider ml={'25%'} w={'50%'} />
          <br />
          <MenuFyfdBalanceFund />
          <MenuFyfdBalanceLock />
          <MenuFyfdBalanceClaim />
        </fieldset>
        <br />
      </PopoverBody>
    </PopoverContent>
  );
}
