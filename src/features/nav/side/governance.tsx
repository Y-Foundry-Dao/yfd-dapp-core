import styles from '@scss/side.module.scss';
import { Link } from 'react-router-dom';
import { Icons } from '@var/icons';

export default function MenuGovernance() {
  return (
    <>
      <div className={styles.wrapperSideMenu}>
        <div className={styles.sideTitle}>Governance</div>
        <div className={styles.sideMenu}>
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
