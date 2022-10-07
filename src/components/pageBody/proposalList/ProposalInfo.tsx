import { useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { useConnectedWallet } from '@terra-money/wallet-provider';
import VoteTokenBalance from './VoteTokenBalance';
import VoteButtons from './VoteButtons';
import InputVoteAmount from './InputVoteAmount';
import { useRecoilValue } from 'recoil';
import txHashAtom from 'recoil/txHash/atom';
import FundProposal from './FundProposal';
import convertFromBase from 'utilities/converters/convertFromBase';
import useContractProposal from 'hooks/useContractProposal';
import useContractVote from 'hooks/useContractVote';

function ProposalInfo({ proposalContract }: any) {
  const { proposalInfo, voteContract } = useContractProposal({
    proposalContract
  });
  const { voteTokenBalance } = useContractVote({ proposalContract });
  const [inputVoteTokenAmount, setInputVoteTokenAmount] = useState(0);
  const [inputFundingAmount, setInputFundingAmount] = useState(0);
  const connectedWallet = useConnectedWallet();

  return (
    <Flex direction="column" gap={4}>
      <Text>Proposal Name: {proposalInfo.name}</Text>
      <Text>Proposal URL: {proposalInfo.proposal_url}</Text>
      <Text>Statement of Work URL: {proposalInfo.statement_of_work}</Text>
      <Text>Developer: {proposalInfo.developer}</Text>
      <Text>
        Development Cost: {convertFromBase(proposalInfo.development_cost)} YFD
      </Text>
      <Text>Developer Github: {proposalInfo.github}</Text>
      <Text>TVL Limit: {proposalInfo.tvl_limit}</Text>

      {!connectedWallet || voteTokenBalance === undefined ? null : (
        <>
          <Box bg="blue.600" p={4}>
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
          </Box>
          <FundProposal
            voteTokenBalance={voteTokenBalance}
            proposalContract={proposalContract}
            inputFundingAmount={inputFundingAmount}
            setInputFundingAmount={setInputFundingAmount}
          />
        </>
      )}
    </Flex>
  );
}

export default ProposalInfo;
