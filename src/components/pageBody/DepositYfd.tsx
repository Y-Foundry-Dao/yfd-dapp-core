import styles from 'styles/app.module.scss';
import { Heading } from '@chakra-ui/react';

export default function DepositYfd() {
  return (
    <>
      <div className={styles['content-section']}>
        <div className={styles['content-section-title']}>
          <Heading size="md">Deposit $YFD</Heading>
        </div>
      </div>
    </>
  );
}