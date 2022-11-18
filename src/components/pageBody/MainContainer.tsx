import styles from 'styles/app.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
  regular,
  brands,
  icon
} from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used

import PageBody from 'components/pageBody/PageBody';
import NavMain from 'components/pageBody/nav/main/menu';
import GettingStarted from 'components/pageBody/GettingStarted';
import ProposalsFeatured from 'components/pageBody/ProposalsFeatured';
import VaultsFeatured from 'components/pageBody/VaultsFeatured';

export default function MainContainer() {
  return (
    <div className={styles['main-container']}>
      <NavMain />
      <div className={styles['content-wrapper']}>
        <GettingStarted />
        <div className={styles['content-section']}>
          <div className={styles['content-section-title']}>
            Vaults Available
          </div>
          <PageBody />
        </div>
        <VaultsFeatured />
        <ProposalsFeatured />
      </div>
    </div>
  );
}
