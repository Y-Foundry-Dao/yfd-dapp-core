import styles from '@scss/app.module.scss';
import { Heading } from '@chakra-ui/react';
import VaultProposals from '@features/proposal/vault/List';

export default function VaultProposalsList() {
  return (
    <>
      <div className={styles['content-section']}>
        <div className={styles['content-section-title']}>
          <Heading size="md">Latest Vault Proposals</Heading>
        </div>
        <VaultProposals />
      </div>
    </>
  );
}
