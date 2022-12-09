import styles from 'styles/app.module.scss';
import imgBot1 from 'assets/bots/bot1.png';
import imgBot2 from 'assets/bots/bot2.png';
import imgBot3 from 'assets/bots/bot3.png';

export default function GettingStarted() {
  return (
    <div className={styles['content-section']}>
      <div className={styles['div-full']}>
        <div className={styles['content-wrapper-header']}>
          <div className={styles['content-wrapper-context']}>
            <h3 className={styles['img-content']}>Getting Started</h3>
            <div className={styles['content-text']}>
              Learning about
              <span className={styles['text-enhanced']}> Y-Foundry DAO </span>
              can be intense.
              <br />
              Don't worry. The
              <span className={styles['text-enhanced']}> FoundryBots </span>
              are here to help.
            </div>
            <button className={styles['content-button']}>Get Started</button>
          </div>
          <img
            className={styles['getting-started-img']}
            src={imgBot3}
            alt="Beep"
          />
          <img
            className={styles['getting-started-img']}
            src={imgBot2}
            alt="Beep"
          />
          <img
            className={styles['getting-started-img']}
            src={imgBot1}
            alt="Boop"
          />
        </div>
      </div>
    </div>
  );
}
