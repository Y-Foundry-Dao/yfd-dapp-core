import styles from '@scss/side.module.scss';
import { Link } from 'react-router-dom';
import { Icons } from '@var/icons';

export default function MenuPersonal() {
  return (
    <>
      <div className={styles.wrapperSideMenu}>
        <div className={styles.sideTitle}>Personal</div>
        <div className={styles.sideMenu}>
          <Link to="/">
            <i className="material-symbols-outlined">{Icons.dashboard}</i>
            My Dashboard
          </Link>
        </div>
      </div>
    </>
  );
}
