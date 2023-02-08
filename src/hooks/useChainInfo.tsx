import { useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  currentBlockIntervalAtom,
  currentBlockHeightAtom,
  currentChainIDAtom,
  currentContractForgeAtom,
  currentContractGovTokenAtom
} from '@recoil/chainInfo/atoms';
import { useLCDClient, useWallet } from '@terra-money/wallet-provider';
import getChainDeploy from '@utilities/getValues';
import { addressConnectedAtom } from '@recoil/connected/address/atoms';

const useChainInfo = () => {
  const lcd = useLCDClient();
  const chainID = 'pisco-1';
  const { status, wallets } = useWallet();

  const [currentBlockHeight, setCurrentBlockHeight] = useRecoilState<any>(
    currentBlockHeightAtom
  );
  const setCurrentBlockInterval = useSetRecoilState(currentBlockIntervalAtom);
  const [currentChainID, setCurrentChainID] =
    useRecoilState<string>(currentChainIDAtom);
  const [currentAddress, setCurrentAddress] =
    useRecoilState<string>(addressConnectedAtom);
  const [currentContractForge, setCurrentContractForge] =
    useRecoilState<string>(currentContractForgeAtom);
  const [currentContractGovToken, setCurrentContractGovToken] =
    useRecoilState<string>(currentContractGovTokenAtom);

  const getCurrentChainID = () => {
    const currentChainID = chainID;
    return currentChainID;
  };
  const setCurrentChainIDToState = async () => {
    const currentChainID = await getCurrentChainID();
    setCurrentChainID(currentChainID);
  };

  const getCurrentAddress = async () => {
    if (status !== 'WALLET_CONNECTED') return;
    const currentAddress = wallets[0].addresses[currentChainID];
    return currentAddress;
  };

  const setCurrentAddressToState = async () => {
    const currentAddress = await getCurrentAddress();
    if (currentAddress) {
      setCurrentAddress(currentAddress);
    }
    return currentAddress;
  };

  const getCurrentContractForge = () => {
    const contractForge = String(getChainDeploy(currentChainID, 'forge'));
    return contractForge;
  };
  const setCurrentContractForgeToState = () => {
    const contractForge = getCurrentContractForge();
    setCurrentContractForge(contractForge);
  };
  const getCurrentContractGovToken = () => {
    const contractGovToken = String(getChainDeploy(currentChainID, 'token'));
    return contractGovToken;
  };

  const setCurrentContractGovTokenToState = () => {
    const contractGovToken = getCurrentContractGovToken();
    setCurrentContractGovToken(contractGovToken);
  };

  const getCurrentBlockInterval = (chain: string) => {
    const newBlockInterval = Number(getChainDeploy(chain, 'interval'));
    if (typeof newBlockInterval !== 'number') {
      console.error('blockInterval is not a number: ', newBlockInterval);
    }
    return newBlockInterval;
  };

  const setCurrentBlockIntervalToState = () => {
    const blockInterval = getCurrentBlockInterval(currentChainID);
    setCurrentBlockInterval(blockInterval);
  };

  const getCurrentBlockHeight = async (chain: string) => {
    // also collectable here: https://lcd.terra.dev/blocks/latest
    // https://pisco-lcd.terra.dev/blocks/latest
    try {
      const newBlockHeight = Number.parseInt(
        (await lcd.tendermint.blockInfo(chain)).block.header.height
      );
      return newBlockHeight;
    } catch (error) {
      return '';
      console.error('error in getCurrentBlockHeight: ', error);
    }
  };

  const setCurrentBlockHeightToState = async () => {
    const blockHeight = await getCurrentBlockHeight(currentChainID);
    if (blockHeight == undefined || blockHeight == '') {
      console.warn('blockHeight returned as undefined');
    } else {
      setCurrentBlockHeight(blockHeight);
    }
  };

  useEffect(() => {
    setCurrentBlockIntervalToState();
    setCurrentBlockHeightToState();
    setCurrentContractGovTokenToState();
    setCurrentChainIDToState();
    setCurrentContractForgeToState();
    setCurrentAddressToState();
  }, []);

  useEffect(() => {
    const currentChainID = getCurrentChainID();
    const blockInterval = getCurrentBlockInterval(currentChainID);
    if (blockInterval == undefined) {
      console.warn('blockInterval returned as undefined... TRYING AGAIN');
      const blockInterval = getCurrentBlockInterval(currentChainID);
    }
    const interval = setInterval(async () => {
      return setCurrentBlockHeight(await getCurrentBlockHeight(currentChainID));
    }, blockInterval);
    return () => clearInterval(interval);
  }, []);

  return {
    currentBlockHeight,
    currentChainID,
    currentContractForge,
    currentContractGovToken,
    currentAddress
  };
};

export default useChainInfo;
