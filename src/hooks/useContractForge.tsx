import useMsg from './useMsg';
import queryAllProposalContracts from 'utilities/messagesQuery/forge/queryAllProposalContracts';
import { FORGE_TEST } from 'utilities/variables/variables';
import { useEffect, useState } from 'react';
import { useConnectedWallet } from '@terra-money/wallet-provider';
import queryBalance from 'utilities/messagesQuery/cw20/queryBalance';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import txHashAtom from 'recoil/txHash/atom';
import queryBalanceDetail from 'utilities/messagesQuery/forge/queryBalanceDetail';
import stakedYFDAtom from 'recoil/stakedYFD/atom';
import queryAllVaultProposals from 'utilities/messagesQuery/forge/queryAllVaultProposals';
import queryVaultFundingMath from 'utilities/messagesQuery/forge/queryVaultFundingMath';
import { inputDevelopmentCost, inputNFTAmount } from 'recoil/input/atoms';
import convertToBase from 'utilities/converters/convertToBase';
import convertFromBase from 'utilities/converters/convertFromBase';
import queryAllGovernanceParameters from 'utilities/messagesQuery/forge/queryAllGovernanceParameters';
import queryAllTokenWhitelist from 'utilities/messagesQuery/forge/queryAllTokenWhitelist';
import queryAllAddressWhitelist from 'utilities/messagesQuery/forge/queryAllAddressWhitelist';
import queryAddressWhitelist from 'utilities/messagesQuery/forge/queryAddressWhitelist';
import queryProposalByIndex from 'utilities/messagesQuery/forge/queryProposalByIndex';
import queryTokenWhitelist from 'utilities/messagesQuery/forge/queryTokenWhitelist';

const useContractForge = () => {
  const { queryMsg } = useMsg();
  const connectedWallet = useConnectedWallet();

  const [governanceProposals, setGovernanceProposals] = useState<any>([]);
  const [vaultProposals, setVaultProposals] = useState<any>([]);
  const [requiredInitialFunding, setRequiredInitialFunding] = useState<any>(0);
  const [tokenBalance, setTokenBalance] = useState('0');
  const [addressWhitelist, setAddressWhitelist] = useState([]);
  const [tokenWhitelist, setTokenWhitelist] = useState([]);
  const [governanceParameters, setGovernanceParameters] = useState([]);
  const [balanceDetail, setBalanceDetail] = useState({});

  const setStakedYFD = useSetRecoilState(stakedYFDAtom);

  const txHashInRecoil = useRecoilValue(txHashAtom);
  const developmentCost = useRecoilValue(inputDevelopmentCost);
  const nftAmount = useRecoilValue(inputNFTAmount);

  const getAllGovernanceParameters = async () => {
    const response = await queryMsg(FORGE_TEST, queryAllGovernanceParameters());
    return response;
  };

  const getAllProposalContracts = async () => {
    const response = await queryMsg(FORGE_TEST, queryAllProposalContracts());
    return response;
  };

  const getProposalByIndex = async (index: any) => {
    const response = await queryMsg(FORGE_TEST, queryProposalByIndex(index));
    return response;
  };

  const getAllVaultProposals = async () => {
    const response = await queryMsg(FORGE_TEST, queryAllVaultProposals());
    return response;
  };

  const getVaultProposalByIndex = async (index: any) => {
    const response = await queryMsg(FORGE_TEST, queryProposalByIndex(index));
    return response;
  };

  const getAllTokenWhitelist = async () => {
    const response = await queryMsg(FORGE_TEST, queryAllTokenWhitelist());
    return response;
  };

  const getTokenInWhitelist = async (address: any) => {
    const response = await queryMsg(FORGE_TEST, queryTokenWhitelist(address));
    return response;
  };

  const getAllAddressWhitelist = async () => {
    const response = await queryMsg(FORGE_TEST, queryAllAddressWhitelist());
    return response;
  };

  const getAddressInWhitelist = async (address: any) => {
    const response = await queryMsg(FORGE_TEST, queryAddressWhitelist(address));
    return response;
  };

  const setAllGovernanceParametersToState = async () => {
    const governanceParameters: any = await getAllGovernanceParameters();
    setGovernanceParameters(governanceParameters);
  };

  const setAllTokenWhitelistToState = async () => {
    const tokenWhitelist: any = await getAllTokenWhitelist();
    setTokenWhitelist(tokenWhitelist);
  };

  const setAllAddressWhitelistToState = async () => {
    const addressWhitelist: any = await getAllAddressWhitelist();
    setAddressWhitelist(addressWhitelist);
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

  const getBalanceDetail = async () => {
    if (!connectedWallet) {
      return;
    }
    const response = await queryMsg(
      FORGE_TEST,
      queryBalanceDetail(connectedWallet?.walletAddress)
    );
    return response;
  };

  const getVaultFundingMath = async () => {
    const devCostConverted = convertToBase(developmentCost);
    const response: any = await queryMsg(
      FORGE_TEST,
      queryVaultFundingMath(devCostConverted, nftAmount)
    );
    return response;
  };

  const setAllVaultProposalsToState = async () => {
    try {
      const vaultProposals: any = await getAllVaultProposals();
      setVaultProposals(vaultProposals.proposals);
    } catch (e) {
      console.log('error', e);
    }
  };

  const setAllGovernanceProposalsToState = async () => {
    const governanceProposals: any = await getAllProposalContracts();
    setGovernanceProposals(governanceProposals.proposals);
  };

  const setTokenBalanceToState = async () => {
    const tokenBalance: any = await getBalance();
    if (tokenBalance === undefined) {
      setTokenBalance('0');
      return;
    }
    setTokenBalance(tokenBalance.balance);
  };

  const setBalanceDetailToState = async () => {
    const balanceDetail: any = await getBalanceDetail();
    setBalanceDetail(balanceDetail);
  };
  const setStakedYFDToState = async () => {
    const stakedYFD: any = await getBalanceDetail();
    if (stakedYFD === undefined) {
      setStakedYFD([]);
      return;
    }
    setStakedYFD(stakedYFD.stakes);
  };

  const setRequiredInitialFundingToState = async () => {
    const vaultFundingMath: any = await getVaultFundingMath();
    const convertedRequiredInitialFunding = convertFromBase(
      vaultFundingMath.strategist_min
    );
    setRequiredInitialFunding(convertedRequiredInitialFunding);
  };

  useEffect(() => {
    setAllGovernanceProposalsToState();
    setAllVaultProposalsToState();
    setAllGovernanceParametersToState();
  }, []);

  useEffect(() => {
    setRequiredInitialFundingToState();
  }, [developmentCost, nftAmount]);

  useEffect(() => {
    setTokenBalanceToState();
    setStakedYFDToState();
    setBalanceDetailToState();
    setAllTokenWhitelistToState();
    setAllAddressWhitelistToState();
  }, [connectedWallet, txHashInRecoil]);

  return {
    governanceProposals,
    vaultProposals,
    balanceDetail,
    tokenBalance,
    requiredInitialFunding,
    governanceParameters,
    tokenWhitelist,
    addressWhitelist,
    getProposalByIndex,
    getVaultProposalByIndex,
    getTokenInWhitelist,
    getAddressInWhitelist
  };
};

export default useContractForge;
