import { useRecoilValue } from 'recoil';
import styles from '@scss/app.module.scss';
import Header from '@layouts/Header';
import LayoutLeft from '@layouts/Side';
import MainContainer from '@layouts/Main';
import MakeSnow from '@components/Snow';
import MakeSpark from '@components/Spark';
import { snowState, sparkState } from '@recoil/profile/atoms';
import BlockHeight from '@components/current/BlockHeightLayout';
import 'material-symbols';

export default function App() {
  const snow = useRecoilValue(snowState);
  const spark = useRecoilValue(sparkState);
  return (
    <>
      {snow ? <MakeSnow /> : null}
      {spark ? <MakeSpark /> : null}
      <div className={styles.app}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.wrapper}>
          <LayoutLeft />
          <MainContainer />
        </div>
        <div className={styles.appOverlay}></div>
      </div>
      <BlockHeight />
    </>
  );
}
