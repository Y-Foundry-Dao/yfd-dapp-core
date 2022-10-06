import { useState } from 'react';

import { useWallet, useConnectedWallet } from '@terra-money/wallet-provider';
import { Coins, Msg, MsgExecuteContract } from '@terra-money/terra.js';
import { terra } from 'utilities/lcd';
import useMsg from './useMsg';
import queryProposalInfo from 'utilities/messagesQuery/queryProposalInfo';
import queryProposalState from 'utilities/messagesQuery/queryProposalState';
import queryBalance from 'utilities/messagesQuery/balance';

const useContract = ({ contract }: any) => {
  const { queryMsg } = useMsg();
  const { post } = useWallet();
  const connectedWallet = useConnectedWallet();

  const getProposalInfo = async () => {
    console.log(contract);
    const response = await queryMsg(contract, queryProposalInfo());
    return response;
  };

  const getVoteAddress = async () => {
    const response = await queryMsg(contract, queryProposalState());
    return response;
  };

  const getVoteTokenBalance = async ({ voteAddress }: any) => {
    if (!connectedWallet) {
      return;
    }
    const voteTokenBalance = await queryMsg(
      voteAddress,
      queryBalance(connectedWallet?.walletAddress)
    );
    return voteTokenBalance;
  };

  return {
    getProposalInfo,
    getVoteAddress,
    getVoteTokenBalance
  };
};

export default useContract;
