import styles from '@scss/side.module.scss';
import { Link } from 'react-router-dom';
import { Icons } from '@var/icons';

export default function MenuGovernance() {
  return (
    <>
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
    </>
  );
}
