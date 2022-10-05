import useContract from 'hooks/useContract';
import { useEffect, useState } from 'react';
import queryProposalInfo from 'utilities/messagesQuery/queryProposalInfo';
import { Box, Flex, HStack, Text, Button } from '@chakra-ui/react';
import queryProposalState from 'utilities/messagesQuery/queryProposalState';
import queryBalance from 'utilities/messagesQuery/balance';
import { useConnectedWallet } from '@terra-money/wallet-provider';
import VoteTokenBalance from './VoteTokenBalance';
import VoteButtons from './VoteButtons';
import InputVoteAmount from './InputVoteAmount';
import { useRecoilValue } from 'recoil';
import txHashAtom from 'recoil/txHash/atom';
import InputFundingAmount from './InputFundingAmount';
import FundProposal from './FundProposal';

function ProposalInfo({ contract }: any) {
  const { queryMsg } = useContract();
  const [inputVoteTokenAmount, setInputVoteTokenAmount] = useState(0);
  const [inputFundingAmount, setInputFundingAmount] = useState(0);
  const [proposalInfo, setProposalInfo] = useState<any>({});
  const [voteTokenBalance, setVoteTokenBalance] = useState<any>('');
  const [voteAddress, setVoteAddress] = useState('');
  const connectedWallet = useConnectedWallet();
  const txHash = useRecoilValue(txHashAtom);

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
        setVoteAddress(voteAddress);
        if (!connectedWallet) {
          return;
        }
        const newVoteTokenBalance = await queryMsg(
          voteAddress,
          queryBalance(connectedWallet?.walletAddress)
        );
        setVoteTokenBalance(newVoteTokenBalance);
      }
    });
  }, [contract, connectedWallet, txHash]);

  return (
    <Flex direction="column" gap={4}>
      <Text>Proposal Name: {proposalInfo.name}</Text>
      <Text>Proposal URL: {proposalInfo.proposal_url}</Text>
      <Text>Statement of Work URL: {proposalInfo.statement_of_work}</Text>
      <Text>Developer: {proposalInfo.developer}</Text>
      <Text>
        Development Cost: {proposalInfo.development_cost * Math.pow(10, -6)} YFD
      </Text>
      <Text>Developer Github: {proposalInfo.github}</Text>
      <Text>TVL Limit: {proposalInfo.tvl_limit}</Text>

      {voteTokenBalance !== undefined && (
        <>
          <Box bg="blue.600" p={4}>
            <HStack></HStack>

            <InputVoteAmount
              voteTokenBalance={voteTokenBalance}
              inputVoteTokenAmount={inputVoteTokenAmount}
              setInputVoteTokenAmount={setInputVoteTokenAmount}
            />

            <VoteTokenBalance
              contract={contract}
              voteTokenBalance={voteTokenBalance}
            />
            <VoteButtons
              contract={voteAddress}
              voteTokenBalance={voteTokenBalance}
              inputVoteTokenAmount={inputVoteTokenAmount}
            />
          </Box>
          <FundProposal
            contract={contract}
            inputFundingAmount={inputFundingAmount}
            setInputFundingAmount={setInputFundingAmount}
          />
        </>
      )}
    </Flex>
  );
}

export default ProposalInfo;
