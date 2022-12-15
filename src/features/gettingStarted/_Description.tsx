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

        <p>
          Using a smart contracts, Y-Foundry enables secure and trustless
          collaboration between parties:{' '}
        </p>
        <ul className={styles.listFrame}>
          <li>
            Proposers bring ideas to the platform that they’d like to see built,
            whether that’s a strategy vault, business endeavor, creative
            project, or open-source software.
          </li>
          <li>
            Supporters can choose to fund any ideas that they like, and be as
            involved or as passive as they like in the actual process of
            building out the project.
          </li>
          <li>
            Builders of all kinds: Developers, UI/UX, creatives, spreadsheet
            masters and more can contribute to projects with their special
            skills and expertise and receive payment from the projects they
            contribute to.
          </li>
          <li>
            DAO members oversee the platform, giving their approval or
            non-approval to projects. They can also actively monitor and stop
            any fraudulent activity that they see going on with emergency
            voting. Meanwhile, other passive measures such as collateral
            requirements and community whitelisting fights fraud and collusion.
          </li>
        </ul>
        <p>
          This fair, secure, and transparent process of turning ideas into
          reality is what drives the best talent and ideas on the market to
          Y-Foundry DAO, giving users and builders the tools to build the
          projects of their choice.
        </p>
      </div>
    </div>
  );
}
