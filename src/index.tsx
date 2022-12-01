import { createRoot } from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { getChainOptions, WalletProvider } from '@terra-money/wallet-provider';

// theme styling of UI
import '@csstools/normalize.css';
import { extendTheme } from '@chakra-ui/react';
import { baseTheme, SaasProvider } from '@saas-ui/react';

import App from 'App';
import primaryTheme from 'styles/theme';

const cleanTheme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: ''
      }
    })
  }
});

const theme = extendTheme({}, primaryTheme, cleanTheme, baseTheme);

const container = document.getElementById('root');
const root = createRoot(container!);

getChainOptions().then((chainOptions) => {
  root.render(
    <WalletProvider {...chainOptions}>
      <SaasProvider theme={theme}>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </SaasProvider>
    </WalletProvider>
  );
});
