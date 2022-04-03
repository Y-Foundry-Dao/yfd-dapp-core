import { MsgInstantiateContract } from '@terra-money/terra.js';
import instantiateParameters from 'utilities/instantiation/instantiateParameters';
import { HumanAddr } from 'types/wallet';

const instantiateContractMsg = (walletAddress: HumanAddr) => {
  const instantiateMsg = new MsgInstantiateContract(
    walletAddress,
    walletAddress,
    58705,
    instantiateParameters
  );
  return instantiateMsg;
};

export default instantiateContractMsg;
