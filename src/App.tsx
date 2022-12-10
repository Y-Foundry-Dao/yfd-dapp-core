import React from 'react';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

import styles from '@styleApp/app.module.scss';
import Header from '@components/header/Header';
import BackgroundVideo from 'components/basic/BackgroundVideo';
//import ThemeToggle from 'components/basic/ThemeToggle';
import LeftSide from '@components/pageBody/LeftSide';
import MainContainer from '@components/pageBody/MainContainer';
import { CHAIN_BLOCK_EIGHTEEN_MONTH } from '@var/chrono';

const emotionCache = createCache({
  key: 'emotion-css-cache',
  prepend: true // ensures styles are prepended to the <head>, instead of appended
});

export default function App() {
  alert(CHAIN_BLOCK_EIGHTEEN_MONTH);
  return (
    <CacheProvider value={emotionCache}>
      <main>
        <div className={styles.app}>
          <div className={styles.header}>
            <Header />
          </div>
          <div className={styles.wrapper}>
            <LeftSide />
            <MainContainer />
          </div>
          <div className={styles['overlay-app']}></div>
        </div>
      </main>
    </CacheProvider>
  );
}
