import { Link } from 'react-router-dom';
import styles from '@scss/app.module.scss';
import imgBot1 from '@images/bots/bot1.png';
import imgBot2 from '@images/bots/bot2.png';
import imgBot3 from '@images/bots/bot3.png';

export default function GettingStarted() {
  return (
    <div className={styles['content-section']}>
      <div className={styles['div-full']}>
        <div className={styles['content-wrapper-header']}>
          <div className={styles['content-wrapper-context']}>
            <h3 className={styles.imgContent}>Getting Started</h3>
            <div className={styles['content-text']}>
              Learning about
              <span className={styles['text-enhanced']}> Y-Foundry DAO </span>
              can be intense.
              <br />
              Don't worry. The
              <span className={styles['text-enhanced']}> FoundryBots </span>
              are here to help.
            </div>
            <Link to="/getting-started">
              <button className={styles['content-button']}>Get Started</button>
            </Link>
          </div>
          <img
            className={styles['getting-started-img']}
            src={imgBot3}
            alt="Beep"
          />
          <img
            className={styles['getting-started-img-two']}
            src={imgBot2}
            alt="Beep"
          />
          <img
            className={styles['getting-started-img-three']}
            src={imgBot1}
            alt="Boop"
          />
        </div>
      </div>
    </div>
  );
}
