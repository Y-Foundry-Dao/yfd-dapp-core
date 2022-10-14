import useMsg from './useMsg';
import queryAllProposalContracts from 'utilities/messagesQuery/queryAllProposalContracts';
import { FORGE_TEST } from 'utilities/variables';
import { useEffect, useState } from 'react';
import { useConnectedWallet } from '@terra-money/wallet-provider';
import queryBalance from 'utilities/messagesQuery/queryBalance';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import txHashAtom from 'recoil/txHash/atom';
import queryBalanceDetail from 'utilities/messagesQuery/queryBalanceDetail';
import stakedYFDAtom from 'recoil/stakedYFD/atom';
import queryAllEmergencies from 'utilities/messagesQuery/queryAllEmergencies';

const useContractForge = () => {
  const { queryMsg } = useMsg();
  const [proposals, setProposals] = useState<any>([]);
  const [emergencies, setEmergencies] = useState<any>([]);
  const [tokenBalance, setTokenBalance] = useState('0');
  const connectedWallet = useConnectedWallet();
  const txHashInRecoil = useRecoilValue(txHashAtom);
  const setStakedYFD = useSetRecoilState(stakedYFDAtom);

  const getAllProposalContracts = async () => {
    const response = await queryMsg(FORGE_TEST, queryAllProposalContracts());
    return response;
  };

  const setAllProposalContractsToState = async () => {
    const proposalContracts: any = await getAllProposalContracts();

    setProposals(proposalContracts.proposals);
  };

  const getAllEmergencies = async () => {
    const response = await queryMsg(FORGE_TEST, queryAllEmergencies());
    return response;
  };

  const setAllEmergenciesToState = async () => {
    const response: any = await getAllEmergencies();
    setEmergencies(response.emergencies);
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
    if (tokenBalance === undefined) {
      setTokenBalance('0');
      return;
    }
    setTokenBalance(tokenBalance.balance);
  };

  const getStakedYFD = async () => {
    if (!connectedWallet) {
      return;
    }
    const response = await queryMsg(
      FORGE_TEST,
      queryBalanceDetail(connectedWallet?.walletAddress)
    );
    return response;
  };

  const setStakedYFDToState = async () => {
    const stakedYFD: any = await getStakedYFD();
    if (stakedYFD === undefined) {
      // TODO: handle case where stakedYFD is undefined
      console.log('staked YFD is undefined');
      return;
    }
    setStakedYFD(stakedYFD.stakes);
  };

  useEffect(() => {
    setAllProposalContractsToState();
  }, []);

  useEffect(() => {
    setTokenBalanceToState();
    setStakedYFDToState();
    setAllEmergenciesToState();
  }, [connectedWallet, txHashInRecoil]);

  return {
    getAllProposalContracts,
    proposals,
    emergencies,
    tokenBalance
  };
};

export default useContractForge;
