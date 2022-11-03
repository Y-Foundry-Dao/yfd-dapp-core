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
          <Heading as="h2" size="lg">
            Current Vault Proposals
          </Heading>
          <VaultProposalListAccordions proposals={vaultProposals} />
        </>
      )}
    </>
  );
}

export default VaultProposals;
