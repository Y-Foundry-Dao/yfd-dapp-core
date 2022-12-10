import styles from 'styles/app.module.scss';
import { Heading } from '@chakra-ui/react';

export default function InitativeProposalsList() {
  return (
    <>
      <div className={styles['content-section']}>
        <div className={styles['content-section-title']}>
          <Heading size="md">Latest Initiative Proposals</Heading>
        </div>
        None Available
      </div>
    </>
  );
}
