import styles from '@scss/side.module.scss';
import NavLeft from '@features/nav/Side';

export default function layoutLeft() {
  return (
    <div className={styles.sideLeft}>
      <NavLeft />
    </div>
  );
}
