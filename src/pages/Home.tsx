import GettingStarted from '@features/GettingStarted';
import VaultsFeatured from '@features/VaultsFeatured';
import InitiativesFeatured from '@features/InitiativesFeatured';
import AirdropJuno from '@features/airdrop/Juno';
import AirdropTerra from '@features/airdrop/Terra';

export default function Home() {
  return (
    <>
      <GettingStarted />
      <AirdropJuno />
      <AirdropTerra />
    </>
  );
}
