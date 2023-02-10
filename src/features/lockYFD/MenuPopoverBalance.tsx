import { useRecoilValueLoadable } from 'recoil';
import {
  Wrap,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Portal,
  Button,
  Spacer,
  Box,
  useToast,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Flex,
  Text,
  SimpleGrid,
  Tooltip,
  Divider
} from '@chakra-ui/react';
import styles from '@scss/app.module.scss';

//import selectFyfd from '@recoil/connected/balance/selectors';
//import selectYFD from '@recoil/connected/balance/selectors';
import { selectMyYFD, selectMyFYFD } from '@recoil/connected/balance/selectors';
import NoticeLoading from '@components/NoticeLoading';
// import { myFYFD, myYFD } from '@utilities/myValues';
import PopoverBalanceFYFD from './MenuBalanceFYFD';
import PopoverBalanceYFD from './MenuBalanceYFD';
import PopoverIconEmergency from './PopoverIconEmergency';
import PopoverIconVote from './PopoverIconVote';
import PopoverIconProposal from './PopoverIconProposal';
import MenuFyfdBalanceClaim from './menu/Claim';
import MenuFyfdBalanceLock from './menu/Lock';
import MenuFyfdBalanceFund from './menu/Fund';
import { Icons } from '@utilities/variables/icons';

export default function MenuFyfdBalance() {
  const toast = useToast();
  const myYFD = useRecoilValueLoadable(selectMyYFD);
  const myFYFD = useRecoilValueLoadable(selectMyFYFD);
  const balanceYFD =
    myYFD.state == 'hasValue' ? myYFD.contents : <NoticeLoading />;
  const balanceFYFD = myFYFD.state == 'hasValue' ? myFYFD.contents : 0;
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
          <PopoverBalanceFYFD />
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
