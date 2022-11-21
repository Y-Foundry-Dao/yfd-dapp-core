import styles from 'styles/app.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
  regular,
  brands,
  icon
} from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used
import GovernanceProposals from './proposal/governanceProposals/GovernanceProposals';

export default function ListGovernanceProposalsLatest() {
  return (
    <>
      <div className={styles['content-section']}>
        <div className={styles['content-section-title']}>
          Latest Governance Proposals
        </div>
        <GovernanceProposals />
        <ul>
          <li className={styles['proposal']}>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className={styles['bi bi-list-stars']}
                viewBox="0 0 16 16"
              >
                {' '}
                <path
                  fill-rule="evenodd"
                  d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"
                />{' '}
                <path d="M2.242 2.194a.27.27 0 0 1 .516 0l.162.53c.035.115.14.194.258.194h.551c.259 0 .37.333.164.493l-.468.363a.277.277 0 0 0-.094.3l.173.569c.078.256-.213.462-.423.3l-.417-.324a.267.267 0 0 0-.328 0l-.417.323c-.21.163-.5-.043-.423-.299l.173-.57a.277.277 0 0 0-.094-.299l-.468-.363c-.206-.16-.095-.493.164-.493h.55a.271.271 0 0 0 .259-.194l.162-.53zm0 4a.27.27 0 0 1 .516 0l.162.53c.035.115.14.194.258.194h.551c.259 0 .37.333.164.493l-.468.363a.277.277 0 0 0-.094.3l.173.569c.078.255-.213.462-.423.3l-.417-.324a.267.267 0 0 0-.328 0l-.417.323c-.21.163-.5-.043-.423-.299l.173-.57a.277.277 0 0 0-.094-.299l-.468-.363c-.206-.16-.095-.493.164-.493h.55a.271.271 0 0 0 .259-.194l.162-.53zm0 4a.27.27 0 0 1 .516 0l.162.53c.035.115.14.194.258.194h.551c.259 0 .37.333.164.493l-.468.363a.277.277 0 0 0-.094.3l.173.569c.078.255-.213.462-.423.3l-.417-.324a.267.267 0 0 0-.328 0l-.417.323c-.21.163-.5-.043-.423-.299l.173-.57a.277.277 0 0 0-.094-.299l-.468-.363c-.206-.16-.095-.493.164-.493h.55a.271.271 0 0 0 .259-.194l.162-.53z" />{' '}
              </svg>
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
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                {' '}
                <g>
                  {' '}
                  <path fill="none" d="M0 0h24v24H0z" />{' '}
                  <path
                    d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7v2h2v-2h-2zm0-8v6h2V7h-2z"
                    fill="red"
                  />{' '}
                </g>{' '}
              </svg>
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
