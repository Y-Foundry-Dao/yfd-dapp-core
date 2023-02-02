import styles from '@scss/app.module.scss';
import { Heading } from '@chakra-ui/react';
export default function FyfdBalance() {
  return (
    <>
      <div className={styles['content-section']}>
        <div className={styles['content-section-title']}>
          <Heading size="md"></Heading>
        </div>
      </div>
    </>
  );
}
