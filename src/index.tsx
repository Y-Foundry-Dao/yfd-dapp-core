import { createRoot } from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { getChainOptions, WalletProvider } from '@terra-money/wallet-provider';
import { BrowserRouter } from 'react-router-dom';

import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

import AppLayout from '@layouts/App';

const emotionCache = createCache({
  key: 'emotion-css-cache',
  prepend: true // ensures styles are prepended to the <head>, instead of appended
});

// theme styling of UI
import { extendTheme } from '@chakra-ui/react';
import { baseTheme, SaasProvider } from '@saas-ui/react';
import '@csstools/normalize.css';
import yfdTheme from '@themes/yfd';
import resetTheme from '@themes/reset';

const theme = extendTheme(yfdTheme, resetTheme, baseTheme);

const container = document.getElementById('root');
const root = createRoot(container!);

getChainOptions().then((chainOptions) => {
  root.render(
    <WalletProvider {...chainOptions}>
      <SaasProvider theme={theme}>
        <RecoilRoot>
          <BrowserRouter>
            <CacheProvider value={emotionCache}>
              <main>
                <AppLayout />
              </main>
            </CacheProvider>
          </BrowserRouter>
        </RecoilRoot>
      </SaasProvider>
    </WalletProvider>
  );
});
