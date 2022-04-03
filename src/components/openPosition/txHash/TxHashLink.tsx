interface Props {
  txHash: string | undefined;
}

function TxHashLink({ txHash }: Props) {
  return (
    <a
      href={`https://finder.terra.money/testnet/tx/${txHash}`}
      target="_blank"
      rel="noreferrer"
    >
      {txHash}
    </a>
  );
}

export default TxHashLink;
