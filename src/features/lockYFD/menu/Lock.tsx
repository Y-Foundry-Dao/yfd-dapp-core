import { useRecoilValueLoadable, useSetRecoilState } from 'recoil';
import {
  Button,
  Box,
  Divider,
  useToast,
  SimpleGrid,
  Collapse,
  useDisclosure,
  Tooltip
} from '@chakra-ui/react';
import styles from '@scss/app.module.scss';

import { inputStakeYFD } from '@recoil/input/atoms';
import { selectMyYFD, selectMyFYFD } from '@recoil/connected/balance/selectors';
import NoticeLoading from '@components/NoticeLoading';
import { Icons } from '@utilities/variables/icons';
import LockYfdForm from './LockForm';
import { useState } from 'react';

export default function MenuFyfdBalance() {
  const toast = useToast();
  const { isOpen: isOpenLockYFD, onToggle } = useDisclosure();
  const [isClicked, setIsClicked] = useState(false);
  const buttonClass = isClicked
    ? styles.buttonCollapseActive
    : styles.buttonCollapse;
  const myYFD = useRecoilValueLoadable(selectMyYFD);
  const myFYFD = useRecoilValueLoadable(selectMyFYFD);
  const balanceYFD = myYFD.state == 'hasValue' ? myYFD.contents : 0;
  const yfd = Math.round(parseInt(balanceYFD.toString())).toLocaleString();
  const setInputLockYFD = useSetRecoilState(inputStakeYFD);

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
            {yfd ? (
              <Button
                variant="link"
                title="Lock Maximum YFD"
                className={styles.textSpecial}
                onClick={() => {
                  setInputLockYFD(+balanceYFD);
                }}
              >
                {yfd}
              </Button>
            ) : (
              <NoticeLoading />
            )}
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
      <Collapse in={isOpenLockYFD} animateOpacity>
        <LockYfdForm />
        <Divider pb={'1.5em'} />
      </Collapse>
    </Box>
  );
}
