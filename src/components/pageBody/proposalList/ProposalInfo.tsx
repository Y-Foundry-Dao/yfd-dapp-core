import useContract from 'hooks/useContract';
import { useEffect, useState } from 'react';
import queryProposalInfo from 'utilities/messagesQuery/queryProposalInfo';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import queryProposalState from 'utilities/messagesQuery/queryProposalState';
import queryBalance from 'utilities/messagesQuery/balance';
import { useConnectedWallet } from '@terra-money/wallet-provider';
import VoteTokenBalance from './VoteTokenBalance';
import VoteButtons from './VoteButtons';

function ProposalInfo({ contract }: any) {
  const { queryMsg } = useContract();
  const [proposalInfo, setProposalInfo] = useState<any>({});
  const [voteTokenBalance, setVoteTokenBalance] = useState<any>('');
  const connectedWallet = useConnectedWallet();

  const getProposalInfo = async () => {
    const response = await queryMsg(contract, queryProposalInfo());
    return response;
  };
  const getVoteAddress = async () => {
    const response = await queryMsg(contract, queryProposalState());
    return response;
  };
  useEffect(() => {
    getProposalInfo().then((res: any) => {
      if (res !== undefined) {
        setProposalInfo({ ...res });
      }
    });
    getVoteAddress().then(async (res: any) => {
      if (res !== undefined) {
        const voteAddress = res.initial_vote;
        const newVoteTokenBalance = await queryMsg(
          voteAddress,
          queryBalance(connectedWallet?.walletAddress)
        );
        setVoteTokenBalance(newVoteTokenBalance);
      }
    });
  }, [contract, connectedWallet]);

  return (
    <Flex direction="column" gap={4}>
      <Text>Proposal Name: {proposalInfo.name}</Text>
      <Text>Proposal URL: {proposalInfo.proposal_url}</Text>
      <Text>Statement of Work URL: {proposalInfo.statement_of_work}</Text>
      <Text>Developer: {proposalInfo.developer}</Text>
      <Text>Development Cost: {proposalInfo.development_cost}</Text>
      <Text>Developer Github: {proposalInfo.github}</Text>
      <Text>TVL Limit: {proposalInfo.tvl_limit}</Text>

      {/* if no vote tokens, display no vote tokens, else display vote tokens with vote buttons */}
      <Box bg="blue.600" p={4}>
        <VoteTokenBalance voteTokenBalance={voteTokenBalance} />
        <VoteButtons voteTokenBalance={voteTokenBalance} />
      </Box>
    </Flex>
  );
}

export default ProposalInfo;
