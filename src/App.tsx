import { useState } from 'react';

import socialInfo from 'utilities/socialInfo';
import useInstantiateContract from 'utilities/hooks/useInstantiateContract';

import HeaderBar from 'components/navigation/headerBar/HeaderBar';
import ConnectButton from 'components/buttons/ConnectButton';
import DepositButton from 'components/buttons/deposit/DepositButton';
import FooterBar from 'components/footer/footerBar/FooterBar';

import yLogo from 'assets/yfd/logo-orange.svg';
import longLogo from 'assets/yfd/logo-horizontal-orange-white.svg';

import TxHashLink from 'components/openPosition/txHash/TxHashLink';
import InputContract from 'components/openPosition/input/InputContract';
import InputAmount from 'components/openPosition/input/InputAmount';

export default function App() {
  const [amount, setAmount] = useState<number>(0);
  const {
    instantiateContract,
    txHashFromInstantiate,
    contract,
    setContract,
    txHashFromExecute
  } = useInstantiateContract();

  return (
    <main>
      <HeaderBar
        id="home"
        src={yLogo}
        alt="Y Logo"
        navLinks={['about', 'medium', 'join community', 'roadmap']}
      />
      <ConnectButton />
      <InputContract contract={contract} setContract={setContract} />
      <p>Current Contract Address: {contract}</p>
      <p>tx for contract instantiation</p>
      <TxHashLink txHash={txHashFromInstantiate?.txhash} />
      <p>tx for deposit</p>
      <TxHashLink txHash={txHashFromExecute} />
      <InputAmount amount={amount} setAmount={setAmount} />
      <DepositButton
        children="open position"
        disabled={false}
        onClick={async () => {
          return await instantiateContract(amount);
        }}
      />
      <FooterBar logo={longLogo} alt="YFD Logo" socialInfo={socialInfo} />
    </main>
  );
}
