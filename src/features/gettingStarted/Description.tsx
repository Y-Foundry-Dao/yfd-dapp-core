import styles from '@scss/app.module.scss';
import imgBot1 from '@images/bots/bot1.png';
import imgBot2 from '@images/bots/bot2.png';
import imgBot3 from '@images/bots/bot3.png';
import { Heading } from '@chakra-ui/react';

export default function GSDescription() {
  return (
    <div className={styles['content-feature-frame']}>
      <div className={styles['content-wrapper-header']}>
        <span className={styles['text-title']}> Description </span>
      </div>
      <div className={[styles['gsBorder'], styles['gsContent']].join(' ')}>
        <p>
          Y-Foundry is a dApp launching on Terra 2 that lets creators propose,
          vote, and build their ideas.
        </p>
        <p>
          Some examples of what can be built with Y-Foundry include strategy
          vaults, NFT collections, dApps, charitable ideas, and even grants for
          open-source development.
        </p>
        <p>
          With Y-Foundry’s decentralized architecture, individuals are able to
          fund each other’s ideas and initiatives without any middlemen.
        </p>
      </div>
    </div>
  );
}
