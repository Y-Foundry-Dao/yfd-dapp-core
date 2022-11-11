import useMsg from './useMsg';
import queryProposalByIndex from 'utilities/messagesQuery/forge/queryProposalByIndex';
import { useEffect, useState } from 'react';
import queryTokenInfo from 'utilities/messagesQuery/cw20/queryTokenInfo';
import queryVotes from 'utilities/messagesQuery/proposals/queryVotes';
import { FORGE_TEST } from 'utilities/variables/variables';

const useContractGovernanceProposal = ({
  proposalContract,
  proposalIndex
}: any) => {
  const { queryMsg } = useMsg();
  const [governanceProposalInfo, setGovernanceProposalInfo] = useState<any>({});
  const [tokenSymbol, setTokenSymbol] = useState('Vote');
  const [proposalVoteInfo, setProposalVoteInfo] = useState<any>({});

  const getProposalInfoByIndex = async () => {
    if (proposalIndex) {
      const response = await queryMsg(
        FORGE_TEST,
        queryProposalByIndex(proposalIndex)
      );
      return response;
    }
  };

  const getTokenInfo = async () => {
    const response = await queryMsg(proposalContract, queryTokenInfo());
    return response;
  };

  const getVotes = async () => {
    const response = await queryMsg(proposalContract, queryVotes());
    return response;
  };

  const setProposalInfoToState = async () => {
    const proposalInfo: any = await getProposalInfoByIndex();
    if (proposalInfo === undefined) {
      return;
    }
    setGovernanceProposalInfo({ ...proposalInfo });
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

  useEffect(() => {
    setTokenSymbolToState();
    setVotesToState();
  }, []);

  useEffect(() => {
    setProposalInfoToState();
  }, [proposalIndex]);

  return {
    getTokenInfo,
    governanceProposalInfo,
    proposalVoteInfo,
    tokenSymbol
  };
};

export default useContractGovernanceProposal;
