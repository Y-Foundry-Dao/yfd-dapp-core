import styles from 'styles/app.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
  regular,
  brands,
  icon
} from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used

export default function MainMenu() {
  return (
    <div className={styles['main-header']}>
      <a className={styles['menu-link-main']}>Sections</a>
      <div className={styles['header-menu']}>
        <a className={styles['main-header-link']}>Dashboard</a>
        <a className={styles['main-header-link']}>Vaults</a>
        <a className={styles['main-header-link']}>Governance</a>
      </div>
    </div>
  );
}
