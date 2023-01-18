import styles from '@scss/side.module.scss';
import { Link } from 'react-router-dom';
import { Icons } from '@var/icons';

export default function MenuPersonal() {
  return (
    <>
      <div className={styles['side-wrapper-menu']}>
        <div className={styles['side-title']}>Personal</div>
        <div className={styles['side-menu']}>
          <Link to="/">
            <i className="material-symbols-outlined">{Icons.dashboard}</i>
            My Dashboard
          </Link>
        </div>
      </div>
    </>
  );
}
