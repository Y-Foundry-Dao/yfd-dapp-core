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
  grid-area: pageHeader;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  background: ${(props) => `${props.theme.header.backgroundColor}`};
  pointer-events: auto;
  filter: blur(0) !important;

  @media (min-width: 755px) and (max-width: 920px) {
    font-size: small;
  }
`;

export default HeaderBar;
