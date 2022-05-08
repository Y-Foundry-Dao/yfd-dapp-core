import { useEffect, useState } from 'react';
import useQuery from 'utilities/hooks/useQuery';
import styled from 'styled-components';

interface Props {
  position: string;
  contract: string;
}

function PositionInfo({ position, contract }: Props) {
  const { queryPositionState } = useQuery();
  const [positionState, setPositionState] = useState<any>({});
  const getPositionState = async () => {
    if (position) {
      const state = await queryPositionState(position, contract);
      setPositionState(state);
      return state;
    }
  };
  useEffect(() => {
    getPositionState();
    return () => {
      setPositionState({});
    };
  }, [contract]);

  return (
    <div>
      <StylizedTable>
        <tr>
          <StylizedTd>Collateral Value:</StylizedTd>
          <td></td>
        </tr>
        <tr>
          <td colSpan={2}>{positionState.collateral_value_ust} UST</td>
        </tr>
        <tr>
          <StylizedTd>Asset Value:</StylizedTd>
          <td></td>
        </tr>
        <tr>
          <td colSpan={2}>{positionState.asset_value_ust} UST</td>
        </tr>
        <tr>
          <StylizedTd>Collateral Ratio:</StylizedTd>
          <td></td>
        </tr>
        <tr>
          <td colSpan={2}>{positionState.collateral_ratio}</td>
        </tr>
      </StylizedTable>
    </div>
  );
}

const StylizedTable = styled.table`
  text-align: left;
  margin-bottom: 20px;
  margin-left: 30px;
`;

const StylizedTd = styled.td`
  color: ${(props) => `${props.theme.colors.color3}`};
  padding-top: 15px;
  text-align: left;
`;

export default PositionInfo;
