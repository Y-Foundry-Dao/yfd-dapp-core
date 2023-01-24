import { useEffect } from 'react';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';
import {
  Button,
  Popover,
  PopoverTrigger,
  Flex,
  Box,
  Tooltip
} from '@chakra-ui/react';
import { addressConnectedAtom } from '@recoil/governance/parameters/atoms';
// import { myYFD, myFYFD } from '@utilities/myValues';

import {
  selectMinFYFDVaultProp,
  selectMinFYFDGovProp,
  selectMinFYFDEmergencyProp
} from '@recoil/governance/parameters/selectors';

import { Icons } from '@var/icons';
import styles from '@scss/app.module.scss';

//import FyfdPopoverEmpty from './PopoverEmpty';
//import FyfdPopoverBalance from './PopoverBalance';
import { selectMyFYFD, selectMyYFD } from '@recoil/connected/balance/selectors';
import { selectYFDConnected } from '../../recoil/connected/balance/selectors';
import { currentContractForgeAtom } from 'recoil/chainInfo/atoms';
import useChainInfo from 'hooks/useChainInfo';
import NoticeLoading from '../../components/NoticeLoading';

const styleVote = 'material-symbols-outlined';
const styleProposal = 'material-symbols-outlined';
const styleGuardian = 'material-symbols-outlined';

export default function LockYFDMenu() {
  const { currentContractForge } = useChainInfo();
  const { currentContractGovToken } = useChainInfo();

  const balanceYFD = useRecoilValueLoadable(selectMyYFD);
  if (balanceYFD.state === 'loading') {
    return <NoticeLoading />;
  } else if (balanceYFD.state === 'hasError') {
    return <>ERROR: {balanceYFD.contents.message}</>;
  } else if (balanceYFD.state === 'hasValue') {
    const YFD = balanceYFD.contents;
    console.log('Balance YFD: ', balanceYFD);
    return (
      <>
        <Popover placement="bottom-end">
          <PopoverTrigger>
            <Button className={styles.menuButton}>Lock $YFD</Button>
          </PopoverTrigger>
        </Popover>
      </>
    );
  }

  return <></>;
  //  const balancefYFD = useRecoilValueLoadable(selectMyFYFD);
  //  console.log('Balance FYFD: ', balancefYFD);
  //  const minFYFDVaultProp = useRecoilValueLoadable(selectMinFYFDVaultProp);
  //const minFYFDGovProp = useRecoilValueLoadable(selectMinFYFDGovProp);
  //const minFYFDEmergencyProp = useRecoilValueLoadable(
  // selectMinFYFDEmergencyProp
  //);
}
