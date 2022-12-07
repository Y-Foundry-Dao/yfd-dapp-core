import { Route, Routes } from 'react-router-dom';

import styles from 'styles/app.module.scss';

import NavMain from 'components/pageBody/nav/main/menu';

import LandingPage from 'components/pageBody/LandingPage';
import GettingStarted from 'components/pageBody/GettingStarted';
import VaultProposals from 'components/pageBody/ProposalsVaults';
import GovernanceProposals from 'components/pageBody/ProposalsGovernance';
import InitiativeProposals from 'components/pageBody/ProposalsInitiatives';
import DepositYfd from 'components/pageBody/DepositYfd';

import VaultsFeatured from 'components/pageBody/VaultsFeatured';
import InitiativesFeatured from 'components/pageBody/InitiativesFeatured';
import GovernanceParameters from 'components/governance/parameters/list/Layout';

export default function MainContainer() {
  return (
    <div className={styles['main-container']}>
      <NavMain />
      <div className={styles['content-wrapper']}>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
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
      </div>
    </div>
  );
}
