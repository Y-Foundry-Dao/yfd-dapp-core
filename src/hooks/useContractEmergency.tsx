import { useConnectedWallet } from '@terra-money/wallet-provider';
import useMsg from './useMsg';
import queryBalance from 'utilities/messagesQuery/queryBalance';
import useContractProposal from './useContractProposal';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import txHashAtom from 'recoil/txHash/atom';
import queryEmergency from 'utilities/messagesQuery/queryEmergency';
import { FORGE_TEST } from 'utilities/variables';
import { terra } from 'utilities/lcd';
import useChainInfo from './useChainInfo';
import InputExpiration from 'components/pageBody/proposal/inputs/InputExpiration';

const useContractEmergency = ({ emergency }: any) => {
  const { currentBlockHeight } = useChainInfo();
  const { queryMsg, executeMsg } = useMsg();
  const connectedWallet = useConnectedWallet();
  const txHashInRecoil = useRecoilValue(txHashAtom);
  const [emergencyInfo, setEmergencyInfo] = useState<any>(undefined);
  const [emergencyVoteBalance, setEmergencyVoteBalance] = useState<any>('0');
  const [votes, setVotes] = useState<any>({});
  const [emergencyExpiration, setEmergencyExpiration] = useState<any>(0);

  const getEmergencyInfo = async () => {
    const emergencyInfo: any = await queryMsg(
      FORGE_TEST,
      queryEmergency(emergency.index)
    );
    return emergencyInfo;
  };

  const setEmergencyToState = async () => {
    const emergencyInfo = await getEmergencyInfo();
    setEmergencyInfo(emergencyInfo);
  };

  const getBalance = async () => {
    if (!connectedWallet) {
      return;
    }
    const response = await queryMsg(
      emergency.addr,
      queryBalance(connectedWallet?.walletAddress)
    );
    return response;
  };

  const setBalanceToState = async () => {
    const tokenBalance: any = await getBalance();
    if (tokenBalance === undefined) {
      setEmergencyVoteBalance('0');
      return;
    }
    setEmergencyVoteBalance(tokenBalance.balance);
  };

  const getVotes = async () => {
    const voteResponse: any = await queryMsg(emergency.addr, { votes: {} });
    return voteResponse;
  };

  const setVotesToState = async () => {
    const voteResponse: any = await getVotes();
    if (voteResponse === undefined) {
      setVotes({});
      return;
    }
    setVotes(voteResponse);
    setEmergencyExpiration(voteResponse.expiration);
  };

  useEffect(() => {
    setEmergencyToState();
    setBalanceToState();
    setVotesToState();
  }, [connectedWallet, txHashInRecoil]);

  return {
    emergencyInfo,
    emergencyVoteBalance,
    votes
  };
};

export default useContractEmergency;
