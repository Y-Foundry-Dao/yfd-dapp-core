import styles from 'styles/app.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
  regular,
  brands,
  icon
} from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used

export default function ProposalsFeatured() {
  return (
    <>
      <div className={styles['content-section']}>
        <div className={styles['content-section-title']}>Latest Proposals</div>
        <ul>
          <li className={styles['adobe-product']}>
            <div className={styles.products}>
              <svg className={styles['svg-icon']} viewBox="0 0 20 20">
                <path
                  fill="none"
                  d="M17.222,5.041l-4.443-4.414c-0.152-0.151-0.356-0.235-0.571-0.235h-8.86c-0.444,0-0.807,0.361-0.807,0.808v17.602c0,0.448,0.363,0.808,0.807,0.808h13.303c0.448,0,0.808-0.36,0.808-0.808V5.615C17.459,5.399,17.373,5.192,17.222,5.041zM15.843,17.993H4.157V2.007h7.72l3.966,3.942V17.993z"
                ></path>
                <path
                  fill="none"
                  d="M5.112,7.3c0,0.446,0.363,0.808,0.808,0.808h8.077c0.445,0,0.808-0.361,0.808-0.808c0-0.447-0.363-0.808-0.808-0.808H5.92C5.475,6.492,5.112,6.853,5.112,7.3z"
                ></path>
                <path
                  fill="none"
                  d="M5.92,5.331h4.342c0.445,0,0.808-0.361,0.808-0.808c0-0.446-0.363-0.808-0.808-0.808H5.92c-0.444,0-0.808,0.361-0.808,0.808C5.112,4.97,5.475,5.331,5.92,5.331z"
                ></path>
                <path
                  fill="none"
                  d="M13.997,9.218H5.92c-0.444,0-0.808,0.361-0.808,0.808c0,0.446,0.363,0.808,0.808,0.808h8.077c0.445,0,0.808-0.361,0.808-0.808C14.805,9.58,14.442,9.218,13.997,9.218z"
                ></path>
                <path
                  fill="none"
                  d="M13.997,11.944H5.92c-0.444,0-0.808,0.361-0.808,0.808c0,0.446,0.363,0.808,0.808,0.808h8.077c0.445,0,0.808-0.361,0.808-0.808C14.805,12.306,14.442,11.944,13.997,11.944z"
                ></path>
                <path
                  fill="none"
                  d="M13.997,14.67H5.92c-0.444,0-0.808,0.361-0.808,0.808c0,0.447,0.363,0.808,0.808,0.808h8.077c0.445,0,0.808-0.361,0.808-0.808C14.805,15.032,14.442,14.67,13.997,14.67z"
                ></path>
              </svg>
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
          <li className={styles['adobe-product']}>
            <div className={styles.products}>
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
          <li className={styles['adobe-product']}>
            <div className={styles.products}>
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
