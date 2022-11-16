import Header from 'components/header/Header';
import PageBody from 'components/pageBody/PageBody';
import Footer from 'components/footer/Footer';
import BackgroundVideo from 'components/basic/BackgroundVideo';
import ThemeToggle from 'components/basic/ThemeToggle';
import styles from 'styles/app.module.scss';

export default function App() {
  return (
    <main>
      <BackgroundVideo />
      <div className={styles.app}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={'styles.wrapper'}>
          <div className={styles['left-side']}>
            <div className={styles['side-wrapper']}>
              <div className={styles['side-title']}>Personal</div>
              <div className={styles['side-menu']}>Dashboard</div>
            </div>
            <div className={styles['side-wrapper']}>
              <div className={styles['side-title']}>Vaults</div>
              <div className={styles['side-menu']}>All</div>
            </div>
          </div>
          <div className={styles['side-wrapper']}>
            <div className={styles['side-title']}>Governance</div>
            <div className={styles['side-menu']}>
              <a href="#">fYFD Deposits</a>
              <br />
              Governance Proposals
              <br />
              Vault Proposals
              <br />
            </div>
          </div>
          <div className={styles['side-wrapper']}>
            <div className={styles['side-title']}>About Y-Foundry DAO</div>
            <div className={styles['side-menu']}>Getting Started</div>
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
                  <button>Learn More</button>
                </div>
              </div>
              <img
                className={styles['content-wrapper-img']}
                src="https://assets.codepen.io/3364143/glass.png"
                alt=""
              />
            </div>
            <div className={styles['content-section']}>
              <div className={styles['content-section-title']}>Title</div>
              <div className={styles['apps-card']}>
                <div className={styles['app-card']}>app card here</div>
                <div className={styles['app-card']}>app card here</div>
                <div className={styles['app-card']}>app card here</div>
              </div>
              <div className={styles['content-section']}>
                <PageBody />
              </div>
              <div className={styles['content-section']}>
                <Footer />
              </div>
            </div>
          </div>
        </div>
        <div className={styles['overlay-app']}></div>
      </div>
      <ThemeToggle />
    </main>
  );
}
