import { useEffect } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import {
  currentBlockHeightAtom,
  currentChainIDAtom,
  currentContractForgeAtom,
  currentContractGovTokenAtom
} from '@recoil/chainInfo/atoms';
import { useLCDClient, useWallet } from '@terra-money/wallet-provider';
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
  const [currentBlockHeight, setCurrentBlockHeight] = useRecoilState<any>(
    currentBlockHeightAtom
  );
  const [currentChainID, setCurrentChainID] =
    useRecoilState<string>(currentChainIDAtom);
  const [currentContractForge, setCurrentContractForge] =
    useRecoilState<string>(currentContractForgeAtom);
  const [currentContractGovToken, setCurrentContractGovToken] =
    useRecoilState<string>(currentContractGovTokenAtom);
  const getCurrentChainID = async () => {
    const currentChainID: string = connection.network.chainID;
    return currentChainID;
  };
  const setCurrentChainIDToState = async () => {
    const currentChainID = await getCurrentChainID();
    setCurrentChainID(currentChainID);
  };
  const getCurrentContractForge = () => {
    const contractForge = getChainDeploy(chainID, 'forge');
    return contractForge;
  };
  const setCurrentContractForgeToState = () => {
    const contractForge = getCurrentContractForge();
    setCurrentContractForge(contractForge);
  };
  const getCurrentContractGovToken = () => {
    const contractGovToken = getChainDeploy(chainID, 'token');
    return contractGovToken;
  };

  const setCurrentContractGovTokenToState = () => {
    const contractGovToken = getCurrentContractGovToken();
    setCurrentContractGovToken(contractGovToken);
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
    setCurrentContractGovTokenToState();
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
    currentContractForge,
    currentContractGovToken
  };
};

export default useChainInfo;
