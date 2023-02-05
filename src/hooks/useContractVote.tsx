import { useConnectedWallet } from '@terra-money/wallet-provider';
import useMsg from './useMsg';
import queryBalance from 'utilities/messagesQuery/cw20/queryBalance';
// import useContractProposal from './useContractProposal';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import txHashAtom from 'recoil/txHash/atom';
import useContractProposal from './useContractProposal';
import queryVotes from 'utilities/messagesQuery/proposals/queryVotes';
import { addressConnectedAtom } from '@recoil/connected/address/atoms';

const useContractVote = ({ proposalContract }: any) => {
  const { queryMsg } = useMsg();
  const connectedWallet = useRecoilValue(addressConnectedAtom);
  const { voteContract } = useContractProposal({ proposalContract });
  const [voteTokenBalance, setVoteTokenBalance] = useState(0);
  const [voteCount, setVoteCount] = useState({});
  const txHashInRecoil = useRecoilValue(txHashAtom);

  const getVoteTokenBalance = async () => {
    if (!connectedWallet) {
      return;
    }
    const voteTokenBalance: any = await queryMsg(
      voteContract,
      queryBalance(connectedWallet)
    );
    return voteTokenBalance;
  };

  const getVotes = async () => {
    const response: any = await queryMsg(voteContract, queryVotes());
    return response;
  };

  const setVoteTokenBalanceToState = async () => {
    const tokenBalance = await getVoteTokenBalance();
    if (tokenBalance === undefined) {
      return;
    }
    setVoteTokenBalance(tokenBalance.balance);
  };

  const setVotesToState = async () => {
    const votes = await getVotes();
    if (votes === undefined) {
      return;
    }
    setVoteCount({ ...votes });
  };

  useEffect(() => {
    setVoteTokenBalanceToState();
    setVotesToState();
  }, [connectedWallet, txHashInRecoil, voteContract]);

  return {
    // getVoteTokenBalance,
    voteTokenBalance,
    voteCount
  };
};

export default useContractVote;
