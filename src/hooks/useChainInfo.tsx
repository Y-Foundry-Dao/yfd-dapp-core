import { useEffect } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import {
  currentBlockHeightAtom,
  currentChainIDAtom,
  currentContractForgeAtom
} from '@recoil/chainInfo/atoms';
import {
  useConnectedWallet,
  useLCDClient,
  useWallet
} from '@terra-money/wallet-provider';
import getChainDeploy from '@utilities/getValues';
import {
  addressStatusAtom,
  addressConnectedAtom
} from '@recoil/connected/address/atoms';

export function ConnectLCDClient() {
  return useLCDClient();
}

const useChainInfo = () => {
  const lcd = ConnectLCDClient();
  const connection = useWallet();
  const chainID = useWallet().network.chainID;
  console.log('useChainInfo: ', connection);

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
      (await lcd.tendermint.blockInfo()).block.header.height
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
