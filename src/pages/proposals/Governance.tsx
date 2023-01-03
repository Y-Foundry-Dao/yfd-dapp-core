import React from 'react';
import styles from '@scss/app.module.scss';
import { Heading } from '@chakra-ui/react';
import GovernanceProposals from '@features/proposal/governance/List';

export default function GovernanceProposalsList() {
  return (
    <>
      <div className={styles['content-section']}>
        <div className={styles['content-section-title']}>
          <Heading size="md">Latest Governance Proposals</Heading>
        </div>
        <GovernanceProposals />
      </div>
    </>
  );
}
