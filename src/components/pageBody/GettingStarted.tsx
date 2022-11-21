import styles from 'styles/app.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
  regular,
  brands,
  icon
} from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used
import yLogo from 'assets/yfd/logo-orange.svg';
import { Image } from '@chakra-ui/react';

export default function GettingStarted() {
  return (
    <div className={styles['content-wrapper-header']}>
      <div className={styles['content-wrapper-context']}>
        <h3 className={styles['img-content']}>Getting Started</h3>
        <div className={styles['content-text']}>
          Learning about Y-Foundry DAO can be pretty intense.
        </div>
        <button className={styles['content-button']}>Get Started</button>
      </div>
      <img
        className={styles['getting-started-img']}
        src={yLogo}
        alt="Y-Foundry Logo"
      />
    </div>
  );
}
