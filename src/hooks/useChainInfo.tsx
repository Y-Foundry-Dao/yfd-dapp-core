import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { terra } from 'utilities/lcd';
import { currentBlockHeightAtom } from 'recoil/chainInfo/atoms';
import { currentChainIDAtom } from 'recoil/chainInfo/atoms';
import { useWallet } from '@terra-money/wallet-provider';

const useChainInfo = () => {
  const connection = useWallet();

  const [currentBlockHeight, setCurrentBlockHeight] = useRecoilState<any>(
    currentBlockHeightAtom
  );

  const [currentChainID, setCurrentChainID] =
    useRecoilState<string>(currentChainIDAtom);

  const getCurrentChainID = async () => {
    const chainID: string = connection.network.chainID;
    return chainID;
  };

  const setCurrrntChainIDToState = async () => {
    const chainID = await getCurrentChainID();
    setCurrentChainID(chainID);
  };

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
    setCurrrntChainIDToState();
  }, []);

  useEffect(() => {
    const interval = setInterval(async () => {
      return setCurrentBlockHeight(await getCurrentBlockHeight());
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return {
    currentBlockHeight,
    currentChainID
  };
};

export default useChainInfo;
