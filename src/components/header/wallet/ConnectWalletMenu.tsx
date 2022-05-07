import React from 'react';

import { useWallet } from '@terra-money/wallet-provider';

import AccountBalanceWallet from '@mui/icons-material/AccountBalanceWallet';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import Avatar from '@mui/material/Avatar';

export function ConnectWalletMenu() {
  const { availableConnections, connect } = useWallet();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <div>
      <Button
        color="inherit"
        startIcon={<AccountBalanceWallet />}
        onClick={handleMenu}
        aria-label="account of current user"
        aria-controls="menu-appbar"
      >
        Connect Wallet
      </Button>

      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {availableConnections.map(({ type, name, icon, identifier = '' }) => (
          <MenuItem
            key={'connection-' + type + identifier}
            onClick={() => {
              handleClose();
              connect(type, identifier);
            }}
          >
            <ListItemAvatar>
              <Avatar alt={name} src={icon} />
            </ListItemAvatar>
            <ListItemText>{name}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
