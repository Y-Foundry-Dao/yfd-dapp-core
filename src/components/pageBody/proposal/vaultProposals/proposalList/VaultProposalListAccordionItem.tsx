import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Heading,
  HStack,
  Text,
  VStack
} from '@chakra-ui/react';
import FinderContractLink from 'components/basic/finder/FinderContractLink';
import useContractProposal from 'hooks/useContractProposal';
import useContractVaultProposal from 'hooks/useContractVaultProposal';
import useContractVote from 'hooks/useContractVote';
import React, { useState } from 'react';
import ProposalFinalizeButton from 'components/pageBody/proposal/vaultProposals/proposalInfo/status/ProposalFinalizeButton';
import ProposalStatus from 'components/pageBody/proposal/vaultProposals/proposalInfo/status/ProposalStatus';
import InputVoteAmount from 'components/pageBody/proposal/vaultProposals/proposalInfo/voting/InputVoteAmount';
import VoteButtons from 'components/pageBody/proposal/vaultProposals/proposalInfo/voting/VoteButtons';
import VoteTokenBalance from 'components/pageBody/proposal/vaultProposals/proposalInfo/voting/VoteTokenBalance';
import FundingInfo from 'components/pageBody/proposal/vaultProposals/proposalInfo/funding/FundingInfo';
import VaultProposalInfo from 'components/pageBody/proposal/vaultProposals/proposalInfo/VaultProposalInfo';
import CurrentVotes from 'components/pageBody/proposal/vaultProposals/proposalInfo/voting/CurrentVotes';

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
        <Flex
          border="1px solid black"
          borderRadius="md"
          align="center"
          justify="space-around"
          py="4"
        >
          <VaultProposalInfo
            proposalContract={proposalContract}
            proposalIndex={proposalIndex}
          />
          <FundingInfo
            proposalContract={proposalContract}
            proposalIndex={proposalIndex}
          />
          <ProposalFinalizeButton
            proposalContract={proposalContract}
            proposalIndex={proposalIndex}
          />
        </Flex>
        <Flex
          align="center"
          direction="column"
          borderRadius="md"
          border="1px solid black"
          py="4"
        >
          <VoteTokenBalance
            proposalContract={proposalContract}
            voteTokenBalance={voteTokenBalance}
          />
          <InputVoteAmount
            voteTokenBalance={voteTokenBalance}
            inputVoteTokenAmount={inputVoteTokenAmount}
            setInputVoteTokenAmount={setInputVoteTokenAmount}
          />
          <Flex
            align="center"
            justify="space-around"
            borderRadius="md"
            w="100%"
            py="4"
          >
            <VoteButtons
              contract={voteContract}
              voteTokenBalance={voteTokenBalance}
              inputVoteTokenAmount={inputVoteTokenAmount}
            />
            <CurrentVotes
              proposalContract={proposalContract}
              proposalIndex={proposalIndex}
            />
          </Flex>
        </Flex>
      </AccordionPanel>
    </AccordionItem>
  );
}

export default VaultProposalListAccordionItem;
