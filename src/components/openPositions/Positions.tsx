import React from 'react';
import PositionCard from './PositionCard';

interface Props {
  positions: Array<string>;
}

function Positions({ positions }: Props) {
  return (
    <div>
      {/* <PositionCard /> */}
      {positions.map((position, i) => {
        // return <p key={i}>{position}</p>;
        return <PositionCard key={i} position={position} />;
      })}
    </div>
  );
}

export default Positions;
