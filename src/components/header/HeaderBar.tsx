import styled from 'styled-components';
import Logo from 'components/header/logo/Logo';
import NavLinks from 'components/header/navigation/navlinks/NavLinks';
import Burger from 'components/header/burger/Burger';
import Toolbar from '@mui/material/Toolbar';
import { useConnectedWallet } from '@terra-money/wallet-provider';
import { ConnectedWalletMenu } from 'components/header/wallet/ConnectedWalletMenu';
import { ConnectWalletMenu } from 'components/header/wallet/ConnectWalletMenu';

function HeaderBar() {
  const connectedWallet: any = useConnectedWallet();
  return (
    <Header id="home">
      <Logo />
      <NavLinks />
      <Toolbar>
        {connectedWallet ? <ConnectedWalletMenu /> : <ConnectWalletMenu />}
      </Toolbar>
      <Burger />
    </Header>
  );
}

const Header = styled.header`
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  background: rgba(4, 3, 7, 0.5);
  pointer-events: auto;
  filter: blur(0) !important;

  @media (min-width: 1440px) {
    height: 81px;
  }
`;

export default HeaderBar;
