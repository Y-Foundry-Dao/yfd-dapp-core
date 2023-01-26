import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { addressConnectedAtom } from '@recoil/connected/address/atoms';
import {
  balanceYfdConnectedAtom,
  balanceFyfdConnectedAtom
} from '@recoil/connected/address/atoms';

import {
  currentContractForgeAtom,
  currentContractGovTokenAtom
} from '@recoil/chainInfo/atoms';

import useChainInfo from 'hooks/useChainInfo';
import queryMsg from '@utilities/messagesQuery/queryMsg';
import queryBalance from '@utilities/messagesQuery/cw20/queryBalance';

import MenuPopoverBalance from './MenuPopoverBalance';
import convertFromBase from '@utilities/converters/convertFromBase';
import MenuLockYFD from './Menu';
import { useLCDClient } from '@terra-money/wallet-provider';

type BalanceResponse = {
  balance: string;
};

// async function getBalanceYFD(address: string, token: any) {
//   try {
//     const result: BalanceResponse = await queryMsg(
//       token,
//       queryBalance(address)
//     );
//     return result.balance;
//   } catch (error) {
//     console.error('ERROR getting YFD Balance: ', error);
//     return 0;
//   }
// }

// async function getBalanceFYFD(address: string, forge: any) {
//   try {
//     const result: BalanceResponse = await queryMsg(
//       forge,
//       queryBalance(address)
//     );
//     return result.balance;
//   } catch (error) {
//     console.error('ERROR getting fYFD Balance: ', error);
//     return 0;
//   }
// }

// function MyYFD() {
//   return convertFromBase(
//     Number(useRecoilValue(balanceYfdConnectedAtom))
//   ).toFixed(5);
// }

// function MyFYFD() {
//   return convertFromBase(
//     Number(useRecoilValue(balanceFyfdConnectedAtom))
//   ).toFixed(5);
// }

export default function LockYFDMenu() {
  const { currentContractForge, currentContractGovToken } = useChainInfo();
  // const forge = useRecoilValue(currentContractForgeAtom);
  // const token = useRecoilValue(currentContractGovTokenAtom);
  // const address = useRecoilValue(addressConnectedAtom);
  // const setYFD = useSetRecoilState(balanceYfdConnectedAtom);
  // const setFYFD = useSetRecoilState(balanceFyfdConnectedAtom);

  //  'minFYFDGovPropAtom'
  //
  // 'minFYFDEmergencyPropAtom'

  /*
  setMinFYFDGovProp(mfgp);
  setMinFYFDVaultProp(mfvp);
  setMinFYFDEmergencyProp(mfep);
  */

  // useEffect(() => {
  //   getBalanceYFD(address, token).then((result) => {
  //     const yfd = Number(result);
  //     setYFD(yfd);
  //   });
  //   getBalanceFYFD(address, forge).then((result) => {
  //     const fyfd = Number(result);
  //     setFYFD(fyfd);
  //   });
  // }, []);
  return <MenuLockYFD />;
}
