import styles from '@scss/app.module.scss';
import styleTL from '@scss/timeline.module.scss';

import imgBot1 from '@images/bots/bot1.png';
import imgBot2 from '@images/bots/bot2.png';
import imgBot3 from '@images/bots/bot3.png';
import { Flex, Box, Heading, Spacer } from '@chakra-ui/react';

export default function GSFeatures() {
  return (
    <div className={styles['content-feature-frame']}>
      <div className={styles['heading']}>Key Features</div>
      <div className={styleTL.timeline}>
        <div
          className={[
            styleTL.timeline__event,
            styleTL['timeline__event--type1']
          ].join(' ')}
        >
          <div className={styleTL.timeline__event__icon}>
            <i className="material-symbols-outlined">campaign</i>
          </div>
          <div className={styleTL.timeline__event__date}></div>
          <div className={styleTL.timeline__event__content}>
            <div className={styleTL.timeline__event__title}>Propose</div>
            <div className={styleTL.timeline__event__description}>
              <p>
                Submit your ideas as proposals and build them with the support
                of the YFD community.
              </p>
            </div>
          </div>
        </div>
        <div
          className={[
            styleTL.timeline__event,
            styleTL['timeline__event--type2']
          ].join(' ')}
        >
          <div className={styleTL.timeline__event__icon}>
            <i className="material-symbols-outlined">how_to_vote</i>
          </div>
          <div className={styleTL.timeline__event__date}></div>
          <div className={styleTL.timeline__event__content}>
            <div className={styleTL.timeline__event__title}>Govern</div>
            <div className={styleTL.timeline__event__description}>
              <p>
                Exert your voice as a member of the protocol, participate in the
                governance and safekeeping of the platform.
              </p>
            </div>
          </div>
        </div>
        <div
          className={[
            styleTL.timeline__event,
            styleTL['timeline__event--type3']
          ].join(' ')}
        >
          <div className={styleTL.timeline__event__icon}>
            <i className="material-symbols-outlined">device_hub</i>
          </div>
          <div className={styleTL.timeline__event__date}></div>
          <div className={styleTL.timeline__event__content}>
            <div className={styleTL.timeline__event__title}>Support</div>
            <div className={styleTL.timeline__event__description}>
              <p>
                Select and fund proposals of other users, and share in the
                success of the finished project.
              </p>
            </div>
          </div>
        </div>
        <div
          className={[
            styleTL.timeline__event,
            styleTL['timeline__event--type1']
          ].join(' ')}
        >
          <div className={styleTL.timeline__event__icon}>
            <i className="material-symbols-outlined">handyman</i>
          </div>
          <div className={styleTL.timeline__event__date}></div>
          <div className={styleTL.timeline__event__content}>
            <div className={styleTL.timeline__event__title}>Build</div>
            <div className={styleTL.timeline__event__description}>
              <p>
                Bring your skills and expertise to bear on the needs of the
                community, receive payments secured by smart contracts, and earn
                reputation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
