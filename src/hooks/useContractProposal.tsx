import useMsg from './useMsg';
import queryProposalInfo from 'utilities/messagesQuery/proposals/vaultProposal/queryProposalInfo';
import queryProposalState from 'utilities/messagesQuery/proposals/vaultProposal/queryProposalState';
import queryProposalByIndex from 'utilities/messagesQuery/forge/queryProposalByIndex';
import { useEffect, useState } from 'react';
import queryTokenInfo from 'utilities/messagesQuery/cw20/queryTokenInfo';
// import { useConnectedWallet } from '@terra-money/wallet-provider';
import queryVotes from 'utilities/messagesQuery/proposals/queryVotes';
import { FORGE_TEST } from '@utilities/variables';
import queryVaultProposalByIndex from 'utilities/messagesQuery/forge/queryVaultProposalByIndex';

const useContractProposal = ({ proposalContract, proposalIndex }: any) => {
  const { queryMsg } = useMsg();
  const [voteContract, setVoteContract] = useState('');
  const [tokenSymbol, setTokenSymbol] = useState('Vote');

  const getProposalState = async () => {
    const response = await queryMsg(proposalContract, queryProposalState());
    return response;
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
    setVoteContractToState();
    setTokenSymbolToState();
    // setProposalStateToState();
    // setVotesToState();
  }, [proposalIndex]);

  return {
    voteContract,
    tokenSymbol
  };
};

export default useContractProposal;
