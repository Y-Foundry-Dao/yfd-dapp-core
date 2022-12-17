import { Link } from 'react-router-dom';
import 'material-symbols';

import Initiatives from './initiatives';
import AboutYFD from './aboutYFD';
import Footer from './footer';

import styles from '@scss/app.module.scss';
import { Icons } from '@var/icons';

export default function MenuLeft() {
  return (
    <>
      <div className={styles['side-wrapper']}>
        <div className={styles['side-wrapper-menu']}>
          <div className={styles['side-title']}>Personal</div>
          <div className={styles['side-menu']}>
            <Link to="/">
              <i className="material-symbols-outlined">{Icons.dashboard}</i>
              My Dashboard
            </Link>
            <Link to="/deposit-yfd">
              <i className="material-symbols-sharp">{Icons.yfdswap}</i>
              $YFD
              <i></i>
              <i className="material-symbols-outlined">{Icons.swap}</i>
              fYFD
            </Link>
          </div>
        </div>
        <Initiatives />
        <div className={styles['side-wrapper-menu']}>
          <div className={styles['side-title']}>Governance</div>
          <div className={styles['side-menu']}>
            <Link to="/governance-proposals">
              <i className="material-symbols-outlined">{Icons.dao}</i>
              DAO Proposals
            </Link>
            <Link to="/governance-parameters">
              <i className="material-symbols-outlined">{Icons.govparam}</i>
              Parameters
            </Link>
          </div>
        </div>
        <AboutYFD />
      </div>
      <Footer />
    </>
  );
}
