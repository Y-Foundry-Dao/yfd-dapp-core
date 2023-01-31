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
  // load the chain contracts and parameters into state
  useChainInfo();
  //prepare the contract query function
  const { queryMsg } = useMsg();
  // get the current contract forge from state created by useChainInfo to query governance parameters below
  const forge = useRecoilValue(currentContractForgeAtom);
  // get the user's fyfd and yfd balances and format them for display ( 6 decimals )
  const myYFD = useRecoilValueLoadable(selectMyYFD);
  const myFYFD = useRecoilValueLoadable(selectMyFYFD);
  // prepare variables to set the minimum fyfd required for each proposal type to state
  const [minVault, setMinFYFDVaultProp] = useRecoilState(minFYFDVaultPropAtom);
  const [minGov, setMinFYFDGovProp] = useRecoilState(minFYFDGovPropAtom);
  const [minEmergency, setMinFYFDEmergencyProp] = useRecoilState(
    minFYFDEmergencyPropAtom
  );

  // query the governance parameters for the minimum fyfd required for each proposal type
  const qVault = queryGovernanceParameter('fYFD_VaultProposalMin');
  const qGov = queryGovernanceParameter('fYFD_GovernanceProposalMin');
  const qEmerg = queryGovernanceParameter('fYFD_EmergencyProposalMin');

  useEffect(() => {
    async function getData() {
      // if the forge contract is not loaded or the fyfd or yfd balances are loading, return until the data is loaded
      const rVault = await queryMsg(forge, qVault);
      const rGov = await queryMsg(forge, qGov);
      const rEmerg = await queryMsg(forge, qEmerg);
      if (
        forge === '' ||
        myYFD.state === 'loading' ||
        myFYFD.state === 'loading' ||
        rVault.state === 'loading' ||
        rGov.state === 'loading' ||
        rEmerg.state === 'loading'
      ) {
        return;
      }
      const fyfd = myFYFD.contents;
      setMinFYFDVaultProp(rVault['parameter_type']['integer']['value']);
      setMinFYFDGovProp(rGov['parameter_type']['integer']['value']);
      setMinFYFDEmergencyProp(rEmerg['parameter_type']['integer']['value']);
      // check to make sure the minimum fyfd required for each proposal type is greater than 0
      if (+minEmergency === 0 || +minGov === 0 || +minVault === 0) {
        return;
      }
      // set the icon style for each proposal type based on the user's fyfd balance
      if (+minGov < +fyfd) {
        styleVote = styleVote + ' ' + styles['icon-create'];
      }
      if (+minVault < +fyfd) {
        styleProposal = styleProposal + ' ' + styles['icon-create'];
      }
      if (+minEmergency < +fyfd) {
        console.warn(
          'FYFD balance is GREATER Than Required for emergency proposal: ',
          +minEmergency - +fyfd,
          'rEMERGENCY: ',
          +minEmergency
        );
        styleGuardian = styleGuardian + ' ' + styles['icon-create'];
      }
    }
    getData().then((res) => res);
  }, [
    forge,
    myYFD.state,
    myFYFD.state,
    queryMsg,
    qVault,
    qGov,
    qEmerg,
    myFYFD.contents,
    setMinFYFDVaultProp,
    setMinFYFDGovProp,
    setMinFYFDEmergencyProp,
    minGov,
    minVault,
    minEmergency
  ]);

  if (myFYFD.state === 'hasValue' && myYFD.state === 'hasValue') {
    const fyfd = myFYFD.contents;

    // if the user has no fyfd, return the "Lock $YFD" button instead of the fyfd menu
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
  return <NoticeLoading />;
}
