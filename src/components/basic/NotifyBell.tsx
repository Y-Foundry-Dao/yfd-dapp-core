import styles from 'styles/app.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
  regular,
  brands,
  icon
} from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used

export default function NotifyBell() {
  return (
    <div className={styles.notification}>
      <span className={styles['notification-number']}>3</span>
      <FontAwesomeIcon icon={solid('bell')} />
    </div>
  );
}
