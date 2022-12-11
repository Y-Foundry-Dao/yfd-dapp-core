import styles from 'styles/app.module.scss';
import { Heading } from '@chakra-ui/react';
import ListFyfdBalance from '@features/governance/fyfd/list/Layout';
export default function DepositYfd() {
  return (
    <>
      <div className={styles['content-section']}>
        <div className={styles['content-section-title']}>
          <Heading size="md">Deposit $YFD</Heading>
        </div>
        <ListFyfdBalance />
      </div>
    </>
  );
}
