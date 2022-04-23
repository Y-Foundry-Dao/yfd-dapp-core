import { useEffect, useState } from 'react';
import useQuery from 'utilities/hooks/useQuery';

interface Props {
  position: string;
  contract: string;
}

function PositionInfo({ position, contract }: Props) {
  const { queryPositionState } = useQuery();
  const [positionState, setPositionState] = useState<any>({});
  const getPositionState = async () => {
    if (contract) {
      const state = await queryPositionState(position, contract);
      setPositionState(state);
      return state;
    }

    // return console.log(positionState);
  };
  useEffect(() => {
    getPositionState();
    return () => {
      setPositionState({});
    };
  }, [contract]);

  return (
    <div>
      PositionInfo
      <p>Collateral Value: {positionState.collateral_value_ust} UST</p>
      <p>Asset Value: {positionState.asset_value_ust} UST</p>
      <p>Collateral Ratio: {positionState.collateral_ratio}</p>
    </div>
  );
}

export default PositionInfo;
