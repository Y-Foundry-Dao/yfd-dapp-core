import { Link } from 'react-router-dom';

import styles from '@scss/side.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import Initiatives from './initiatives';
import AboutYFD from './aboutYFD';

import 'material-symbols';

function MenuLeft() {
  return (
    <>
      <div className={styles['side-wrapper']}>
        <div className={styles['side-title']}>Personal</div>
        <div className={styles['side-menu']}>
          <Link to="/">
            <i className="material-symbols-outlined">grid_view</i>
            My Dashboard
          </Link>
          <Link to="/favorites">
            <i className="material-symbols-outlined">favorite</i>
            Favorites
            <span
              className={[styles['notification-number'], styles.updates].join(
                ' '
              )}
            >
              3
            </span>
          </Link>
          <Link to="/deposit-yfd">
            <i className="material-symbols-sharp">swap_horizontal_circle</i>
            $YFD
            <i></i>
            <i className="material-symbols-outlined ml">swap_horiz</i>
            fYFD
          </Link>
        </div>
      </div>
      <Initiatives />
      <div className={styles['side-wrapper']}>
        <div className={styles['side-title']}>Governance</div>
        <div className={styles['side-menu']}>
          <Link to="/governance-proposals">
            <i className="material-symbols-outlined">handshake</i>
            DAO Proposals
          </Link>
          <Link to="/governance-parameters">
            <i className="material-symbols-outlined">settings</i>
            Parameters
          </Link>
        </div>
      </div>
      <AboutYFD />
    </>
  );
}

export default MenuLeft;
