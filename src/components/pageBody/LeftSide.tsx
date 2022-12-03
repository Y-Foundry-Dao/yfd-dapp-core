import styles from 'styles/app.module.scss';
import NavLeft from 'components/pageBody/nav/left/menu';

export default function LeftSide() {
  return (
    <div className={styles['left-side']}>
      <NavLeft />
    </div>
  );
}
