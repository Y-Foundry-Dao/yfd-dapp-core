import useMsg from './useMsg';
import queryAllProposalContracts from 'utilities/messagesQuery/queryAllProposalContracts';
import { FORGE_TEST } from 'utilities/variables';
import { useEffect, useState } from 'react';

const useContractForge = () => {
  const { queryMsg } = useMsg();
  const [proposals, setProposals] = useState<any>([]);

  const getAllProposalContracts = async () => {
    const response = await queryMsg(FORGE_TEST, queryAllProposalContracts());
    return response;
  };

  const setAllProposalContractsToState = async () => {
    const proposalContracts: any = await getAllProposalContracts();
    console.log(proposalContracts);
    setProposals(proposalContracts.proposals);
  };

  useEffect(() => {
    setAllProposalContractsToState();
  }, []);

  return {
    getAllProposalContracts,
    proposals
  };
};

export default useContractForge;
