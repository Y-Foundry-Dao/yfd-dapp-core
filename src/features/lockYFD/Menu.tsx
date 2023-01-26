import {
  Button,
  Popover,
  PopoverTrigger,
  Flex,
  Box,
  Tooltip,
  Text
} from '@chakra-ui/react';
import {
  useRecoilValue,
  useRecoilState,
  useRecoilValueLoadable,
  useSetRecoilState
} from 'recoil';

import { Icons } from '@var/icons';
import styles from '@scss/app.module.scss';
import useMsg from '@hooks/useMsg';
import queryGovernanceParameter from '@utilities/messagesQuery/forge/queryGovernanceParameter';
import FyfdPopoverBalance from './MenuPopoverBalance';
import MenuPopoverNoFYFD from './MenuNoFYFD';

import {
  currentContractForgeAtom,
  currentContractGovTokenAtom
} from '@recoil/chainInfo/atoms';
import {
  balanceYfdConnectedAtom,
  balanceFyfdConnectedAtom
} from '@recoil/connected/address/atoms';
import {
  minFYFDVaultPropAtom,
  minFYFDGovPropAtom,
  minFYFDEmergencyPropAtom
} from '@recoil/governance/parameters/atoms';
import { useEffect } from 'react';
import MyYFD from '@components/profile/MyYFD';
import { selectMyFYFD, selectMyYFD } from '@recoil/connected/balance/selectors';

const styleVote = 'material-symbols-outlined';
const styleProposal = 'material-symbols-outlined';
const styleGuardian = 'material-symbols-outlined';

