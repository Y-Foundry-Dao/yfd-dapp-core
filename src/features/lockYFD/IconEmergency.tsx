import { useEffect } from 'react';
import { Box, Tooltip } from '@chakra-ui/react';
import { useRecoilValue, useRecoilState, useRecoilValueLoadable } from 'recoil';
import useMsg from '@hooks/useMsg';
import queryGovernanceParameter from '@utilities/messagesQuery/forge/queryGovernanceParameter';

import { minFYFDEmergencyPropAtom } from '@recoil/governance/parameters/atoms';
import { currentContractForgeAtom } from '@recoil/chainInfo/atoms';
import { selectMyFYFD } from '@recoil/connected/balance/selectors';
import { addressCanProposeEmergencyAtom } from '@recoil/connected/address/atoms';
import { Icons } from '@var/icons';
import styles from '@scss/app.module.scss';
import NoticeLoading from '@components/NoticeLoading';

let styleGuardian = 'material-symbols-outlined';

export default function IconEmergency() {
  //prepare the contract query function
  const { queryMsg } = useMsg();
  // get the current contract forge from state created by useChainInfo to query governance parameters below
  const forge = useRecoilValue(currentContractForgeAtom);
  // get the user's fyfd and yfd balances and format them for display ( 6 decimals )
  const myFYFD = useRecoilValueLoadable(selectMyFYFD);
  // prepare variables to set the minimum fyfd required for each proposal type to state
  const [minEmergency, setMinFYFDEmergencyProp] = useRecoilState(
    minFYFDEmergencyPropAtom
  );
  const canProposeEmergency = useRecoilValue(addressCanProposeEmergencyAtom);
  let contentGuardian = '';

  // query the governance parameters for the minimum fyfd required for each proposal type
  const qEmerg = queryGovernanceParameter('fYFD_EmergencyProposalMin');

  useEffect(() => {
    async function getData() {
      // if the forge contract is not loaded or the fyfd or yfd balances are loading, return until the data is loaded
      const rEmerg = await queryMsg(forge, qEmerg);
      // if everything isn't ready to go don't load anything
      if (
        forge === '' ||
        myFYFD.state === 'loading' ||
        rEmerg.state === 'loading'
      ) {
        return <NoticeLoading />;
      }
      const fyfd = myFYFD.contents;
      setMinFYFDEmergencyProp(rEmerg['parameter_type']['integer']['value']);
      // check to make sure the minimum fyfd required for each proposal type is greater than 0
      // set the icon style for each proposal type based on the user's fyfd balance
      // any amount of YFD can vote so the icon color is active if the user has any fyfd
      if (canProposeEmergency) {
        styleGuardian = styleGuardian + ' ' + styles['icon-create'];
        contentGuardian =
          '<Box className={styles.stakeYfdIcon}><Tooltip label="Protect" aria-label="Protect" placement="top">' +
          '<span className=' +
          styleGuardian +
          '>' +
          Icons.guardian +
          '</span></Tooltip></Box>';
      }
    }
    getData().then((res) => res);
  }, [
    forge,
    minEmergency,
    canProposeEmergency,
    queryMsg,
    qEmerg,
    myFYFD.state,
    myFYFD.contents,
    setMinFYFDEmergencyProp
  ]);

  return <>{contentGuardian}</>;
}
