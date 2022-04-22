import PositionCard from './PositionCard';

interface Props {
  positions: Array<string>;
}

function Positions({ positions }: Props) {
  return (
    <div>
      {positions.map((position, i) => {
        return (
          <PositionCard key={i} position={position[0]} contract={position[1]} />
        );
      })}
    </div>
  );
}

export default Positions;
