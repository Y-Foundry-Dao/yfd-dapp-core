import styles from 'styles/app.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
  regular,
  brands,
  icon
} from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used

import NavLeft from 'components/pageBody/nav/left/menu';

export default function LeftSide() {
  return (
    <div className={styles['left-side']}>
      <NavLeft />
    </div>
  );
}
