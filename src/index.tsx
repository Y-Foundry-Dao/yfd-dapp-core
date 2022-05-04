import ReactDOM from 'react-dom';
import App from 'App';
import { getChainOptions, WalletProvider } from '@terra-money/wallet-provider';
import GlobalCss from 'styles/global.css';
import ThemeComponent from 'styles/ThemeComponent';
import { RecoilRoot } from 'recoil';

getChainOptions().then((chainOptions) => {
  ReactDOM.render(
    <WalletProvider {...chainOptions}>
      <ThemeComponent>
        <GlobalCss />
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </ThemeComponent>
    </WalletProvider>,
    document.getElementById('root')
  );
});
