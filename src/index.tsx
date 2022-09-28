import { createRoot } from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { getChainOptions, WalletProvider } from '@terra-money/wallet-provider';
import { ChakraProvider } from '@chakra-ui/react';
import { SaasProvider } from '@saas-ui/react';

import App from 'App';
import GlobalCss from 'styles/global.css';
import ThemeComponent from 'styles/ThemeComponent';

const container = document.getElementById('root');
const root = createRoot(container!);

getChainOptions().then((chainOptions) => {
  root.render(
    <WalletProvider {...chainOptions}>
      {/* <ThemeComponent> */}
      <SaasProvider>
        {/* <GlobalCss /> */}
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </SaasProvider>
      {/* </ThemeComponent> */}
    </WalletProvider>
  );
});
