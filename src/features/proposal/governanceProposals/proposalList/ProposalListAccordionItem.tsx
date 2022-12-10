import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Text
} from '@chakra-ui/react';
import FinderContractLink from 'components/basic/finder/FinderContractLink';
import useContractGovernanceProposal from 'hooks/useContractGovernanceProposal';
import useContractVote from 'hooks/useContractVote';
import ProposalInfo from './proposalInfo/ProposalInfo';
import ProposalFinalizeButton from './proposalInfo/status/ProposalFinalizeButton';
import ProposalStatus from './proposalInfo/status/ProposalStatus';
import VoteTokenBalance from './proposalInfo/voting/VoteTokenBalance';

function ProposalListAccordionItem({ proposalContract, proposalIndex }: any) {
  const { governanceProposalInfo } = useContractGovernanceProposal({
    proposalContract,
    proposalIndex
  });
  return (
    <AccordionItem layerStyle="accordionProposalItem">
      <AccordionButton>
        <Box flex="1" textAlign="left">
          <Heading size="md">{governanceProposalInfo.name}</Heading>
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
        <ProposalInfo
          proposalContract={proposalContract}
          proposalIndex={proposalIndex}
        />
        <ProposalFinalizeButton
          proposalContract={proposalContract}
          proposalIndex={proposalIndex}
        />
        {/* <VoteTokenBalance
          proposalContract={proposalContract}
          voteTokenBalance={voteTokenBalance}
        /> */}
        {/* <InputVoteAmount
          voteTokenBalance={voteTokenBalance}
          inputVoteTokenAmount={inputVoteTokenAmount}
          setInputVoteTokenAmount={setInputVoteTokenAmount}
        /> */}
        {/* <VoteButtons
          contract={voteContract}
          voteTokenBalance={voteTokenBalance}
          inputVoteTokenAmount={inputVoteTokenAmount}
        /> */}
      </AccordionPanel>
    </AccordionItem>
  );
}

export default ProposalListAccordionItem;
