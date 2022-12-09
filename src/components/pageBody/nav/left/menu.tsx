import { Link } from 'react-router-dom';
import styles from 'styles/app.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import Initiatives from './initiatives';
import AboutYFD from './aboutYFD';

function MenuLeft() {
  return (
    <>
      <div className={styles['side-wrapper']}>
        <div className={styles['side-title']}>Personal</div>
        <div className={styles['side-menu']}>
          <Link to="/">
            <FontAwesomeIcon icon={solid('cubes')} />
            My Dashboard
          </Link>
          <a href="#">
            <FontAwesomeIcon icon={solid('rotate-left')} />
            Updates
            <span
              className={[styles['notification-number'], styles.updates].join(
                ' '
              )}
            >
              3
            </span>
          </a>
        </div>
      </div>
      <Initiatives />
      <div className={styles['side-wrapper']}>
        <div className={styles['side-title']}>Governance</div>
        <div className={styles['side-menu']}>
          <Link to="/deposit-yfd">
            <FontAwesomeIcon fill="currentColor" icon={solid('coins')} />
            Deposit $YFD
          </Link>
          <Link to="/governance-proposals">
            <FontAwesomeIcon icon={solid('handshake')} />
            DAO Proposals
          </Link>
          <Link to="/governance-parameters">
            <FontAwesomeIcon icon={solid('gear')} />
            Governance Parameters
          </Link>
        </div>
      </div>
      <AboutYFD />
    </>
  );
}

export default MenuLeft;
