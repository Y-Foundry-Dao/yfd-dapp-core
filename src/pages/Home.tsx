import GettingStarted from '@features/GettingStarted';
import VaultsFeatured from '@features/VaultsFeatured';
import InitiativesFeatured from '@features/InitiativesFeatured';

export default function Home() {
  return (
    <>
      <GettingStarted />
      <InitiativesFeatured />
      <VaultsFeatured />
    </>
  );
}
