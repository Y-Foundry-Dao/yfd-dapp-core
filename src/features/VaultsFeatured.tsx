import styles from '@scss/app.module.scss';

export default function VaultsFeatured() {
  return (
    <>
      <div className={styles['content-section']}>
        <fieldset className={styles.popoverActionsSection} role="presentation">
          <legend className={styles.headingLegend} role="presentation">
            <h2>Vaults</h2>
          </legend>
          <div className={styles['apps-card']}>
            <div className={styles['app-card']}>
              <span>
                <img src="https://miro.medium.com/fit/c/176/176/1*7Qy05sarfVy_AZcVWAwxpQ.jpeg" />
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
                <img src="https://assets.website-files.com/611153e7af981472d8da199c/62d8de88b18a3b4713e24eac_01_Luna_icon.svg" />
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
                <img src="https://pbs.twimg.com/profile_images/1450772842749042705/au7iSAw7_400x400.jpg" />
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
                  Learn More
                </button>
                <div className={styles.menu}></div>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
    </>
  );
}
