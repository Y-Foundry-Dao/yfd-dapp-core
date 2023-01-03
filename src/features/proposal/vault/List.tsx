import useContractForge from 'hooks/useContractForge';
import VaultProposalListAccordions from './list/list';

function VaultProposals() {
  const { vaultProposals } = useContractForge();
  return (
    <>
      {vaultProposals.length === 0 ? (
        'no proposals'
      ) : (
        <>
          <VaultProposalListAccordions proposals={vaultProposals} />
        </>
      )}
    </>
  );
}

export default VaultProposals;
