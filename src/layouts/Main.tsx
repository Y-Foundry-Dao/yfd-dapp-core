import styles from '@scss/wrapper.module.scss';
import NavMain from '@features/nav/Main';
import MainRoutes from '@routes/Main';

export default function layoutMain() {
  return (
    <div className={styles['main-container']}>
      <NavMain />
      <div className={styles['content-wrapper']}>
        <MainRoutes />
      </div>
    </div>
  );
}
