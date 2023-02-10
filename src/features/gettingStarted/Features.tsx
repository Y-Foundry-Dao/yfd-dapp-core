import styles from '@scss/app.module.scss';
import { Icons } from '@var/icons';

export default function GSFeatures() {
  return (
    <div className={styles['content-feature-frame']}>
      <div className={styles['heading']}>Key Features</div>
      <div className={styles.timeline}>
        <div
          className={[
            styles.timeline__event,
            styles['timeline__event--type1']
          ].join(' ')}
        >
          <div className={styles.timeline__event__icon}>
            <i className="material-symbols-outlined">{Icons.propose}</i>
          </div>
          <div className={styles.timeline__event__date}></div>
          <div className={styles.timeline__event__content}>
            <div className={styles.timeline__event__title}>Propose</div>
            <div className={styles.timeline__event__description}>
              Submit your ideas as proposals and build them with the support of{' '}
              <span className={styles.textSpecial}>
                free-market grants and initiatives
              </span>{' '}
              by the YFD community.
            </div>
          </div>
        </div>
        <div
          className={[
            styles.timeline__event,
            styles['timeline__event--type2']
          ].join(' ')}
        >
          <div className={styles.timeline__event__icon}>
            <i className="material-symbols-outlined">{Icons.vote}</i>
          </div>
          <div className={styles.timeline__event__date}></div>
          <div className={styles.timeline__event__content}>
            <div className={styles.timeline__event__title}>Govern</div>
            <div className={styles.timeline__event__description}>
              Exert your voice as a member of the protocol, participate in the
              governance and safekeeping of the platform.
            </div>
          </div>
        </div>
        <div
          className={[
            styles.timeline__event,
            styles['timeline__event--type3']
          ].join(' ')}
        >
          <div className={styles.timeline__event__icon}>
            <i className="material-symbols-outlined">{Icons.support}</i>
          </div>
          <div className={styles.timeline__event__date}></div>
          <div className={styles.timeline__event__content}>
            <div className={styles.timeline__event__title}>Support</div>
            <div className={styles.timeline__event__description}>
              Connect talent and ideas by funding the proposals of other
              users.Share in the success of the finished projects that{' '}
              <span className={styles.textSpecial}>
                accelerate ecosystem expansion across the Cosmos.
              </span>
            </div>
          </div>
        </div>
        <div
          className={[
            styles.timeline__event,
            styles['timeline__event--type1']
          ].join(' ')}
        >
          <div className={styles.timeline__event__icon}>
            <i className="material-symbols-outlined">{Icons.build}</i>
          </div>
          <div className={styles.timeline__event__date}></div>
          <div className={styles.timeline__event__content}>
            <div className={styles.timeline__event__title}>Build</div>
            <div className={styles.timeline__event__description}>
              Bring your skills and expertise to bear on the needs of the
              community, receive payments secured by smart contracts, and earn
              reputation through{' '}
              <span className={styles.textSpecial}>
                open-source, transparent, and auditable
              </span>{' '}
              solutions.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
