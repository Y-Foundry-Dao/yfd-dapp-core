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
  SimpleGrid
} from '@chakra-ui/react';
import styles from '@scss/app.module.scss';

//import selectFyfd from '@recoil/connected/balance/selectors';
//import selectYFD from '@recoil/connected/balance/selectors';
import { selectMyYFD } from '@recoil/connected/balance/selectors';
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
  const balanceYFD =
    myYFD.state == 'hasValue' ? myYFD.contents : <NoticeLoading />;

  return (
    <Portal>
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
          <PopoverBalanceFYFD />
          <br />
          <fieldset className={styles['headingWrapper']} role="presentation">
            <legend className={styles.headingLegend} role="presentation">
              <h2>
                <span className="material-symbols-outlined">
                  {Icons.lock_yfd}
                </span>{' '}
                LOCK
              </h2>
            </legend>
            <PopoverBalanceYFD />
          </fieldset>
          <br />
          <fieldset className={styles['headingWrapper']} role="presentation">
            <legend className={styles.headingLegend} role="presentation">
              <h2>
                <span className="material-symbols-outlined">
                  {Icons.reclaim_yfd}
                </span>{' '}
                RECLAIM
              </h2>
            </legend>
            <Accordion allowToggle>
              <AccordionItem className={styles.profileMenuLayout}>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <h2>$YFD:</h2>
                  </Box>
                  <Box flex="1" textAlign="right">
                    <h2 className={styles.textSpecial}>ZERO</h2>
                  </Box>
                  <AccordionIcon ml={'1rem'} />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  {+balanceYFD < -1 ? (
                    <>
                      <SimpleGrid columns={2} spacing={2}>
                        <Box>
                          <span
                            className={
                              'material-symbols-outlined ' + styles.inputValid
                            }
                          >
                            {Icons.checkmark}
                          </span>
                        </Box>
                        <Box>
                          <Text ml={'1rem'}>You have YFD to Reclaim</Text>
                        </Box>
                        <Box>
                          <span className={styles.textSpecial}>CLAIM</span>
                        </Box>
                        <Box>
                          <button
                            className={styles.buttonPopoverDeposit}
                            onClick={async () => {
                              toast({
                                position: 'top',
                                title: '[NOT IMPLEMENTED] Claimed!',
                                description:
                                  'Your YFD balance of ' +
                                  balanceYFD +
                                  ' has been claimed.',
                                status: 'success',
                                duration: 5000,
                                isClosable: true
                              });
                            }}
                          >
                            Claim $YFD
                          </button>
                        </Box>
                      </SimpleGrid>
                    </>
                  ) : (
                    <>
                      <Box>You have no $YFD to reclaim.</Box>
                    </>
                  )}{' '}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </fieldset>
          <br />
        </PopoverBody>
      </PopoverContent>
    </Portal>
  );
}
