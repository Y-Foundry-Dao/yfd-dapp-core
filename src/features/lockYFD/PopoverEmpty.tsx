import { useRecoilValue } from 'recoil';
import { Popover, PopoverTrigger, Button } from '@chakra-ui/react';
import styles from '@scss/app.module.scss';
import { balanceYfdConnectedAtom } from '@recoil/connected/address/atoms';
export default function PopoverEmpty() {
  const yfd = useRecoilValue(balanceYfdConnectedAtom);
  console.log('PopoverEmpty YFD: ', yfd);
  return (
    <>
      <Popover placement="bottom-end">
        <PopoverTrigger>
          <Button className={styles.menuButton}>Lock {yfd} $YFD</Button>
        </PopoverTrigger>
      </Popover>
    </>
  );
}
