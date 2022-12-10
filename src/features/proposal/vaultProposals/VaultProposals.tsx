import { Heading } from '@chakra-ui/react';
import useContractForge from 'hooks/useContractForge';
import React from 'react';
import VaultProposalListAccordions from './proposalList/VaultProposalListAccordions';

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
