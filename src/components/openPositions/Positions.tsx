import styled from 'styled-components';
import PositionCard from './PositionCard';

interface Props {
  positions: Array<string>;
}

function Positions({ positions }: Props) {
  return (
    <OpenPositions>
      {positions.map((position, i) => {
        return (
          <PositionCard key={i} position={position[0]} contract={position[1]} />
        );
      })}
    </OpenPositions>
  );
}

const OpenPositions = styled.div`
  display: flex;
  width: 100%;
`;

export default Positions;
