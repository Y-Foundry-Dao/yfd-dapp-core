import GettingStarted from 'components/pageBody/GettingStarted';
import VaultsFeatured from 'components/pageBody/VaultsFeatured';
import InitiativesFeatured from 'components/pageBody/InitiativesFeatured';

export default function LandingPage() {
  return (
    <>
      <GettingStarted />
      <InitiativesFeatured />
      <VaultsFeatured />
    </>
  );
}