export default function MenuLockYFD() {
  const { queryMsg } = useMsg();
  const forge = useRecoilValue(currentContractForgeAtom);
  const myYFD = useRecoilValueLoadable(selectMyYFD);
  const myFYFD = useRecoilValueLoadable(selectMyFYFD);
  const [minFYFDVaultProp, setMinFYFDVaultProp] =
    useRecoilState(minFYFDVaultPropAtom);
  const [minFYFDGovProp, setMinFYFDGovProp] =
    useRecoilState(minFYFDGovPropAtom);
  const [minFYFDEmergencyProp, setMinFYFDEmergencyProp] = useRecoilState(
    minFYFDEmergencyPropAtom
  );

  const qVault = queryGovernanceParameter('fYFD_VaultProposalMin');
  const qGov = queryGovernanceParameter('fYFD_GovernanceProposalMin');
  const qEmerg = queryGovernanceParameter('fYFD_EmergencyProposalMin');
  useEffect(() => {
    async function getData() {
      if (forge === '') {
        return;
      }
      const rVault = await queryMsg(forge, qVault);
      const vaultMinimum = rVault['parameter_type']['integer']['value'];
      const rGov = await queryMsg(forge, qGov);
      const govMinimum = rGov['parameter_type']['integer']['value'];
      const rEmerg = await queryMsg(forge, qEmerg);
      const emergencyMinimum = rEmerg['parameter_type']['integer']['value'];
      console.log('rVault', rVault);
      console.log('vault minimum: ', vaultMinimum);
      console.log('rGov', rGov);
      console.log('gov minimum: ', govMinimum);
      console.log('rEmerg', rEmerg);
      console.log('emergency minimum: ', emergencyMinimum);
      setMinFYFDVaultProp(vaultMinimum);
      setMinFYFDGovProp(govMinimum);
      setMinFYFDEmergencyProp(emergencyMinimum);
    }
    getData().then((res) => res);
  }, [forge]);
  // const rVault = queryMsg(forge, qVault).then((minFYFDVaultProp) => {
  //   //console.warn('Vault Prop FYFD: ', minFYFDVaultProp);
  //   //const vKey = Object.keys(minFYFDVaultProp.contents.parameter_type)[0];
  //   const minimum = minFYFDVaultProp['parameter_type']['integer']['value'];
  //   console.log('vault minimum: ', minimum);
  //   //const minVaultValue =
  //   //  minFYFDVaultProp.contents.parameter_type[vKey].value.toString();
  //   //const minVaultName = minFYFDVaultProp.contents.name || undefined;
  //   //console.warn(minVaultName + ': ' + minVaultValue);
  // });

  // const qGov = queryGovernanceParameter('fYFD_GovernanceProposalMin');
  // const rGov = queryMsg(forge, qGov).then((minFYFDGovProp) => {
  //   console.log(
  //     'gov minimum: ',
  //     minFYFDGovProp['parameter_type']['integer']['value']
  //   );
  // });
  // const qEmerg = queryGovernanceParameter('fYFD_EmergencyProposalMin');
  // const rEmerg = queryMsg(forge, qEmerg).then((minFYFDEmergencyProp) => {
  //   console.log(
  //     'emergency minimum: ',
  //     minFYFDEmergencyProp['parameter_type']['integer']['value']
  //   );
  // });
  //const mfvp = getMinFYFDVaultProp(forge);
  //const mfgp = getMinFYFDGovProp(forge);
  //const mfep = getMinFYFDEmergencyProp(forge);
  //setMinFYFDVaultProp(mfvp);
  //setMinFYFDGovProp(mfgp);
  //setMinFYFDEmergencyProp(mfep);

  /*
  if (
    minFYFDVaultProp.state === 'hasValue' &&
    typeof minFYFDVaultProp.contents !== 'undefined' &&
    minFYFDGovProp.state === 'hasValue' &&
    minFYFDGovProp.contents !== 'undefined' &&
    minFYFDEmergencyProp.state === 'hasValue' &&
    minFYFDEmergencyProp.contents !== 'undefined'
  ) {


    const gKey = Object.keys(minFYFDGovProp.contents.parameter_type)[0];
    const minGovValue =
      minFYFDGovProp.contents.parameter_type[vKey].value.toString();
    const minGovName = minFYFDGovProp.contents.name;
    console.log(minGovName + ': ' + minGovValue);

    const eKey = Object.keys(minFYFDEmergencyProp.contents.parameter_type)[0];
    const minEmergencyValue =
      minFYFDEmergencyProp.contents.parameter_type[eKey].value.toString();
    const minEmergencyName = minFYFDEmergencyProp.contents.name || undefined;
    console.log(minEmergencyName + ': ' + minEmergencyValue);

    /*
    console.log(
      '{MENU.tsx} Vault Proposal Minimum ( ' + vaultMinimum + ' ) FYFD: ',
      JSON.stringify(minFYFDVaultProp)
    );
    console.log(
      '{MENU.tsx} Vault Proposal Minimum FYFD: ',
      JSON.stringify(minFYFDGovProp)
    );
    console.log(
      '{MENU.tsx} Emergency Proposal Minimum FYFD: ',
      JSON.stringify(minFYFDEmergencyProp)
    );

    if (minGovValue < +balancefYFD) {
      styleVote = styleVote + ' ' + styles['icon-create'];
    }

    if (minVaultValue < +balancefYFD) {
      styleProposal = styleProposal + ' ' + styles['icon-create'];
    }

    if (minEmergencyValue < +balancefYFD) {
      styleGuardian = styleGuardian + ' ' + styles['icon-create'];
    }
  //  console.log('BalancefYFD', BalancefYFD);
  if (1 > +balancefYFD) {
    return <MenuPopoverNoFYFD />;
  } else {
    return (
      <Popover>
        <PopoverTrigger>
          <Button className={styles.stakeYfd}>
            <Flex className={styles.stakeYfdIcons}>
              <Box className={styles.stakeYfdIcon}>
                <Tooltip
                  label={minGovName}
                  aria-label={minGovName}
                  placement="top"
                >
                  <span className={styleVote}>{Icons.vote}</span>
                </Tooltip>
              </Box>
              <Box className={styles.stakeYfdIcon}>
                <Tooltip
                  label={minVaultName}
                  aria-label={minVaultName}
                  placement="top"
                >
                  <span className={styleProposal}>{Icons.proposal}</span>
                </Tooltip>
              </Box>
              <Box className={styles.stakeYfdIcon}>
                <Tooltip
                  label={minEmergencyName}
                  aria-label={minEmergencyName}
                  placement="top"
                >
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
  */
  //} else {
  if (myYFD.state === 'loading' || myFYFD.state === 'loading') {
    return <>loading...</>;
  } else if (myFYFD.state === 'hasValue' && myFYFD.state === 'hasValue') {
    return (
      <>
        yfd Balance: {myYFD.contents} and fYFD balance: {myFYFD.contents}
      </>
    );
  } else {
    return <>Loading...</>;
  }

  //}
}
