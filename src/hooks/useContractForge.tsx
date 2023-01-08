import useMsg from './useMsg';
import queryAllProposalContracts from 'utilities/messagesQuery/forge/queryAllProposalContracts';
import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import queryBalance from 'utilities/messagesQuery/cw20/queryBalance';
import txHashAtom from 'recoil/txHash/atom';
import queryBalanceDetail from 'utilities/messagesQuery/forge/queryBalanceDetail';
import stakedYFDAtom from 'recoil/stakedYFD/atom';
import { addressConnectedAtom } from '@recoil/connected/address/atoms';
import queryAllVaultProposals from 'utilities/messagesQuery/forge/queryAllVaultProposals';
import queryVaultFundingMath from 'utilities/messagesQuery/forge/queryVaultFundingMath';
import convertToBase from 'utilities/converters/convertToBase';
import convertFromBase from 'utilities/converters/convertFromBase';
import queryAllGovernanceParameters from 'utilities/messagesQuery/forge/queryAllGovernanceParameters';
import queryGovernanceParameter from 'utilities/messagesQuery/forge/queryGovernanceParameter';
import queryAllTokenWhitelist from 'utilities/messagesQuery/forge/queryAllTokenWhitelist';
import queryAllAddressWhitelist from 'utilities/messagesQuery/forge/queryAllAddressWhitelist';
import queryAddressWhitelist from 'utilities/messagesQuery/forge/queryAddressWhitelist';
import queryProposalByIndex from 'utilities/messagesQuery/forge/queryProposalByIndex';
import queryTokenWhitelist from 'utilities/messagesQuery/forge/queryTokenWhitelist';
import useContractCW20Connected from './useContractCW20Connected';
import getChainDeploy from '@utilities/getValues';

import {
  currentChainIDAtom,
  currentContractForgeAtom
} from 'recoil/chainInfo/atoms';

const useContractForge = (developmentCost?: any, nftQuantity?: any) => {
  const addressConnected = useRecoilValue(addressConnectedAtom);
  const chainID = useRecoilValue(currentChainIDAtom);
  const contractForge = getChainDeploy(chainID, 'forge');
  const contractYFD = getChainDeploy(chainID, 'token');

  const { queryMsg } = useMsg();
  const { tokenBalance, tokenInfo, marketingInfo, allAccounts } =
    useContractCW20Connected(contractForge);

  const [balanceDetail, setBalanceDetail] = useState({});

  const [governanceProposals, setGovernanceProposals] = useState<any>([]);
  const [governanceParameters, setGovernanceParameters] = useState([]);
  const [addressWhitelist, setAddressWhitelist] = useState([]);
  const [tokenWhitelist, setTokenWhitelist] = useState([]);

  const [vaultProposals, setVaultProposals] = useState<any>([]);
  const [requiredInitialFunding, setRequiredInitialFunding] = useState<any>(0);

  const setStakedYFD = useSetRecoilState(stakedYFDAtom);

  const txHashInRecoil = useRecoilValue(txHashAtom);

  const getAllGovernanceParameters = async () => {
    const response = await queryMsg(
      contractForge,
      queryAllGovernanceParameters()
    );
    return response;
  };

  const getGovernanceParameter = async (name: string) => {
    const response = await queryMsg(
      contractForge,
      queryGovernanceParameter(name)
    );
    return response;
  };

  const getAllProposalContracts = async () => {
    const response = await queryMsg(contractForge, queryAllProposalContracts());
    return response;
  };

  const getProposalByIndex = async (index: any) => {
    const response = await queryMsg(contractForge, queryProposalByIndex(index));
    return response;
  };

  const getAllVaultProposals = async () => {
    const response = await queryMsg(contractForge, queryAllVaultProposals());
    return response;
  };

  const getVaultProposalByIndex = async (index: any) => {
    const response = await queryMsg(contractForge, queryProposalByIndex(index));
    return response;
  };

  const getAllTokenWhitelist = async () => {
    const response = await queryMsg(contractForge, queryAllTokenWhitelist());
    return response;
  };

  const getTokenInWhitelist = async (address: any) => {
    const response = await queryMsg(
      contractForge,
      queryTokenWhitelist(address)
    );
    return response;
  };

  const getAllAddressWhitelist = async () => {
    const response = await queryMsg(contractForge, queryAllAddressWhitelist());
    return response;
  };

  const getAddressInWhitelist = async (address: any) => {
    const response = await queryMsg(
      contractForge,
      queryAddressWhitelist(address)
    );
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

  const getBalanceDetail = async () => {
    if (addressConnected) {
      const response = await queryMsg(
        contractForge,
        queryBalanceDetail(addressConnected)
      );
      return response;
    }
  };

  const getVaultFundingMath = async (
    developmentCost: number,
    nftQuantity: number
  ) => {
    const devCostConverted = convertToBase(developmentCost);
    const response: any = await queryMsg(
      contractForge,
      queryVaultFundingMath(devCostConverted, nftQuantity)
    );
    return response;
  };

  const setAllVaultProposalsToState = async () => {
    try {
      const vaultProposals: any = await getAllVaultProposals();
      if (vaultProposals === undefined) {
        setVaultProposals([]);
        return;
      }
      setVaultProposals(vaultProposals.proposals);
    } catch (e) {
      console.log('error', e);
    }
  };

  const setAllGovernanceProposalsToState = async () => {
    const governanceProposals: any = await getAllProposalContracts();
    if (governanceProposals === undefined) {
      setGovernanceProposals([]);
      return;
    }
    setGovernanceProposals(governanceProposals.proposals);
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
    const vaultFundingMath: any = await getVaultFundingMath(
      developmentCost,
      nftQuantity
    );
    if (vaultFundingMath === undefined) {
      setRequiredInitialFunding('0');
      return;
    }
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
  }, [developmentCost, nftQuantity]);

  useEffect(() => {
    setStakedYFDToState();
    setBalanceDetailToState();
    setAllTokenWhitelistToState();
    setAllAddressWhitelistToState();
  }, [addressConnected, txHashInRecoil]);

  return {
    governanceProposals,
    vaultProposals,
    balanceDetail,
    tokenBalance,
    tokenInfo,
    marketingInfo,
    allAccounts,
    requiredInitialFunding,
    governanceParameters,
    tokenWhitelist,
    addressWhitelist,
    getGovernanceParameter,
    getProposalByIndex,
    getVaultProposalByIndex,
    getTokenInWhitelist,
    getAddressInWhitelist
  };
};

export default useContractForge;
