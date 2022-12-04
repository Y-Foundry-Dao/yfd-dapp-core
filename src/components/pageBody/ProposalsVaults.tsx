import styles from 'styles/app.module.scss';
import { Heading } from '@chakra-ui/react';
import VaultProposals from './proposal/vaultProposals/VaultProposals';

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
