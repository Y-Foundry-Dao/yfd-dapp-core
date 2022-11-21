import styles from 'styles/app.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
  regular,
  brands,
  icon
} from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used
import { Heading } from '@chakra-ui/react';
import GovernanceProposals from './proposal/governanceProposals/GovernanceProposals';

export default function ListGovernanceProposalsLatest() {
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
