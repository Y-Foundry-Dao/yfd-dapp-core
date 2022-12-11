import { Link } from 'react-router-dom';

import styles from '@scss/side.module.scss';
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
          <Link to="/favorites">
            <FontAwesomeIcon icon={solid('star')} />
            Favorites
            <span
              className={[styles['notification-number'], styles.updates].join(
                ' '
              )}
            >
              3
            </span>
          </Link>
        </div>
      </div>
      <Initiatives />
      <div className={styles['side-wrapper']}>
        <div className={styles['side-title']}>Governance</div>
        <div className={styles['side-menu']}>
          <Link to="/deposit-yfd">
            <FontAwesomeIcon fill="currentColor" icon={solid('coins')} />
            $YFD
            <FontAwesomeIcon
              fill="currentColor"
              style={{ margin: '0px 0.3em' }}
              icon={solid('arrow-right-arrow-left')}
            />
            fYFD
          </Link>
          <Link to="/governance-proposals">
            <FontAwesomeIcon icon={solid('handshake')} />
            DAO Proposals
          </Link>
          <Link to="/governance-parameters">
            <FontAwesomeIcon icon={solid('gear')} />
            Parameters
          </Link>
        </div>
      </div>
      <AboutYFD />
    </>
  );
}

export default MenuLeft;
