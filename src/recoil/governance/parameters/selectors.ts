import { selector } from 'recoil';
import queryMsg from '@utilities/messagesQuery/queryMsg';
import queryGovernanceParameter from '@utilities/messagesQuery/forge/queryGovernanceParameter';
import { addressConnectedAtom } from '@recoil/connected/address/atoms';
import { currentContractForgeAtom } from '@recoil/chainInfo/atoms';

export const selectMinFYFDVaultProp = selector({
  key: 'selectMinFYFDVaultProp',
  get: async ({ get }) => {
    const query = queryGovernanceParameter('fYFD_VaultProposalMin');
    const response = await queryMsg(get(currentContractForgeAtom), query);
    return response;
  }
});

export const selectMinFYFDGovProp = selector({
  key: 'selectMinFYFDGovProp',
  get: async ({ get }) => {
    const query = queryGovernanceParameter('fYFD_GovernanceProposalMin');
    const response = await queryMsg(get(currentContractForgeAtom), query);
    return response;
  }
});

export const selectMinFYFDEmergencyProp = selector({
  key: 'selectMinFYFDEmergencyProp',
  get: async ({ get }) => {
    const query = queryGovernanceParameter('fYFD_EmergencyProposalMin');
    const response = await queryMsg(get(currentContractForgeAtom), query);
    return response;
  }
});
