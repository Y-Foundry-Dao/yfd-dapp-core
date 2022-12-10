import { Link } from 'react-router-dom';
import styles from 'styles/app.module.scss';

export default function MainMenu() {
  return (
    <div className={styles['main-header']}>
      <a className={styles['menu-link-main']}>Sections</a>
      <div className={styles['header-menu']}>
        <Link to="/" className={styles['main-header-link']}>
          Dashboard
        </Link>
        <Link to="/vaults" className={styles['main-header-link']}>
          Vaults
        </Link>
        <Link to="/initiatives" className={styles['main-header-link']}>
          Initiatives
        </Link>
        <Link to="/proposals-governance" className={styles['main-header-link']}>
          Governance
        </Link>
      </div>
    </div>
  );
}
