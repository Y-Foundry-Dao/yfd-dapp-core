import { Link } from 'react-router-dom';

import styles from '@scss/app.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';

import Initiatives from './initiatives';
import AboutYFD from './aboutYFD';

import 'material-symbols';
import { Icons } from '@var/icons';
import {
  URL_DISCORD,
  URL_GITHUB,
  URL_TWITTER,
  URL_DOCS,
  URL_DEWORK
} from '@var/links';

function MenuLeft() {
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
            <Link to="/favorites">
              <i className="material-symbols-outlined">{Icons.favorite}</i>
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
      <div className={styles['footer-menu']}>
        <a href={URL_DISCORD} target="_blank">
          <FontAwesomeIcon icon={brands('discord')} />
        </a>
        <a href={URL_TWITTER} target="_blank">
          <FontAwesomeIcon icon={brands('twitter')} />
        </a>
        <a href={URL_GITHUB} target="_blank">
          <FontAwesomeIcon icon={brands('github')} />
        </a>
      </div>
    </>
  );
}

export default MenuLeft;
