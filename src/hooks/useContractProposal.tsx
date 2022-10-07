import useMsg from './useMsg';
import queryProposalInfo from 'utilities/messagesQuery/queryProposalInfo';
import queryProposalState from 'utilities/messagesQuery/queryProposalState';
import { useEffect, useState } from 'react';

const useContractProposal = ({ proposalContract }: any) => {
  const { queryMsg } = useMsg();
  const [proposalInfo, setProposalInfo] = useState<any>({});
  const [voteContract, setVoteContract] = useState('');

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

  const getVoteContractAddress = async () => {
    const response = await queryMsg(proposalContract, queryProposalState());
    return response;
  };

  const setVoteContractToState = async () => {
    const voteInfo: any = await getVoteContractAddress();
    if (voteInfo === undefined) {
      return;
    }
    setVoteContract(voteInfo.initial_vote);
  };

  useEffect(() => {
    setProposalInfoToState();
    setVoteContractToState();
  }, []);

  return {
    getProposalInfo,
    getVoteContractAddress,
    proposalInfo,
    voteContract
  };
};

export default useContractProposal;
