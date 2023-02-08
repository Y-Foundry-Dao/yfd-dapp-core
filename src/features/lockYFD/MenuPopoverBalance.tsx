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
  Tooltip
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
          <Box>
            <SimpleGrid
              columns={2}
              spacingY={5}
              spacingX={10}
              alignItems={'center'}
            >
              <Box>
                <fieldset className={styles.headingWrapperMinimal}>
                  <legend
                    className={styles.headingLegendTextMinimal}
                    role="presentation"
                  >
                    Funding Limit
                  </legend>
                  <span className={styles.textSpecial}>
                    {balanceYFD ? (
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
              <Box>
                <Button
                  as="button"
                  className={styles.buttonSimpleWide}
                  variant="outline"
                  title="Fund Proposals"
                  size="sm"
                >
                  <span className="material-symbols-outlined">
                    {Icons.money}
                  </span>
                  <span className={styles.headingLegendText}>Fund</span>
                </Button>
              </Box>
              <Box>
                <fieldset className={styles.headingWrapperMinimal}>
                  <legend
                    className={styles.headingLegendTextMinimal}
                    role="presentation"
                  >
                    $YFD Available
                  </legend>
                  <span className={styles.textSpecial}>
                    {balanceYFD ? (
                      Math.round(
                        parseInt(balanceYFD.toString())
                      ).toLocaleString()
                    ) : (
                      <NoticeLoading />
                    )}
                  </span>
                </fieldset>
              </Box>
              <Box>
                <Button
                  as="button"
                  variant="outline"
                  title="Lock YFD for fYFD"
                  size="sm"
                  className={styles.buttonSimpleWide}
                >
                  <span className="material-symbols-outlined">
                    {Icons.lock_yfd}
                  </span>
                  <span className={styles.headingLegendText}>Lock</span>
                </Button>
              </Box>
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
              <Box>
                <Button
                  as="button"
                  variant="outline"
                  title="Reclaim YFD from decayed fYFD"
                  size="sm"
                  className={styles.buttonSimpleWide}
                >
                  <span className="material-symbols-outlined">
                    {Icons.reclaim_yfd}
                  </span>
                  <span className={styles.headingLegendText}>Claim</span>
                </Button>
              </Box>
            </SimpleGrid>
          </Box>
        </fieldset>
        <br />
      </PopoverBody>
    </PopoverContent>
  );
}
