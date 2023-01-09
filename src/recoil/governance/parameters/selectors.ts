import { selector } from 'recoil';
import queryGovernanceParameter from '@utilities/messagesQuery/forge/queryGovernanceParameter';
import { addressConnectedAtom } from '@recoil/connected/address/atoms';

export const selectGovParamFYFDVaultPropMin = selector({
  key: 'selectGovParamFYFDVaultPropMin',
  get: async ({ get }) => {
    if (get(addressConnectedAtom) == '') {
      return 0;
    }
    const response = await queryGovernanceParameter('fYFD_VaultProposalMin');
    console.log('{SELECTOR} Minimum fYFD for Vault Proposal : ', response);
    return response;
  }
});

export default { selectGovParamFYFDVaultPropMin };
