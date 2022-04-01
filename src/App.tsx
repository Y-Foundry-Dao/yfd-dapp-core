import socialInfo from 'utilities/socialInfo';

import HeaderBar from 'components/navigation/headerBar/HeaderBar';
import ConnectButton from 'components/buttons/ConnectButton';
import DepositButton from 'components/buttons/deposit/DepositButton';
import FooterBar from 'components/footer/footerBar/FooterBar';

import yLogo from 'assets/yfd/logo-orange.svg';
import longLogo from 'assets/yfd/logo-horizontal-orange-white.svg';
import useInstantiateContract from 'utilities/hooks/useInstantiateContract';
import { useEffect } from 'react';

export default function App() {
  const {
    instantiateContract,
    txHashInstantiate,
    contract,
    setContract,
    txHashDeposit,
    setTxHashDeposit
  } = useInstantiateContract();

  useEffect(() => {
    if (!txHashDeposit) {
      return;
    } else {
      console.log(txHashDeposit);
      return setTxHashDeposit(txHashDeposit);
    }
  }, [txHashDeposit]);

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
      <p>tx for contract instantiation</p>
      <a
        href={`https://finder.terra.money/testnet/tx/${txHashInstantiate?.txhash}`}
        target="_blank"
        rel="noreferrer"
      >
        {txHashInstantiate?.txhash}
      </a>
      <br></br>
      <br></br>

      <br></br>
      <p>tx for deposit</p>
      <a
        href={`https://finder.terra.money/testnet/tx/${txHashDeposit}`}
        target="_blank"
        rel="noreferrer"
      >
        {txHashDeposit}
      </a>
      <br></br>
      <br></br>
      <DepositButton
        children="open position"
        disabled={false}
        onClick={async () => {
          return await instantiateContract();
        }}
      />
      <FooterBar logo={longLogo} alt="YFD Logo" socialInfo={socialInfo} />
    </main>
  );
}
