import useMsg from 'hooks/useMsg';
import { useEffect, useState } from 'react';
import queryProposalInfo from 'utilities/messagesQuery/queryProposalInfo';
import { Box, Flex, Text } from '@chakra-ui/react';
import queryProposalState from 'utilities/messagesQuery/queryProposalState';
import queryBalance from 'utilities/messagesQuery/balance';
import { useConnectedWallet } from '@terra-money/wallet-provider';
import VoteTokenBalance from './VoteTokenBalance';
import VoteButtons from './VoteButtons';
import InputVoteAmount from './InputVoteAmount';
import { useRecoilValue } from 'recoil';
import txHashAtom from 'recoil/txHash/atom';
import FundProposal from './FundProposal';
import convertFromBase from 'utilities/converters/convertFromBase';
import useContract from 'hooks/useContract';

function ProposalInfo({ contract }: any) {
  const { queryMsg } = useMsg();
  const { getProposalInfo, getVoteAddress, getVoteTokenBalance } = useContract({
    contract
  });
  const [inputVoteTokenAmount, setInputVoteTokenAmount] = useState(0);
  const [inputFundingAmount, setInputFundingAmount] = useState(0);
  const [proposalInfo, setProposalInfo] = useState<any>({});
  const [voteTokenBalance, setVoteTokenBalance] = useState<any>('');
  const [voteAddress, setVoteAddress] = useState('');
  const connectedWallet = useConnectedWallet();
  const txHash = useRecoilValue(txHashAtom);

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
        // const newVoteTokenBalance = await getVoteTokenBalance(voteAddress);
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
        Development Cost: {convertFromBase(proposalInfo.development_cost)} YFD
      </Text>
      <Text>Developer Github: {proposalInfo.github}</Text>
      <Text>TVL Limit: {proposalInfo.tvl_limit}</Text>

      {!connectedWallet || voteTokenBalance === undefined ? null : (
        <>
          {console.log(voteTokenBalance)}
          <Box bg="blue.600" p={4}>
            <VoteTokenBalance
              contract={contract}
              voteTokenBalance={voteTokenBalance}
            />
            <InputVoteAmount
              voteTokenBalance={voteTokenBalance}
              inputVoteTokenAmount={inputVoteTokenAmount}
              setInputVoteTokenAmount={setInputVoteTokenAmount}
            />

            <VoteButtons
              contract={voteAddress}
              voteTokenBalance={voteTokenBalance}
              inputVoteTokenAmount={inputVoteTokenAmount}
            />
          </Box>
          <FundProposal
            voteTokenBalance={voteTokenBalance}
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
