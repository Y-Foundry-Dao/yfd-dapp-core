import { useSetRecoilState, useRecoilValue } from 'recoil';
import { useWallet } from '@terra-money/wallet-provider';
import {
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverCloseButton,
  Portal,
  Text,
  Button,
  Flex,
  Box,
  useClipboard,
  FormControl,
  Switch
} from '@chakra-ui/react';
import { Web3Address } from '@saas-ui/web3';
import styles from '@scss/app.module.scss';

import {
  PATH_PROFILE_PFP,
  PATH_PROFILE_PFP_SUFFIX,
  PATH_PROFILE_PFP_DEFAULT
} from 'utilities/variables';

import useProfile from '@hooks/useProfile';
import { addressConnectedAtom } from '@recoil/connected/address/atoms';
import { snowState, sparkState } from '@recoil/profile/atoms';

export default function MenuProfile() {
  const { disconnect } = useWallet();
  const setSnow = useSetRecoilState(snowState);
  const setSpark = useSetRecoilState(sparkState);
  const walletAddress = useRecoilValue(addressConnectedAtom);
  const { hasCopied, onCopy } = useClipboard(walletAddress);

  const profile = useProfile(walletAddress);
  const profilePfpUrl =
    PATH_PROFILE_PFP + walletAddress + PATH_PROFILE_PFP_SUFFIX;

  const toggleSnow = () => {
    setSnow((prevSnow) => !prevSnow);
  };
  const toggleSpark = () => {
    setSpark((prevSpark) => !prevSpark);
  };

  return (
    <Popover placement="bottom-end" isLazy={true}>
      <PopoverTrigger>
        <Button className={styles.buttonProfileMenu}>
          <Image
            src={profilePfpUrl}
            className={styles.profileMenuIcon}
            alt="pfp"
            fallbackSrc={PATH_PROFILE_PFP_DEFAULT}
          />
        </Button>
      </PopoverTrigger>
      <Portal>
        <PopoverContent className={styles.profileMenuLayout}>
          <PopoverHeader className={styles.profileMenuName}>
            {profile.name}
          </PopoverHeader>
          <PopoverCloseButton className={styles.arrowProfileMenu} />
          <PopoverBody>
            <Flex>
              <Box>
                <div className={styles.profileMenuText}>
                  <Text>Reputation: Chaotic Good.</Text>
                  <br />
                  <hr />
                  <br />
                  <Text>Initiatives Funded: 0</Text>
                  <Text>Proposals Submitted: 0</Text>
                  <br />
                  <hr />
                  <br />
                  <Text>
                    Preferred Platform:{' '}
                    {profile.platform_preference.charAt(0).toUpperCase() +
                      profile.platform_preference.slice(1)}
                  </Text>
                </div>
                <Image
                  src={profilePfpUrl}
                  className={styles.profileMenuPfp}
                  alt="pfp"
                  fallbackSrc={PATH_PROFILE_PFP_DEFAULT}
                />
              </Box>
            </Flex>
          </PopoverBody>
          <PopoverFooter>
            <FormControl display="flex" alignItems="center">
              Open Flue?
              <Switch id="snowSwitch" size="lg" onChange={toggleSnow} />
            </FormControl>
            <FormControl display="flex" alignItems="center">
              Stoke Forge?
              <Switch id="sparkSwitch" size="lg" onChange={toggleSpark} />
            </FormControl>
          </PopoverFooter>
          <PopoverFooter className={styles.profileMenuWallet}>
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
        </PopoverContent>
      </Portal>
    </Popover>
  );
}
