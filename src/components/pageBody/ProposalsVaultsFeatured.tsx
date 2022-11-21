import styles from 'styles/app.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
  regular,
  brands,
  icon
} from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used
import { Heading } from '@chakra-ui/react';
import VaultProposals from './proposal/vaultProposals/VaultProposals';

export default function ProposalsList() {
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
