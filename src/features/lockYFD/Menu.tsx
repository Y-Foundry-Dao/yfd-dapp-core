import { useEffect } from 'react';
import {
  Button,
  Popover,
  PopoverTrigger,
  Flex,
  Box,
  Tooltip
} from '@chakra-ui/react';
import { useRecoilValue, useRecoilState, useRecoilValueLoadable } from 'recoil';
import useMsg from '@hooks/useMsg';
import useChainInfo from 'hooks/useChainInfo';
import queryGovernanceParameter from '@utilities/messagesQuery/forge/queryGovernanceParameter';

import {
  minFYFDVaultPropAtom,
  minFYFDGovPropAtom,
  minFYFDEmergencyPropAtom
} from '@recoil/governance/parameters/atoms';
import { currentContractForgeAtom } from '@recoil/chainInfo/atoms';
import { selectMyFYFD, selectMyYFD } from '@recoil/connected/balance/selectors';

import { Icons } from '@var/icons';
import styles from '@scss/app.module.scss';
import FyfdPopoverBalance from './MenuPopoverBalance';
import MenuPopoverNoFYFD from './MenuNoFYFD';
import NoticeLoading from '@components/NoticeLoading';

let styleVote = 'material-symbols-outlined';
let styleProposal = 'material-symbols-outlined';
let styleGuardian = 'material-symbols-outlined';

export default function MenuLockYFD() {
  const { currentContractForge, currentContractGovToken } = useChainInfo();
  const { queryMsg } = useMsg();
  const forge = useRecoilValue(currentContractForgeAtom);
  const myYFD = useRecoilValueLoadable(selectMyYFD);
  const myFYFD = useRecoilValueLoadable(selectMyFYFD);
  const [minVault, setMinFYFDVaultProp] = useRecoilState(minFYFDVaultPropAtom);
  const [minGov, setMinFYFDGovProp] = useRecoilState(minFYFDGovPropAtom);
  const [minEmergency, setMinFYFDEmergencyProp] = useRecoilState(
    minFYFDEmergencyPropAtom
  );

  const qVault = queryGovernanceParameter('fYFD_VaultProposalMin');
  const qGov = queryGovernanceParameter('fYFD_GovernanceProposalMin');
  const qEmerg = queryGovernanceParameter('fYFD_EmergencyProposalMin');
  useEffect(() => {
    async function getData() {
      if (
        forge === '' ||
        myYFD.state === 'loading' ||
        myFYFD.state === 'loading'
      ) {
        return;
      }
      const fyfd = myFYFD.contents;
      const yfd = myYFD.contents;
      const rVault = await queryMsg(forge, qVault);
      const minVault = rVault['parameter_type']['integer']['value'];
      const rGov = await queryMsg(forge, qGov);
      const minGov = rGov['parameter_type']['integer']['value'];
      const rEmerg = await queryMsg(forge, qEmerg);
      const minEmergency = rEmerg['parameter_type']['integer']['value'];
      setMinFYFDVaultProp(minVault);
      setMinFYFDGovProp(minGov);
      setMinFYFDEmergencyProp(minEmergency);
      if (+minGov < +fyfd) {
        styleVote = styleVote + ' ' + styles['icon-create'];
      }
      if (+minVault < +fyfd) {
        styleProposal = styleProposal + ' ' + styles['icon-create'];
      }
      if (+minEmergency < +fyfd) {
        styleGuardian = styleGuardian + ' ' + styles['icon-create'];
      }
    }
    getData().then((res) => res);
  }, [forge, myYFD.state, myFYFD.state]);

  if (myYFD.state === 'loading' || myFYFD.state === 'loading') {
    return <NoticeLoading title="Loading Balances..." />;
  }

  if (myFYFD.state === 'hasValue' && myYFD.state === 'hasValue') {
    const fyfd = myFYFD.contents;
    const yfd = myYFD.contents;

    if (+fyfd === 0) {
      return <MenuPopoverNoFYFD />;
    }

    return (
      <Popover>
        <PopoverTrigger>
          <Button className={styles.stakeYfd}>
            <Flex className={styles.stakeYfdIcons}>
              <Box className={styles.stakeYfdIcon}>
                <Tooltip label="Vote" aria-label="Vote" placement="top">
                  <span className={styleVote}>{Icons.vote}</span>
                </Tooltip>
              </Box>
              <Box className={styles.stakeYfdIcon}>
                <Tooltip label="Propose" aria-label="Propose" placement="top">
                  <span className={styleProposal}>{Icons.proposal}</span>
                </Tooltip>
              </Box>
              <Box className={styles.stakeYfdIcon}>
                <Tooltip label="Protect" aria-label="Protect" placement="top">
                  <span className={styleGuardian}>{Icons.guardian}</span>
                </Tooltip>
              </Box>
            </Flex>
          </Button>
        </PopoverTrigger>
        <FyfdPopoverBalance />
      </Popover>
    );
  }
  return <NoticeLoading title="Loading Balances..." />;
}
