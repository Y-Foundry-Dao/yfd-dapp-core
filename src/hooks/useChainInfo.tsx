import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { terra } from 'utilities/lcd';
import { currentBlockHeightAtom } from 'recoil/chainInfo/atoms';
import { currentChainIDAtom } from 'recoil/chainInfo/atoms';
import { currentContractForgeAtom } from 'recoil/chainInfo/atoms';
import { useWallet } from '@terra-money/wallet-provider';
import getChainDeploy from '@utilities/getValues';

const useChainInfo = () => {
  const connection = useWallet();
  //console.log('useChainInfo: ', connection);

  const [currentBlockHeight, setCurrentBlockHeight] = useRecoilState<any>(
    currentBlockHeightAtom
  );

  const [currentChainID, setCurrentChainID] =
    useRecoilState<string>(currentChainIDAtom);

  const [currentContractForge, setCurrentContractForge] =
    useRecoilState<string>(currentContractForgeAtom);

  const getCurrentChainID = async () => {
    const chainID: string = connection.network.chainID;
    return chainID;
  };

  const setCurrentChainIDToState = async () => {
    const chainID = await getCurrentChainID();
    setCurrentChainID(chainID);
  };

  const getCurrentContractForge = async () => {
    const contractForge = getChainDeploy(currentChainID, 'forge');
    return contractForge;
  };

  const setCurrentContractForgeToState = async () => {
    const contractForge = await getCurrentContractForge();
    setCurrentContractForge(contractForge);
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
    setCurrentChainIDToState();
    setCurrentContractForgeToState();
  }, []);

  useEffect(() => {
    const interval = setInterval(async () => {
      return setCurrentBlockHeight(await getCurrentBlockHeight());
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return {
    currentBlockHeight,
    currentChainID,
    currentContractForge
  };
};

export default useChainInfo;
