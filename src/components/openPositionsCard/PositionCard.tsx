interface Props {
  contract: string;
}

function PositionCard({ contract }: Props) {
  return <div>{contract}</div>;
}

export default PositionCard;
