import { useRecoilValue } from 'recoil';
import styles from '@scss/app.module.scss';
import Header from '@layouts/Header';
import LayoutLeft from '@layouts/Side';
import MainContainer from '@layouts/Main';
import MakeSnow from '@components/Snow';
import { snowState } from '@recoil/profile/atoms';
import { WEBHOOK_PROPOSALS_ALL, WEBHOOK_FEEDBACK } from '@var/discord';

export default function App() {
  const snow = useRecoilValue(snowState);
  console.log('feedback api: ', WEBHOOK_PROPOSALS_ALL);
  console.log('proposal api: ', WEBHOOK_FEEDBACK);

  return (
    <>
      {snow ? <MakeSnow /> : null}
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
