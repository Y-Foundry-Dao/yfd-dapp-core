import { useState } from 'react';

import { MsgExecuteContract } from '@terra-money/terra.js';

import socialInfo from 'utilities/socialInfo';

import HeaderBar from 'components/navigation/headerBar/HeaderBar';
import ConnectButton from 'components/buttons/ConnectButton';
import DepositButton from 'components/buttons/deposit/DepositButton';
import FooterBar from 'components/footer/footerBar/FooterBar';

import yLogo from 'assets/yfd/logo-orange.svg';
import longLogo from 'assets/yfd/logo-horizontal-orange-white.svg';
import useContract from 'utilities/hooks/useContract';
import useWalletAddress from 'utilities/hooks/useWalletAddress';
import { MBTC, MBTC_UST } from 'utilities/variables';
import useInstantiateContract from 'utilities/hooks/useInstantiateContract';

const msgQuery = {
  deposit: {
    loops: '3',
    asset: MBTC,
    asset_pair: MBTC_UST,
    collateral_ratio: '2.5'
  }
};

export default function App() {
  const [contract, setContract] = useState(
    'terra1vczcg64dm6aekryfyq9x09p26nn6k6xwzpwml7'
  );
  const { walletAddress } = useWalletAddress();
  const { executeMsg, clearTx, tx } = useContract();

  const { instantiateContract, txResult } = useInstantiateContract();

  const msg = new MsgExecuteContract(walletAddress, contract, msgQuery, {
    uusd: 50000000
  });

  return (
    <main>
      <HeaderBar
        id="home"
        src={yLogo}
        alt="Y Logo"
        navLinks={['about', 'medium', 'join community', 'roadmap']}
      />
      <ConnectButton />
      <br></br>
      <br></br>
      <br></br>
      <button onClick={() => instantiateContract()}>
        Instantiate Smart Contract
      </button>
      <a
        href={`https://finder.terra.money/testnet/tx/${txResult?.txhash}`}
        target="_blank"
        rel="noreferrer"
      >
        {txResult?.txhash}
      </a>
      <label htmlFor="contractAddress">
        Contract Address
        <input
          id="contractAddress"
          type="text"
          value={contract}
          onChange={(event) => setContract(event.currentTarget.value)}
        />
      </label>
      <p>Current Contract Address: {contract}</p>
      <br></br>
      <DepositButton
        children="open position"
        disabled={false}
        onClick={async () => {
          return await executeMsg(msg);
        }}
      />
      <button onClick={() => clearTx()}>clear tx hash</button>
      <a
        href={`https://finder.terra.money/testnet/tx/${tx}`}
        target="_blank"
        rel="noreferrer"
      >
        {tx}
      </a>
      <FooterBar logo={longLogo} alt="YFD Logo" socialInfo={socialInfo} />
    </main>
  );
}
