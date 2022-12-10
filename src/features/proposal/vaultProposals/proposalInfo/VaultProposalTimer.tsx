import useVaultProposalInfo from 'hooks/useVaultProposalInfo';

function VaultProposalTimer({ vaultProposalInfo }: any) {
  const { timeUntilVoteClosed } = useVaultProposalInfo({
    vaultProposalInfo
  });
  return (
    <div>
      Time Until Voting Complete: <>{timeUntilVoteClosed}</>
    </div>
  );
}

export default VaultProposalTimer;
