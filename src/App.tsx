import Header from 'components/header/Header';
import PageBody from 'components/pageBody/PageBody';
import BackgroundVideo from 'components/basic/BackgroundVideo';
import ThemeToggle from 'components/basic/ThemeToggle';
import styles from 'styles/app.module.scss';

export default function App() {
  return (
    <main>
      <BackgroundVideo />
      <ThemeToggle />
      <div className={styles.app}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.wrapper}>
          <div className={styles['left-side']}>
            <div className={styles['side-wrapper']}>
              <div className={styles['side-title']}>Personal</div>
              <div className={styles['side-menu']}>
                <a href="#">
                  <svg viewBox="0 0 512 512">
                    <g xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                      <path
                        d="M0 0h128v128H0zm0 0M192 0h128v128H192zm0 0M384 0h128v128H384zm0 0M0 192h128v128H0zm0 0"
                        data-original="#bfc9d1"
                      />
                    </g>
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      d="M192 192h128v128H192zm0 0"
                      fill="currentColor"
                      data-original="#82b1ff"
                    />
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      d="M384 192h128v128H384zm0 0M0 384h128v128H0zm0 0M192 384h128v128H192zm0 0M384 384h128v128H384zm0 0"
                      fill="currentColor"
                      data-original="#bfc9d1"
                    />
                  </svg>
                  My Dashboard
                </a>
                <a href="#">
                  <svg viewBox="0 0 488.932 488.932" fill="currentColor">
                    <path d="M243.158 61.361v-57.6c0-3.2 4-4.9 6.7-2.9l118.4 87c2 1.5 2 4.4 0 5.9l-118.4 87c-2.7 2-6.7.2-6.7-2.9v-57.5c-87.8 1.4-158.1 76-152.1 165.4 5.1 76.8 67.7 139.1 144.5 144 81.4 5.2 150.6-53 163-129.9 2.3-14.3 14.7-24.7 29.2-24.7 17.9 0 31.8 15.9 29 33.5-17.4 109.7-118.5 192-235.7 178.9-98-11-176.7-89.4-187.8-187.4-14.7-128.2 84.9-237.4 209.9-238.8z" />
                  </svg>
                  Updates
                  <span
                    className={[
                      styles['notification-number'],
                      styles.updates
                    ].join(' ')}
                  >
                    3
                  </span>
                </a>
              </div>
            </div>
            <div className={styles['side-wrapper']}>
              <div className={styles['side-title']}>Vaults</div>
              <div className={styles['side-menu']}>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className={styles['bi bi-bank']}
                    viewBox="0 0 16 16"
                  >
                    {' '}
                    <path
                      d="M8 .95 14.61 4h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.379l.5 2A.5.5 0 0 1 15.5 17H.5a.5.5 0 0 1-.485-.621l.5-2A.5.5 0 0 1 1 14V7H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 4h.89L8 .95zM3.776 4h8.447L8 2.05 3.776 4zM2 7v7h1V7H2zm2 0v7h2.5V7H4zm3.5 0v7h1V7h-1zm2 0v7H12V7H9.5zM13 7v7h1V7h-1zm2-1V5H1v1h14zm-.39 9H1.39l-.25 1h13.72l-.25-1z"
                      fill="currentColor"
                    ></path>{' '}
                  </svg>
                  All
                </a>
              </div>
            </div>
            <div className={styles['side-wrapper']}>
              <div className={styles['side-title']}>Governance</div>
              <div className={styles['side-menu']}>
                <a href="#">
                  <svg viewBox="0 0 332 332" fill="currentColor">
                    <path d="M282.341 8.283C275.765 2.705 266.211 0 253.103 0c-18.951 0-36.359 5.634-51.756 16.743-14.972 10.794-29.274 28.637-42.482 53.028-4.358 7.993-7.428 11.041-8.973 12.179h-26.255c-10.84 0-19.626 8.786-19.626 19.626 0 8.989 6.077 16.486 14.323 18.809l-.05.165h.589c1.531.385 3.109.651 4.757.651h18.833l-32.688 128.001c-7.208 27.848-10.323 37.782-11.666 41.24-1.445 3.711-3.266 7.062-5.542 10.135-.42-5.39-2.637-10.143-6.508-13.854-4.264-4.079-10.109-6.136-17.364-6.136-8.227 0-15.08 2.433-20.37 7.229-5.416 4.93-8.283 11.193-8.283 18.134 0 5.157 1.701 12.712 9.828 19.348 6.139 4.97 14.845 7.382 26.621 7.382 17.096 0 32.541-4.568 45.891-13.577 13.112-8.845 24.612-22.489 34.166-40.522 9.391-17.678 18.696-45.124 28.427-83.9l18.598-73.479h30.016c10.841 0 19.625-8.785 19.625-19.625s-8.784-19.626-19.625-19.626h-19.628c6.34-21.62 14.175-37.948 23.443-48.578 2.284-2.695 5.246-5.692 8.412-7.678-1.543 3.392-2.325 6.767-2.325 10.055 0 6.164 2.409 11.714 6.909 16.03 4.484 4.336 10.167 6.54 16.888 6.54 7.085 0 13.373-2.667 18.17-7.716 4.76-5.005 7.185-11.633 7.185-19.703.017-9.079-3.554-16.899-10.302-22.618z" />
                  </svg>
                  fYFD Deposit
                </a>
                <a href="#">
                  <svg viewBox="0 0 512 512" fill="currentColor">
                    <circle
                      cx="295.099"
                      cy="327.254"
                      r="110.96"
                      transform="rotate(-45 295.062 327.332)"
                    />
                    <path d="M471.854 338.281V163.146H296.72v41.169a123.1 123.1 0 01121.339 122.939c0 3.717-.176 7.393-.5 11.027zM172.14 327.254a123.16 123.16 0 01100.59-120.915L195.082 73.786 40.146 338.281H172.64c-.325-3.634-.5-7.31-.5-11.027z" />
                  </svg>
                  DAO Proposals
                </a>
                <a href="#">
                  <svg viewBox="0 0 512 512" fill="currentColor">
                    <circle
                      cx="295.099"
                      cy="327.254"
                      r="110.96"
                      transform="rotate(-45 295.062 327.332)"
                    />
                    <path d="M471.854 338.281V163.146H296.72v41.169a123.1 123.1 0 01121.339 122.939c0 3.717-.176 7.393-.5 11.027zM172.14 327.254a123.16 123.16 0 01100.59-120.915L195.082 73.786 40.146 338.281H172.64c-.325-3.634-.5-7.31-.5-11.027z" />
                  </svg>
                  Vault Proposals
                </a>
              </div>
            </div>
            <div className={styles['side-wrapper']}>
              <div className={styles['side-title']}>About Y-Foundry DAO</div>
              <div className={styles['side-menu']}>
                <a href="#">
                  <svg viewBox="0 0 512 512" fill="currentColor">
                    <path d="M467 0H45C20.186 0 0 20.186 0 45v422c0 24.814 20.186 45 45 45h422c24.814 0 45-20.186 45-45V45c0-24.814-20.186-45-45-45zM181 241c41.353 0 75 33.647 75 75s-33.647 75-75 75-75-33.647-75-75c0-8.291 6.709-15 15-15s15 6.709 15 15c0 24.814 20.186 45 45 45s45-20.186 45-45-20.186-45-45-45c-41.353 0-75-33.647-75-75s33.647-75 75-75 75 33.647 75 75c0 8.291-6.709 15-15 15s-15-6.709-15-15c0-24.814-20.186-45-45-45s-45 20.186-45 45 20.186 45 45 45zm180 120h30c8.291 0 15 6.709 15 15s-6.709 15-15 15h-30c-24.814 0-45-20.186-45-45V211h-15c-8.291 0-15-6.709-15-15s6.709-15 15-15h15v-45c0-8.291 6.709-15 15-15s15 6.709 15 15v45h45c8.291 0 15 6.709 15 15s-6.709 15-15 15h-45v135c0 8.276 6.724 15 15 15z" />
                  </svg>
                  Getting Started
                </a>
                <a href="#">
                  <svg viewBox="0 0 511.441 511.441" fill="currentColor">
                    <path d="M255.721 347.484L90.22 266.751v106.57l165.51 73.503 165.509-73.503V266.742z" />
                    <path d="M511.441 189.361L255.721 64.617 0 189.361l255.721 124.744 195.522-95.378v111.032h30V204.092z" />
                  </svg>
                  Documentation
                </a>
                <a href="#">
                  <svg viewBox="0 0 512 512" fill="currentColor">
                    <path d="M352 0H64C28.704 0 0 28.704 0 64v320a16.02 16.02 0 009.216 14.496A16.232 16.232 0 0016 400c3.68 0 7.328-1.248 10.24-3.712L117.792 320H352c35.296 0 64-28.704 64-64V64c0-35.296-28.704-64-64-64z" />
                    <path d="M464 128h-16v128c0 52.928-43.072 96-96 96H129.376L128 353.152V400c0 26.464 21.536 48 48 48h234.368l75.616 60.512A16.158 16.158 0 00496 512c2.336 0 4.704-.544 6.944-1.6A15.968 15.968 0 00512 496V176c0-26.464-21.536-48-48-48z" />
                  </svg>
                  Discord
                </a>
                <a href="#">
                  <svg className={styles['svg-icon']} viewBox="0 0 20 20">
                    <path
                      fill="none"
                      d="M18.258,3.266c-0.693,0.405-1.46,0.698-2.277,0.857c-0.653-0.686-1.586-1.115-2.618-1.115c-1.98,0-3.586,1.581-3.586,3.53c0,0.276,0.031,0.545,0.092,0.805C6.888,7.195,4.245,5.79,2.476,3.654C2.167,4.176,1.99,4.781,1.99,5.429c0,1.224,0.633,2.305,1.596,2.938C2.999,8.349,2.445,8.19,1.961,7.925C1.96,7.94,1.96,7.954,1.96,7.97c0,1.71,1.237,3.138,2.877,3.462c-0.301,0.08-0.617,0.123-0.945,0.123c-0.23,0-0.456-0.021-0.674-0.062c0.456,1.402,1.781,2.422,3.35,2.451c-1.228,0.947-2.773,1.512-4.454,1.512c-0.291,0-0.575-0.016-0.855-0.049c1.588,1,3.473,1.586,5.498,1.586c6.598,0,10.205-5.379,10.205-10.045c0-0.153-0.003-0.305-0.01-0.456c0.7-0.499,1.308-1.12,1.789-1.827c-0.644,0.28-1.334,0.469-2.06,0.555C17.422,4.782,17.99,4.091,18.258,3.266"
                    ></path>
                  </svg>
                  Twitter
                </a>
                <a href="#">
                  <svg viewBox="0 0 512 512" fill="currentColor">
                    <path d="M181 181h-60v60h60c16.54 0 30-13.46 30-30s-13.46-30-30-30zm0 0M181 271h-60v60h60c16.54 0 30-13.46 30-30s-13.46-30-30-30zm0 0M346 241c-19.555 0-36.238 12.54-42.438 30h84.875c-6.199-17.46-22.882-30-42.437-30zm0 0" />
                    <path d="M436 0H75C33.648 0 0 33.648 0 75v362c0 41.352 33.648 75 75 75h361c41.352 0 76-33.648 76-75V75c0-41.352-34.648-75-76-75zM286 151h120v30H286zm-45 150c0 33.09-26.91 60-60 60H91V151h90c33.09 0 60 26.91 60 60 0 18.008-8.133 33.996-20.73 45 12.597 11.004 20.73 26.992 20.73 45zm180 0H303.562c6.196 17.46 22.883 30 42.438 30 16.012 0 30.953-8.629 38.992-22.516l25.957 15.032C397.58 346.629 372.687 361 346 361c-41.352 0-75-33.648-75-75s33.648-75 75-75 75 33.648 75 75zm0 0" />
                  </svg>
                  Source Code
                </a>
              </div>
            </div>
          </div>
          <div className={styles['main-container']}>
            <div className={styles['main-header']}>
              <a className={styles['menu-link-main']}>Sections</a>
              <div className={styles['header-menu']}>
                <a className={styles['main-header-link']}>Dashboard</a>
                <a className={styles['main-header-link']}>Vaults</a>
                <a className={styles['main-header-link']}>Governance</a>
              </div>
            </div>
            <div className={styles['content-wrapper']}>
              <div className={styles['content-wrapper-header']}>
                <div className={styles['content-wrapper-context']}>
                  <h3 className={styles['img-content']}>Getting Started</h3>
                  <div className={styles['content-text']}>
                    Learning about Y-Foundry DAO can be pretty intense.
                  </div>
                  <button className={styles['content-button']}>
                    Get Started
                  </button>
                </div>
                <img
                  className={styles['content-wrapper-img']}
                  src="https://assets.codepen.io/3364143/glass.png"
                  alt=""
                />
              </div>
              <div className={styles['content-section']}>
                <div className={styles['content-section-title']}>
                  Vaults Available
                </div>
                <PageBody />
              </div>
              <div className={styles['content-section']}>
                <div className={styles['content-section-title']}>
                  Vaults Available
                </div>
                <div className={styles['apps-card']}>
                  <div className={styles['app-card']}>
                    <span>
                      <img
                        src="https://miro.medium.com/fit/c/176/176/1*7Qy05sarfVy_AZcVWAwxpQ.jpeg"
                        width="40px"
                      />
                      Auto-Compounder
                    </span>
                    <div className={styles['app-card__subtext']}>
                      Take a position in the axlUSDC-USDT pool on AstroPort
                    </div>
                    <div className={styles['app-card-buttons']}>
                      <button
                        className={[
                          styles['content-button'],
                          styles['status-button']
                        ].join(' ')}
                      >
                        Learn More
                      </button>
                      <div className={styles.menu}>
                        <button className={styles.dropdown}>
                          <ul>
                            <li>
                              <a href="#">Deposit</a>
                            </li>
                          </ul>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className={styles['app-card']}>
                    <span>
                      <img
                        src="https://assets.website-files.com/611153e7af981472d8da199c/62d8de88b18a3b4713e24eac_01_Luna_icon.svg"
                        width="40px"
                      />
                      Stake and Vote
                    </span>
                    <div className={styles['app-card__subtext']}>
                      Stake LUNA here to earn yield and vote on chain proposals
                    </div>
                    <div className={styles['app-card-buttons']}>
                      <button
                        className={[
                          styles['content-button'],
                          styles['status-button']
                        ].join(' ')}
                      >
                        Learn More
                      </button>
                      <div className={styles.menu}>
                        <button className={styles.dropdown}>
                          <ul>
                            <li>
                              <a href="#">Deposit</a>
                            </li>
                          </ul>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className={styles['app-card']}>
                    <span>
                      <img
                        src="https://pbs.twimg.com/profile_images/1450772842749042705/au7iSAw7_400x400.jpg"
                        width="40px"
                      />
                      TerraBots
                    </span>
                    <div className={styles['app-card__subtext']}>
                      Auto-Compound AstroPort axlUSDC-USDT LP for TerraBots
                    </div>
                    <div className={styles['app-card-buttons']}>
                      <button
                        className={[
                          styles['content-button'],
                          styles['status-button']
                        ].join(' ')}
                      >
                        Deposit
                      </button>
                      <div className={styles.menu}></div>
                    </div>
                  </div>
                </div>
                <div className={styles['content-section']}>
                  <div className={styles['content-section-title']}>
                    Latest Proposals
                  </div>
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
                          className={[
                            styles['status-circle'],
                            styles.green
                          ].join(' ')}
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
                            Adjust your selections for advanced options as
                            desired before continuing.{' '}
                            <a href="#">Learn more</a>
                          </div>
                          <div className={styles['checkbox-wrapper']}>
                            <input
                              type="checkbox"
                              id="check1"
                              className={styles.checkbox}
                            />
                            <label>
                              Import previous settings and preferences
                            </label>
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
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
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
                          className={[
                            styles['status-circle'],
                            styles['green']
                          ].join(' ')}
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
              </div>
            </div>
          </div>
        </div>
        <div className={styles['overlay-app']}></div>
      </div>
    </main>
  );
}
