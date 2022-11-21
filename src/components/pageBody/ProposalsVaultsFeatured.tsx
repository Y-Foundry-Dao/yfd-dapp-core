import styles from 'styles/app.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
  regular,
  brands,
  icon
} from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used

import VaultProposals from './proposal/vaultProposals/VaultProposals';

export default function ProposalsList() {
  return (
    <>
      <div className={styles['content-section']}>
        <div className={styles['content-section-title']}>
          Latest Vault Proposals
        </div>
        <VaultProposals />
        <ul>
          <li className={styles['proposal-list']}>
            <div className={styles.proposals}>
              <FontAwesomeIcon icon={solid('vault')} />
              Vault: Larry's Governance Block
            </div>
            <span className={styles.status}>
              <span
                className={[styles['status-circle'], styles.green].join(' ')}
              ></span>
              Updated
            </span>
            <div className={styles['button-wrapper']}>
              <button
                className={[
                  styles['content-button'],
                  styles['status-button'],
                  styles['open']
                ].join(' ')}
              >
                Open
              </button>
              <div className={styles.menu}>
                <button className={styles.dropdown}>
                  <ul>
                    <li>
                      <a href="#">Go to Discover</a>
                    </li>
                    <li>
                      <a href="#">Learn more</a>
                    </li>
                    <li>
                      <a href="#">Uninstall</a>
                    </li>
                  </ul>
                </button>
              </div>
            </div>
          </li>
          <li className={styles['proposal-list']}>
            <div className={styles.proposals}>
              <FontAwesomeIcon icon={solid('user-check')} />
              Whitelist Developer: Irulast
            </div>
            <span className={styles.status}>
              <span className={styles['status-circle']}></span>
              Vote Available
            </span>
            <div className={styles['button-wrapper']}>
              <button
                className={[
                  styles['content-button'],
                  styles['status-button']
                ].join(' ')}
              >
                Vote on Proposal
              </button>
              <div className={styles['pop-up']}>
                <div className={styles['pop-up__title']}>
                  Vote
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className={[
                      styles['close'],
                      styles.feather,
                      styles['feather-x-circle']
                    ].join(' ')}
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M15 9l-6 6M9 9l6 6" />
                  </svg>
                </div>
                <div className={styles['pop-up__subtitle']}>
                  Adjust your selections for advanced options as desired before
                  continuing. <a href="#">Learn more</a>
                </div>
                <div className={styles['checkbox-wrapper']}>
                  <input
                    type="checkbox"
                    id="check1"
                    className={styles.checkbox}
                  />
                  <label>Import previous settings and preferences</label>
                </div>
                <div className={styles['checkbox-wrapper']}>
                  <input
                    type="checkbox"
                    id="check2"
                    className={styles.checkbox}
                  />
                  <label>Remove old versions</label>
                </div>
                <div className={styles['content-button-wrapper']}>
                  <button
                    className={[
                      styles['content-button'],
                      styles['status-button'],
                      styles.open,
                      styles.close
                    ].join(' ')}
                  >
                    Cancel
                  </button>
                  <button
                    className={[
                      styles['content-button'],
                      styles['status-button']
                    ].join(' ')}
                  >
                    Continue
                  </button>
                </div>
              </div>
              <div className={styles.menu}>
                <button className={styles.dropdown}>
                  <ul>
                    <li>
                      <a href="#">Yes</a>
                    </li>
                    <li>
                      <a href="#">Abstain</a>
                    </li>
                    <li>
                      <a href="#">No</a>
                    </li>
                  </ul>
                </button>
              </div>
            </div>
          </li>
          <li className={styles['proposal-list']}>
            <div className={styles.proposals}>
              <FontAwesomeIcon color="red" icon={solid('circle-exclamation')} />
              Emergency: Stop Vault
            </div>
            <span className={styles.status}>
              <span
                className={[styles['status-circle'], styles['green']].join(' ')}
              ></span>
              Updated
            </span>
            <div className={styles['button-wrapper']}>
              <button
                className={[
                  styles['content-button'],
                  styles['status-button'],
                  styles.open
                ].join(' ')}
              >
                Open
              </button>
              <div className={styles.menu}>
                <button className={styles.dropdown}>
                  <ul>
                    <li>
                      <a href="#">Learn more</a>
                    </li>
                    <li>
                      <a href="#">Hide</a>
                    </li>
                  </ul>
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
