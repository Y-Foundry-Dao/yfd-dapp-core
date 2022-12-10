import styles from '@scss/app.module.scss';
import NavMain from '@features/nav/main/menu';
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
