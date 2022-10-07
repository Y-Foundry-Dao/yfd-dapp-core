import useContractYFD from 'hooks/useContractYFD';
import convertFromBase from 'utilities/converters/convertFromBase';

function BalanceYFD() {
  const { tokenBalance } = useContractYFD();

  return <>Balance YFD: {convertFromBase(Number(tokenBalance)).toFixed(5)}</>;
}

export default BalanceYFD;
