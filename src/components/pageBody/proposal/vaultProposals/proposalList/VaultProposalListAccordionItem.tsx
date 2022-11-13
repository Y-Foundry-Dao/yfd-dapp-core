import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  HStack,
  Text
} from '@chakra-ui/react';
import FinderContractLink from 'components/basic/finder/FinderContractLink';
import useContractProposal from 'hooks/useContractProposal';
import useContractVaultProposal from 'hooks/useContractVaultProposal';
import useContractVote from 'hooks/useContractVote';
import React, { useState } from 'react';
import ProposalFinalizeButton from '../../governanceProposals/proposalList/proposalInfo/status/ProposalFinalizeButton';
import ProposalStatus from '../../governanceProposals/proposalList/proposalInfo/status/ProposalStatus';
import InputVoteAmount from '../../governanceProposals/proposalList/proposalInfo/voting/InputVoteAmount';
import VoteButtons from '../../governanceProposals/proposalList/proposalInfo/voting/VoteButtons';
import VoteTokenBalance from '../../governanceProposals/proposalList/proposalInfo/voting/VoteTokenBalance';
import VaultProposalInfo from '../proposalInfo/VaultProposalInfo';
import CurrentVotes from '../proposalInfo/voting/CurrentVotes';

function VaultProposalListAccordionItem({
  proposalContract,
  proposalIndex
}: any) {
  const { vaultProposalInfo, voteContract } = useContractVaultProposal({
    proposalContract,
    proposalIndex
  });
  const { voteTokenBalance } = useContractVote({
    proposalContract
  });
  const [inputVoteTokenAmount, setInputVoteTokenAmount] = useState(0);
  return (
    <AccordionItem layerStyle="accordionProposalItem">
      <AccordionButton>
        <Box flex="1" textAlign="left">
          <Heading size="md">{vaultProposalInfo.name}</Heading>
          <Text>
            <FinderContractLink contract={proposalContract} />
          </Text>
          <ProposalStatus
            proposalContract={proposalContract}
            proposalIndex={proposalIndex}
          />
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel layerStyle="accordionProposalPanel" pb="5">
        <HStack>
          <VaultProposalInfo
            proposalContract={proposalContract}
            proposalIndex={proposalIndex}
          />
          <CurrentVotes
            proposalContract={proposalContract}
            proposalIndex={proposalIndex}
          />
        </HStack>

        <ProposalFinalizeButton
          proposalContract={proposalContract}
          proposalIndex={proposalIndex}
        />
        <VoteTokenBalance
          proposalContract={proposalContract}
          voteTokenBalance={voteTokenBalance}
        />
        <InputVoteAmount
          voteTokenBalance={voteTokenBalance}
          inputVoteTokenAmount={inputVoteTokenAmount}
          setInputVoteTokenAmount={setInputVoteTokenAmount}
        />
        <VoteButtons
          contract={voteContract}
          voteTokenBalance={voteTokenBalance}
          inputVoteTokenAmount={inputVoteTokenAmount}
        />
      </AccordionPanel>
    </AccordionItem>
  );
}

export default VaultProposalListAccordionItem;
