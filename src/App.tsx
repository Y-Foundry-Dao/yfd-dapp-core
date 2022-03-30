import { useEffect, useState } from 'react';

import HeaderBar from 'components/navigation/headerBar/HeaderBar';
import yLogo from 'assets/yfd/logo-orange.svg';
import longLogo from 'assets/yfd/logo-horizontal-orange-white.svg';
import FooterBar from 'components/footer/footerBar/FooterBar';
import socialInfo from 'utilities/socialInfo';
import ConnectButton from 'components/buttons/ConnectButton';
import ConnectedInfo from 'components/buttons/ConnectedInfo';
import DepositButton from 'components/buttons/deposit/DepositButton';
import { useWallet, TxResult } from '@terra-money/wallet-provider';
import { MsgExecuteContract } from '@terra-money/terra.js';

const msgQuery = {
  deposit: {
    loops: '3',
    asset: 'terra1csr22xvxs6r3gkjsl7pmjkmpt39mwjsrm0e2r8',
    asset_pair: 'terra134jl4dt20mqfryhnmhauryr754vuw7990jdell',
    collateral_ratio: '2.5'
  }
};

export default function App() {
  const [walletAddress, setWalletAddress] = useState('');
  const [tx, setTx] = useState('');
  const [contract, setContract] = useState(
    'terra1vczcg64dm6aekryfyq9x09p26nn6k6xwzpwml7'
  );

  const { post, status, wallets } = useWallet();

  useEffect(() => {
    if (status == 'WALLET_CONNECTED') {
      setWalletAddress(wallets[0]?.terraAddress);
    }
  }, [status, walletAddress, wallets]);

  const depositUst = new MsgExecuteContract(walletAddress, contract, msgQuery, {
    uusd: 150000000
  });

  const callback = async () => {
    try {
      const result: TxResult = await post({ msgs: [depositUst] });
      setTx(result.result.txhash);
      return result.result.txhash;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <HeaderBar
        id="home"
        src={yLogo}
        alt="Y Logo"
        navLinks={['about', 'medium', 'join community', 'roadmap']}
      />
      <ConnectedInfo />
      <ConnectButton />
      <DepositButton
        children="open position"
        disabled={false}
        onClick={async () => {
          return callback();
        }}
      />
      <FooterBar logo={longLogo} alt="YFD Logo" socialInfo={socialInfo} />
    </main>
  );
}
