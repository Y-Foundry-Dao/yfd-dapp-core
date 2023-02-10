import { useRecoilValueLoadable } from 'recoil';
import {
  Button,
  Box,
  Divider,
  useToast,
  SimpleGrid,
  Collapse,
  useDisclosure
} from '@chakra-ui/react';
import styles from '@scss/app.module.scss';

import { selectMyYFD, selectMyFYFD } from '@recoil/connected/balance/selectors';
import NoticeLoading from '@components/NoticeLoading';
import { Icons } from '@utilities/variables/icons';
import LockYfdForm from './LockForm';
import { useState } from 'react';

export default function MenuFyfdBalance() {
  const toast = useToast();
  const { isOpen, onToggle } = useDisclosure();
  const [isClicked, setIsClicked] = useState(false);
  const buttonClass = isClicked
    ? styles.buttonCollapseActive
    : styles.buttonCollapse;
  const myYFD = useRecoilValueLoadable(selectMyYFD);
  const myFYFD = useRecoilValueLoadable(selectMyFYFD);
  const balanceYFD =
    myYFD.state == 'hasValue' ? myYFD.contents : <NoticeLoading />;
  const balanceFYFD = myFYFD.state == 'hasValue' ? myFYFD.contents : 0;

  return (
    <Box pb={'0.5em'}>
      <SimpleGrid columns={2} spacingX={10} alignItems={'center'}>
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
                Math.round(parseInt(balanceYFD.toString())).toLocaleString()
              ) : (
                <NoticeLoading />
              )}
            </span>
          </fieldset>
        </Box>
        <Box pb={'0.5em'}>
          <Button
            as="button"
            variant="outline"
            title="Lock YFD for fYFD"
            size="sm"
            className={buttonClass}
            onClick={() => {
              onToggle();
              setIsClicked(!isClicked);
            }}
          >
            <span className="material-symbols-outlined">{Icons.lock_yfd}</span>
            <span className={styles.headingLegendText}>Lock</span>
          </Button>
        </Box>
      </SimpleGrid>
      <Collapse in={isOpen} animateOpacity>
        <LockYfdForm />
        <Divider pb={'1.5em'} />
      </Collapse>
    </Box>
  );
}
