import { Route, Routes } from 'react-router-dom';

import Home from '@pages/Home';
import GettingStarted from '@features/GettingStarted';
import VaultProposals from '@features/ProposalsVaults';
import GovernanceProposals from '@features/ProposalsGovernance';
import InitiativeProposals from '@features/ProposalsInitiatives';
import DepositYfd from '@features/DepositYfd';
import VaultsFeatured from '@features/VaultsFeatured';
import InitiativesFeatured from '@features/InitiativesFeatured';
import GovernanceParameters from '@features/governance/parameters/list/Layout';

export default function MainContainer() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/getting-started" element={<GettingStarted />}></Route>
      <Route path="/proposals-vaults" element={<VaultProposals />}></Route>
      <Route path="/deposit-yfd" element={<DepositYfd />}></Route>
      <Route path="/vaults" element={<VaultsFeatured />}></Route>
      <Route path="/initiatives" element={<InitiativesFeatured />}></Route>
      <Route
        path="/governance-proposals"
        element={<GovernanceProposals />}
      ></Route>
      <Route
        path="/governance-parameters"
        element={<GovernanceParameters />}
      ></Route>
      <Route
        path="/proposals-initiatives"
        element={<InitiativeProposals />}
      ></Route>
    </Routes>
  );
}
