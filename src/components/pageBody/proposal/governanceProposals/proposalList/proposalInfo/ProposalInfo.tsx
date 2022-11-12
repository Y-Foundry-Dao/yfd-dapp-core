import { useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import useContractGovernanceProposal from 'hooks/useContractGovernanceProposal';

function ProposalInfo({ proposalContract, proposalIndex }: any) {
  const { governanceProposalInfo } = useContractGovernanceProposal({
    proposalContract,
    proposalIndex
  });
  // const { voteTokenBalance } = useContractVote({ proposalContract });
  // const [inputVoteTokenAmount, setInputVoteTokenAmount] = useState(0);
  // const [inputFundingAmount, setInputFundingAmount] = useState(0);
  // const connectedWallet = useConnectedWallet();
  const objectConverted = Object.keys(governanceProposalInfo);
  const proposalType =
    objectConverted.length !== 0 &&
    Object.keys(governanceProposalInfo.detail)[0];
  return (
    <Flex direction="column" gap={4}>
      {/* <>{console.log(proposalInfo)}</>
      <>{console.log(proposalType)}</> */}
      <Text>Proposal Name: {governanceProposalInfo.name}</Text>
      <>Type of Proposal: {proposalType}</>
      <Text>Closing block: {governanceProposalInfo.closing_block}</Text>
      <Text>
        Quorum Block:{' '}
        {governanceProposalInfo.quorum_block === null
          ? 'Voting still in progress'
          : governanceProposalInfo.quorum_block}
      </Text>
      {/* <>{console.log(proposalInfo.detail.token_whitelist)}</> */}
      {/* <>
        {proposalType === 'token_whitelist' ? (
          <>{proposalInfo.detail.token_whitelist.token}</>
        ) : (
          <>Not a token whitelist proposal. Not sure what type yet</>
        )}
      </> */}
      {/* <Text>Proposal URL: {proposalInfo.proposal_url}</Text>
      <Text>Statement of Work URL: {proposalInfo.statement_of_work}</Text>
      <Text>Developer: {proposalInfo.developer}</Text>
      <Text>
        Development Cost: {convertFromBase(proposalInfo.development_cost)} YFD
      </Text>
      <Text>Developer Github: {proposalInfo.github}</Text>
      <Text>TVL Limit: {proposalInfo.tvl_limit}</Text> */}

      {/* {!connectedWallet || voteTokenBalance === undefined ? null : ( */}
      {/* <>
          <Box bg="blue.600" p={4}>
            <VoteTokenBalance
              proposalContract={proposalContract}
              voteTokenBalance={voteTokenBalance}
            />
            <InputVoteAmount
              voteTokenBalance={voteTokenBalance}
              inputVoteTokenAmount={inputVoteTokenAmount}
              setInputVoteTokenAmount={setInputVoteTokenAmount}
            /> */}
      {/* <VoteButtons
              contract={voteContract}
              voteTokenBalance={voteTokenBalance}
              inputVoteTokenAmount={inputVoteTokenAmount}
            /> */}
      {/* <EmergencyVote proposalIndex={proposalIndex} />
          </Box>
          <FundProposal
            voteTokenBalance={voteTokenBalance}
            proposalContract={proposalContract}
            inputFundingAmount={inputFundingAmount}
            setInputFundingAmount={setInputFundingAmount}
          />
        </> */}
      {/* )} */}
    </Flex>
  );
}

export default ProposalInfo;
