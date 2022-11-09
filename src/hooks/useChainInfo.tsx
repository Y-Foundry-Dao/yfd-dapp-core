import { useConnectedWallet } from '@terra-money/wallet-provider';
import useMsg from './useMsg';
import queryBalance from 'utilities/messagesQuery/cw20/queryBalance';
import useContractProposal from './useContractProposal';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { terra } from 'utilities/lcd';
import { currentBlockHeightAtom } from 'recoil/chainInfo/atoms';

const useChainInfo = () => {
  const [currentBlockHeight, setCurrentBlockHeight] = useRecoilState<any>(
    currentBlockHeightAtom
  );

  const getCurrentBlockHeight = async () => {
    const newBlockHeight = Number.parseInt(
      (await terra.tendermint.blockInfo()).block.header.height
    );
    return newBlockHeight;
  };

  const setCurrentBlockHeightToState = async () => {
    const blockHeight = await getCurrentBlockHeight();
    setCurrentBlockHeight(blockHeight);
  };

  useEffect(() => {
    setCurrentBlockHeightToState();
  }, []);

  useEffect(() => {
    const interval = setInterval(async () => {
      await setCurrentBlockHeightToState();
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return {
    currentBlockHeight
  };
};

export default useChainInfo;
