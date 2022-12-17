import styles from '@scss/app.module.scss';
import Header from '@layouts/Header';
import LayoutLeft from '@layouts/Left';
import MainContainer from '@layouts/Main';
import MakeSnow from '@components/Snow';

export default function App() {
  return (
    <>
      <MakeSnow />
      <div className={styles.app}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.wrapper}>
          <LayoutLeft />
          <MainContainer />
        </div>
        <div className={styles['overlay-app']}></div>
      </div>
    </>
  );
}
