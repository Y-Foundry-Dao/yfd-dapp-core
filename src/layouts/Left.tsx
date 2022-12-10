import styles from '@scss/app.module.scss';
import NavLeft from '@features/nav/left/menu';

export default function layoutLeft() {
  return (
    <div className={styles['left-side']}>
      <NavLeft />
    </div>
  );
}
