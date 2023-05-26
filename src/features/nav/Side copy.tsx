import Personal from './side/personal';
import Initiatives from './side/initiatives';
import MenuGovernance from './side/governance';
import AboutYFD from './side/aboutYFD';
import Footer from './side/footer';
import styles from '@scss/app.module.scss';

export default function MenuLeft() {
  return (
    <>
      <div className={styles.wrapperSide}>
        <Personal />
        <Initiatives />
        <MenuGovernance />
        <AboutYFD />
      </div>
      <Footer />
    </>
  );
}
