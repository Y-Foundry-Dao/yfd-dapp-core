import { useEffect } from 'react';
import { Box, Tooltip } from '@chakra-ui/react';
import { useRecoilValue, useRecoilState, useRecoilValueLoadable } from 'recoil';
import useMsg from '@hooks/useMsg';
import queryGovernanceParameter from '@utilities/messagesQuery/forge/queryGovernanceParameter';

import {
  minFYFDVaultPropAtom,
  minFYFDGovPropAtom
} from '@recoil/governance/parameters/atoms';
import { currentContractForgeAtom } from '@recoil/chainInfo/atoms';
import { selectMyFYFD } from '@recoil/connected/balance/selectors';

import { Icons } from '@var/icons';
import styles from '@scss/app.module.scss';

let styleProposal = 'material-symbols-outlined';

export default function IconProposal() {
  //prepare the contract query function
  const { queryMsg } = useMsg();
  // get the current contract forge from state created by useChainInfo to query governance parameters below
  const forge = useRecoilValue(currentContractForgeAtom);
  // get the user's fyfd and yfd balances and format them for display ( 6 decimals )
  const myFYFD = useRecoilValueLoadable(selectMyFYFD);
  // prepare variables to set the minimum fyfd required for each proposal type to state
  const [minVault, setMinFYFDVaultProp] = useRecoilState(minFYFDVaultPropAtom);
  const [minGov, setMinFYFDGovProp] = useRecoilState(minFYFDGovPropAtom);

  // query the governance parameters for the minimum fyfd required for each proposal type
  const qVault = queryGovernanceParameter('fYFD_VaultProposalMin');
  const qGov = queryGovernanceParameter('fYFD_GovernanceProposalMin');

  useEffect(() => {
    async function getData() {
      // if the forge contract is not loaded or the fyfd or yfd balances are loading, return until the data is loaded
      const rVault = await queryMsg(forge, qVault);
      const rGov = await queryMsg(forge, qGov);
      // if everything isn't ready to go don't load anything
      if (
        forge === '' ||
        myFYFD.state === 'hasValue' ||
        rVault.state === 'hasValue' ||
        rGov.state === 'hasValue'
      ) {
        const fyfd = myFYFD.contents;
        setMinFYFDVaultProp(rVault['parameter_type']['integer']['value']);
        setMinFYFDGovProp(rGov['parameter_type']['integer']['value']);
        // check to make sure the minimum fyfd required for each proposal type is greater than 0
        // set the icon style for each proposal type based on the user's fyfd balance
        // any amount of YFD can vote so the icon color is active if the user has any fyfd
        if (+minVault > 0 && +minGov > 0 && +minVault < +fyfd) {
          styleProposal = styleProposal + ' ' + styles['icon-create'];
        }
      }
    }
    getData().then((res) => res);
  }, [
    forge,
    myFYFD.state,
    minGov,
    minVault,
    qGov,
    qVault,
    queryMsg,
    setMinFYFDGovProp,
    setMinFYFDVaultProp,
    myFYFD.contents
  ]);

  return (
    <>
      <Box className={styles.stakeYfdIcon}>
        <Tooltip label="Propose" aria-label="Propose" placement="top">
          <span className={styleProposal}>{Icons.proposal}</span>
        </Tooltip>
      </Box>
    </>
  );
}
