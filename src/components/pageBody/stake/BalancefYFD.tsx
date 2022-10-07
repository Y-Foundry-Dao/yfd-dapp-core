import useContractForge from 'hooks/useContractForge';
import convertFromBase from 'utilities/converters/convertFromBase';

function BalancefYFD() {
  const { tokenBalance } = useContractForge();

  return (
    <div>Balance fYFD: {convertFromBase(Number(tokenBalance)).toFixed(5)}</div>
  );
}

export default BalancefYFD;
