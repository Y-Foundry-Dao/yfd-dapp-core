import useMsg from './useMsg';
import queryAllProposalContracts from 'utilities/messagesQuery/queryAllProposalContracts';
import { FORGE_TEST } from 'utilities/variables';
import { useEffect, useState } from 'react';
import { useConnectedWallet } from '@terra-money/wallet-provider';
import queryBalance from 'utilities/messagesQuery/balance';

const useContractForge = () => {
  const { queryMsg } = useMsg();
  const [proposals, setProposals] = useState<any>([]);
  const [tokenBalance, setTokenBalance] = useState('0');
  const connectedWallet = useConnectedWallet();

  const getAllProposalContracts = async () => {
    const response = await queryMsg(FORGE_TEST, queryAllProposalContracts());
    return response;
  };

  const setAllProposalContractsToState = async () => {
    const proposalContracts: any = await getAllProposalContracts();
    console.log(proposalContracts);
    setProposals(proposalContracts.proposals);
  };

  const getBalance = async () => {
    if (!connectedWallet) {
      return;
    }
    const response = await queryMsg(
      FORGE_TEST,
      queryBalance(connectedWallet?.walletAddress)
    );
    return response;
  };

  const setTokenBalanceToState = async () => {
    const tokenBalance: any = await getBalance();
    console.log(tokenBalance);
    if (tokenBalance === undefined) {
      setTokenBalance('0');
      return;
    }
    console.log(tokenBalance.balance);
    setTokenBalance(tokenBalance.balance);
  };

  useEffect(() => {
    setAllProposalContractsToState();
  }, []);

  useEffect(() => {
    setTokenBalanceToState();
  }, [connectedWallet]);

  return {
    getAllProposalContracts,
    proposals,
    tokenBalance
  };
};

export default useContractForge;
