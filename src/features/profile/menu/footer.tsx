/* eslint-disable prettier/prettier */
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { useWallet } from '@terra-money/wallet-provider';
import {
  PopoverBody,
  PopoverFooter,
  Button,
  Box,
  useClipboard,
  FormControl,
  Switch
} from '@chakra-ui/react';
import { Web3Address } from '@saas-ui/web3';
import styles from '@scss/app.module.scss';

import { addressConnectedAtom } from '@recoil/connected/address/atoms';
import { snowState, sparkState } from '@recoil/profile/atoms';

export default function MenuProfileFooter() {
  const { disconnect } = useWallet();
  const setSnow = useSetRecoilState(snowState);
  const setSpark = useSetRecoilState(sparkState);
  const walletAddress = useRecoilValue(addressConnectedAtom);
  const { hasCopied, onCopy } = useClipboard(walletAddress);

  const toggleSnow = () => {
    setSnow((prevSnow) => !prevSnow);
  };
  const toggleSpark = () => {
    setSpark((prevSpark) => !prevSpark);
  };

  return (
    <>
  <PopoverBody className={styles.profileMenuConfig}>
    <FormControl display="flex" alignItems="center">
      Open Flue?
      <Switch id="snowSwitch" size="lg" onChange={toggleSnow} />
    </FormControl>
    <FormControl display="flex" alignItems="center">
      Stoke Forge?
      <Switch id="sparkSwitch" size="lg" onChange={toggleSpark} />
    </FormControl>
  </PopoverBody>
  <PopoverFooter className={styles.profileMenuFooter}>
    <Box>
      <Button onClick={onCopy} className={styles.profileMenuAddress}>
        {hasCopied ? (
          'Copied!'
        ) : (
          <Web3Address
            address={walletAddress}
            startLength={8}
            endLength={12}
          />
        )}
      </Button>
      <Button
        as={Button}
        width="100%"
        onClick={() => {
          disconnect();
        }}
        className={styles.profileMenuDisconnect}
      >
        Disconnect
      </Button>
    </Box>
  </PopoverFooter>
  </>
  );
}
