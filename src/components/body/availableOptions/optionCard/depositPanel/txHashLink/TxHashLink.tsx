import styled from 'styled-components';

interface Props {
  txHash: string | undefined;
}

function TxHashLink({ txHash }: Props) {
  return (
    <A
      href={`https://terrasco.pe/testnet/tx/${txHash}`}
      target="_blank"
      rel="noreferrer"
    >
      {txHash}
    </A>
  );
}

const A = styled.a`
  text-overflow: ellipsis;
  overflow: hidden;
`;

export default TxHashLink;
