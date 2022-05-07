import {
  useConnectedWallet,
  useLCDClient,
  useWallet
} from '@terra-money/wallet-provider';
import React, { useEffect, useState } from 'react';

import Logout from '@mui/icons-material/Logout';
import ContentCopy from '@mui/icons-material/ContentCopy';
import AccountBalanceWallet from '@mui/icons-material/AccountBalanceWallet';

import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';

export function ConnectedWalletMenu() {
  const terra = useLCDClient();
  const connectedWallet = useConnectedWallet();
  const { disconnect } = useWallet();
  const [address, setAddress] = useState<null | string>();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const maskString = (str: string) =>
    `${str.substring(0, 6)}...${str.substring(str.length - 6)}`;
  const handleClose = () => setAnchorEl(null);

  useEffect(() => {
    if (connectedWallet) {
      terra.bank.balance(connectedWallet.walletAddress).then(([coins]) => {
        coins.map((coin) => {
          const { amount, denom } = coin.toData();

          switch (denom) {
            case 'uluna':
            case 'uusd':
              console.log(Number(amount) / 1000000);
              return Number(amount) / 1000000;
          }

          return coin;
        });
      });

      setAddress(`${maskString(connectedWallet.walletAddress)} `);
    }
  }, [connectedWallet, terra]);

  return (
    <div>
      {!connectedWallet && (
        <Typography
          variant="subtitle2"
          component="div"
          sx={{ m: 2, textAlign: 'center' }}
        >
          Wallet not connected!
        </Typography>
      )}
      {connectedWallet && (
        <div>
          <Button
            color="inherit"
            startIcon={<AccountBalanceWallet />}
            onClick={handleMenu}
            aria-label="account of current user"
            aria-controls="menu-appbar"
          >
            {address}
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
            PaperProps={{
              style: {
                width: '25ch'
              }
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Box sx={{ textAlign: 'center' }}>
              <Typography
                variant="h6"
                component="div"
                sx={{ mt: 2, textAlign: 'center' }}
              >
                {address}
              </Typography>
              <Button
                size="small"
                variant="outlined"
                startIcon={<ContentCopy />}
                onClick={() => {
                  navigator.clipboard.writeText(connectedWallet.walletAddress);
                }}
                sx={{ mb: 2 }}
              >
                Copy Address
              </Button>
            </Box>

            <MenuItem
              key="disconnect"
              onClick={() => {
                handleClose();
                disconnect();
              }}
            >
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              <ListItemText>Disconnect</ListItemText>
            </MenuItem>
          </Menu>
        </div>
      )}
    </div>
  );
}
