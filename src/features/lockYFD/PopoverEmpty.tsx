import { Popover, PopoverTrigger, Button } from '@chakra-ui/react';
import styles from '@scss/app.module.scss';
export default function PopoverEmpty() {
  return (
    <>
      <Popover placement="bottom-end">
        <PopoverTrigger>
          <Button className={styles.menuButton}>Lock $YFD</Button>
        </PopoverTrigger>
      </Popover>
    </>
  );
}
