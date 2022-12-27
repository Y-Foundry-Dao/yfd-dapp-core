import { Route, Routes } from 'react-router-dom';

import Home from '@pages/Home';
import PageGettingStarted from '@pages/GettingStarted/Overview';
import PageVoter from '@pages/GettingStarted/Voter';
import PageProposer from '@pages/GettingStarted/Proposer';
import PageSupporter from '@pages/GettingStarted/Supporter';
import PageBuilder from '@pages/GettingStarted/Builder';
import VaultProposals from '@pages/ProposalsVaults';
import GovernanceProposals from '@features/ProposalsGovernance';
import InitiativeProposals from '@features/ProposalsInitiatives';
import DepositYfd from '@pages/DepositYfd';
import VaultsFeatured from '@features/VaultsFeatured';
import InitiativesFeatured from '@features/InitiativesFeatured';
import GovernanceParameters from '@features/governance/parameters/list/Layout';
import Favorites from '@features/profile/Favorites';
import NoMatch from '@pages/404';

export default function MainContainer() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/getting-started/*">
        <Route index element={<PageGettingStarted />} />
        <Route path="voter" element={<PageVoter />} />
        <Route path="proposer" element={<PageProposer />} />
        <Route path="supporter" element={<PageSupporter />} />
        <Route path="builder" element={<PageBuilder />} />
      </Route>
      <Route path="/proposals-vaults" element={<VaultProposals />}></Route>
      <Route path="/deposit-yfd" element={<DepositYfd />}></Route>
      <Route path="/vaults" element={<VaultsFeatured />}></Route>
      <Route path="/initiatives" element={<InitiativesFeatured />}></Route>
      <Route path="/favorites" element={<Favorites />}></Route>
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
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}
