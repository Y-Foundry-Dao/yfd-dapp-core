import useMsg from './useMsg';
import queryProposalInfo from 'utilities/messagesQuery/queryProposalInfo';
import queryProposalState from 'utilities/messagesQuery/queryProposalState';
import { useEffect, useState } from 'react';
import queryTokenInfo from 'utilities/messagesQuery/queryTokenInfo';
import { useConnectedWallet } from '@terra-money/wallet-provider';
import queryVotes from 'utilities/messagesQuery/queryVotes';

const useContractProposal = ({ proposalContract }: any) => {
  const { queryMsg } = useMsg();
  const [proposalInfo, setProposalInfo] = useState<any>({});
  const [voteContract, setVoteContract] = useState('');
  const [tokenSymbol, setTokenSymbol] = useState('Vote');
  const [proposalState, setProposalState] = useState<any>({});
  const [proposalVoteInfo, setProposalVoteInfo] = useState<any>({});

  const getProposalInfo = async () => {
    const response = await queryMsg(proposalContract, queryProposalInfo());
    return response;
  };

  const setProposalInfoToState = async () => {
    const proposalInfo: any = await getProposalInfo();
    if (proposalInfo === undefined) {
      return;
    }
    setProposalInfo({ ...proposalInfo });
  };

  const getProposalState = async () => {
    const response = await queryMsg(proposalContract, queryProposalState());
    return response;
  };

  const setProposalStateToState = async () => {
    const proposalState: any = await getProposalState();
    if (proposalState === undefined) {
      return;
    }
    setProposalState(proposalState);
  };

  const setVoteContractToState = async () => {
    const proposalState: any = await getProposalState();
    if (proposalState === undefined) {
      return;
    }
    setVoteContract(proposalState.initial_vote);
  };

  const getTokenInfo = async () => {
    const response = await queryMsg(proposalContract, queryTokenInfo());
    return response;
  };

  const setTokenSymbolToState = async () => {
    const tokenInfo: any = await getTokenInfo();
    if (tokenInfo === undefined) {
      return;
    }
    setTokenSymbol(tokenInfo.symbol);
  };

  const getVotes = async () => {
    const response = await queryMsg(proposalContract, queryVotes());
    return response;
  };

  const setVotesToState = async () => {
    const voteInfo = await getVotes();
    if (voteInfo === undefined) {
      return;
    }
    setProposalVoteInfo(voteInfo);
  };

  useEffect(() => {
    setProposalInfoToState();
    setVoteContractToState();
    setTokenSymbolToState();
    setProposalStateToState();
    setVotesToState();
  }, []);

  return {
    getProposalInfo,
    getProposalState,
    getTokenInfo,
    proposalInfo,
    voteContract,
    tokenSymbol,
    proposalState,
    proposalVoteInfo
  };
};

export default useContractProposal;
