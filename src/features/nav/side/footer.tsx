import styles from '@scss/app.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { URL_DISCORD, URL_GITHUB, URL_TWITTER } from '@var/links';

export default function MenuLeftFooter() {
  return (
    <>
      <div className={styles['footer-menu']}>
        <a href={URL_DISCORD} target="_blank">
          <FontAwesomeIcon icon={brands('discord')} />
        </a>
        <a href={URL_TWITTER} target="_blank">
          <FontAwesomeIcon icon={brands('twitter')} />
        </a>
        <a href={URL_GITHUB} target="_blank">
          <FontAwesomeIcon icon={brands('github')} />
        </a>
      </div>
    </>
  );
}
