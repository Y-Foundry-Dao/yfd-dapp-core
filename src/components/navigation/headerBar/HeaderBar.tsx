import styled from 'styled-components';
import Logo from 'components/navigation/logo/Logo';
import NavLinks from 'components/navigation/navlinks/NavLinks';
import Burger from 'components/navigation/burger/Burger';
import { WalletProvider } from '@terra-money/wallet-provider';
import Toolbar from '@mui/material/Toolbar';
import { ConnectedWalletMenu } from 'components/buttons/connect/ConnectedWalletMenu';
import { ConnectWalletMenu } from 'components/buttons/connect/ConnectWalletMenu';
import { ConnectedWallet } from '@terra-money/wallet-provider';

interface Props {
  id: string;
  src: string;
  alt: string;
  navLinks: Array<string>;
  modalIsOpen: boolean;
  open: boolean;
  walletConnected: string;
  setOpen: (arg0: boolean) => void;
}
interface StyledProps {
  modalIsOpen: boolean;
}

function HeaderBar({
  id,
  src,
  alt,
  navLinks,
  modalIsOpen,
  open,
  walletConnected,
  setOpen
}: Props) {
  return (
    <Header modalIsOpen={modalIsOpen} id={id}>
      <Logo src={src} alt={alt} />
      <NavLinks navLinks={navLinks} />
      <Toolbar>
        {walletConnected === 'WALLET_CONNECTED' ? (
          <ConnectedWalletMenu />
        ) : (
          <ConnectWalletMenu />
        )}
      </Toolbar>
      <Burger open={open} setOpen={setOpen} navLinks={navLinks} />
    </Header>
  );
}

const Header = styled.header<StyledProps>`
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
