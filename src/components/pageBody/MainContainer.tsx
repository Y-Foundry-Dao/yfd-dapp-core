import styles from 'styles/app.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
  regular,
  brands,
  icon
} from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used

import NavMain from 'components/pageBody/nav/main/menu';
import GettingStarted from 'components/pageBody/GettingStarted';
import ProposalsVaultsFeatured from 'components/pageBody/ProposalsVaultsFeatured';
import ProposalsGoveranceFeatured from 'components/pageBody/ProposalsGovernanceFeatured';
import VaultsFeatured from 'components/pageBody/VaultsFeatured';

export default function MainContainer() {
  return (
    <div className={styles['main-container']}>
      <NavMain />
      <div className={styles['content-wrapper']}>
        <GettingStarted />
        <ProposalsVaultsFeatured />
        <ProposalsGoveranceFeatured />
        <VaultsFeatured />
      </div>
    </div>
  );
}
