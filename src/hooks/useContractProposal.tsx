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

const useContractProposal = ({ proposalContract, proposalIndex }: any) => {
  const { queryMsg } = useMsg();
  const [proposalInfo, setProposalInfo] = useState<any>({});
  const [vaultProposalInfo, setVaultProposalInfo] = useState<any>({});
  const [voteContract, setVoteContract] = useState('');
  const [tokenSymbol, setTokenSymbol] = useState('Vote');
  const [proposalState, setProposalState] = useState<any>({});
  const [proposalVoteInfo, setProposalVoteInfo] = useState<any>({});

  const getProposalInfo = async () => {
    const response = await queryMsg(proposalContract, queryProposalInfo());
    return response;
  };

  const getVaultProposalInfoByIndex = async () => {
    const response = await queryMsg(
      FORGE_TEST,
      queryVaultProposalByIndex(proposalIndex)
    );
    return response;
  };

  const getProposalInfoByIndex = async () => {
    const response = await queryMsg(
      FORGE_TEST,
      queryProposalByIndex(proposalIndex)
    );
    return response;
  };

  const setProposalInfoToState = async () => {
    const proposalInfo: any = await getProposalInfoByIndex();
    if (proposalInfo === undefined) {
      return;
    }
    setProposalInfo({ ...proposalInfo });
  };

  const setVaultProposalInfoToState = async () => {
    const proposalInfo: any = await getVaultProposalInfoByIndex();
    if (proposalInfo === undefined) {
      return;
    }
    setVaultProposalInfo({ ...proposalInfo });
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
    // setProposalInfoToState();
    // setVaultProposalInfoToState();
    // setVoteContractToState();
    // setTokenSymbolToState();
    // setProposalStateToState();
    // setVotesToState();
  }, []);

  useEffect(() => {
    // setProposalInfoToState();
    // setVaultProposalInfoToState();
    // setVoteContractToState();
    // setTokenSymbolToState();
    // setProposalStateToState();
    // setVotesToState();
  }, [proposalIndex]);

  return {
    getProposalInfo,
    getProposalState,
    getTokenInfo,
    proposalInfo,
    vaultProposalInfo,
    voteContract,
    tokenSymbol,
    proposalState,
    proposalVoteInfo
  };
};

export default useContractProposal;
