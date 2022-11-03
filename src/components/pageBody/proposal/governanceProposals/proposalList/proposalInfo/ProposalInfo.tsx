import { useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { useConnectedWallet } from '@terra-money/wallet-provider';
import VoteTokenBalance from './voting/VoteTokenBalance';
import VoteButtons from './voting/VoteButtons';
import InputVoteAmount from './voting/InputVoteAmount';
import FundProposal from './funding/FundProposal';
import convertFromBase from 'utilities/converters/convertFromBase';
import useContractProposal from 'hooks/useContractProposal';
import useContractVote from 'hooks/useContractVote';
import EmergencyVote from '../emergencyVote/EmergencyVote';

function ProposalInfo({ proposalContract, proposalIndex }: any) {
  const { proposalInfo } = useContractProposal({
    proposalContract,
    proposalIndex
  });
  // const { voteTokenBalance } = useContractVote({ proposalContract });
  // const [inputVoteTokenAmount, setInputVoteTokenAmount] = useState(0);
  // const [inputFundingAmount, setInputFundingAmount] = useState(0);
  // const connectedWallet = useConnectedWallet();
  return (
    <Flex direction="column" gap={4}>
      <>{console.log(proposalInfo)}</>
      <Text>Proposal Name: {proposalInfo.name}</Text>
      <Text>Closing block: {proposalInfo.closing_block}</Text>
      <Text>Quorum block: {proposalInfo.quorum_block}</Text>
      {/* <>{console.log(proposalInfo.detail.token_whitelist)}</> */}
      {/* <Text>Type of Proposal?: {Object.keys(proposalInfo.detail)[0]}</Text> */}
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
