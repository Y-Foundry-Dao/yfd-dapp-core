import Header from 'components/header/Header';
import PageBody from 'components/pageBody/PageBody';
import Footer from 'components/footer/Footer';
import BackgroundVideo from 'components/basic/BackgroundVideo';
import ThemeToggle from 'components/basic/ThemeToggle';

import styles from 'styles/app.module.scss';

export default function App() {
  return (
    <main>
      <BackgroundVideo />
      <div className={styles.app}>
        <div className={styles.Header}>
          <Header />
        </div>
        <div className={styles['left-side']}>Leftside here</div>
        <div className={styles['content-wrapper']}>
          <PageBody />
        </div>
        <Footer />
      </div>
      <ThemeToggle />
    </main>
  );
}
