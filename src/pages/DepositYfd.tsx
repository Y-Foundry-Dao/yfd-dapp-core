import styles from '@scss/app.module.scss';
import { Heading } from '@chakra-ui/react';
import ListFyfdBalance from '@features/lockYFD/history/list/Layout';
export default function FyfdBalance() {
  return (
    <>
      <div className={styles['content-section']}>
        <div className={styles['content-section-title']}>
          <Heading size="md"></Heading>
        </div>
        <ListFyfdBalance />
      </div>
    </>
  );
}
