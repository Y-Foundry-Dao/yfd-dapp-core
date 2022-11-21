import useMsg from './useMsg';
import queryProposalInfo from 'utilities/messagesQuery/proposals/vaultProposal/queryProposalInfo';
import queryProposalState from 'utilities/messagesQuery/proposals/vaultProposal/queryProposalState';
import queryProposalByIndex from 'utilities/messagesQuery/forge/queryProposalByIndex';
import { useEffect, useState } from 'react';
import queryTokenInfo from 'utilities/messagesQuery/cw20/queryTokenInfo';
// import { useConnectedWallet } from '@terra-money/wallet-provider';
import queryVotes from 'utilities/messagesQuery/proposals/queryVotes';
import { FORGE_TEST } from 'utilities/variables/variables';
import queryVaultProposalByIndex from 'utilities/messagesQuery/forge/queryVaultProposalByIndex';
import queryFunds from 'utilities/messagesQuery/proposals/vaultProposal/queryFunds';
import queryNftInfo from 'utilities/messagesQuery/proposals/vaultProposal/queryNftInfo';
import { isTxError } from '@terra-money/terra.js';
import { terra } from 'utilities/lcd';

const useContractVaultProposal = ({ proposalContract, proposalIndex }: any) => {
  const { queryMsg, queryContractInfo } = useMsg();
  const [vaultProposalInfo, setVaultProposalInfo] = useState<any>({});
  const [voteContract, setVoteContract] = useState('');
  const [tokenSymbol, setTokenSymbol] = useState('Vote');
  const [proposalState, setProposalState] = useState<any>({});
  const [proposalVoteInfo, setProposalVoteInfo] = useState<any>({});
  const [fundingInfo, setFundingInfo] = useState<any>({});
  const [nftContractInfo, setNftContractInfo] = useState<any>({});

  const isFundingMet = () => {
    return fundingInfo.balance === fundingInfo.development_cost;
  };

  const isProposalAffirmed = () => {
    if (Object.keys(proposalVoteInfo).length > 0) {
      if (proposalVoteInfo.vote_state?.Affirm) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  const getContractInfoProposal = async () => {
    const response = await queryContractInfo(proposalContract);
    return response;
  };

  const getProposalInfo = async () => {
    const response = await queryMsg(proposalContract, queryProposalInfo());
    return response;
  };

  const getVaultProposalInfoByIndex = async () => {
    if (!proposalIndex) {
      return 'loading';
    }
    const response = await queryMsg(
      FORGE_TEST,
      queryVaultProposalByIndex(proposalIndex)
    );
    return response;
  };

  const getProposalState = async () => {
    const response = await queryMsg(proposalContract, queryProposalState());
    return response;
  };

  const getTokenInfo = async () => {
    const response = await queryMsg(proposalContract, queryTokenInfo());
    return response;
  };

  const getVotes = async () => {
    const response = await queryMsg(proposalContract, queryVotes());
    return response;
  };

  const getFunds = async () => {
    const response = await queryMsg(proposalContract, queryFunds());
    return response;
  };

  const getNftInfo = async () => {
    if (isFundingMet() && isProposalAffirmed()) {
      try {
        const response: any = await queryMsg(proposalContract, queryNftInfo());
        return response;
      } catch (e) {
        console.error('inside error:', e);
      }
    } else {
      return {};
    }
  };

  const setVaultProposalInfoToState = async () => {
    const proposalInfo: any = await getVaultProposalInfoByIndex();
    if (proposalInfo === undefined) {
      return;
    }
    setVaultProposalInfo({ ...proposalInfo });
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

  const setTokenSymbolToState = async () => {
    const tokenInfo: any = await getTokenInfo();
    if (tokenInfo === undefined) {
      return;
    }
    setTokenSymbol(tokenInfo.symbol);
  };

  const setVotesToState = async () => {
    const voteInfo = await getVotes();
    if (voteInfo === undefined) {
      return;
    }
    setProposalVoteInfo(voteInfo);
  };

  const setFundsToState = async () => {
    const funds = await getFunds();
    if (funds === undefined) {
      setFundingInfo({});
      return;
    }
    setFundingInfo(funds);
  };

  const setNftInfoToState = async () => {
    const nftInfo = await getNftInfo();
    if (nftInfo === undefined) {
      setNftContractInfo({});
      return;
    }
    setNftContractInfo(nftInfo);
  };

  useEffect(() => {
    setVoteContractToState();
    setTokenSymbolToState();
    setProposalStateToState();
    setFundsToState();
  }, []);

  useEffect(() => {
    setVaultProposalInfoToState();
    setVotesToState();
  }, [proposalContract, proposalIndex]);

  useEffect(() => {
    setNftInfoToState();
  }, [fundingInfo, proposalVoteInfo]);

  return {
    getProposalInfo,
    getProposalState,
    getTokenInfo,
    vaultProposalInfo,
    voteContract,
    tokenSymbol,
    proposalState,
    proposalVoteInfo,
    fundingInfo,
    nftContractInfo
  };
};

export default useContractVaultProposal;
