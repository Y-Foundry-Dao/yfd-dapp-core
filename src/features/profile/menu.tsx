import { useRecoilState, useRecoilValue } from 'recoil';
import useHandleClicks from '@hooks/useHandleClicks';
import { useConnectedWallet, useWallet } from '@terra-money/wallet-provider';
import {
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Portal,
  Text,
  Button,
  Flex,
  Box,
  useClipboard,
  FormControl,
  Switch,
  useControllableState
} from '@chakra-ui/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';

import styles from '@scss/app.module.scss';
import { Icons } from '@utilities/variables/icons';
import {
  PATH_PROFILE,
  PATH_PROFILE_PFP,
  PATH_PROFILE_PFP_SUFFIX,
  PATH_PROFILE_SUFFIX,
  PATH_PROFILE_PFP_DEFAULT
} from 'utilities/variables';

import useAddressConnected from '@hooks/useAddressConnected';
import useProfile from '@hooks/useProfile';
import { Web3Address } from '@saas-ui/web3';
import { snowState } from '@recoil/profile/atoms';
import { FormDialog } from '@saas-ui/modals';

export default function ProfileHeader() {
  const [snow, setSnow] = useRecoilState(snowState);

  const walletAddress = useAddressConnected();
  const { disconnect } = useWallet();
  const { hasCopied, onCopy } = useClipboard(useAddressConnected());
  const profile = useProfile(walletAddress) as any;

  const profileUrl = PATH_PROFILE + walletAddress + PATH_PROFILE_SUFFIX;
  const profilePfpUrl =
    PATH_PROFILE_PFP + walletAddress + PATH_PROFILE_PFP_SUFFIX;
  const instagramUrl =
    'https://www.instagram.com/' + profile.platforms.instagram;
  const twitterUrl = 'https://www.twitter.com/' + profile.platforms.twitter;
  const githubUrl = 'https://www.github.com/' + profile.platforms.github;

  const { handleClickStakeYFD } = useHandleClicks();

  const toggleSnow = () => {
    setSnow((prevSnow) => !prevSnow);
  };

  return (
    <Popover placement="bottom-end">
      <PopoverTrigger>
        <Button className={styles.profileMenu}>
          <Image
            src={profilePfpUrl}
            className={styles.profileMenuIcon}
            alt="pfp"
            fallbackSrc={PATH_PROFILE_PFP_DEFAULT}
          />
        </Button>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverHeader className={styles.profileMenuName}>
            {profile.name}
          </PopoverHeader>
          <PopoverCloseButton />
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
              Snow?
              <Switch id="snowSwitch" size="lg" onChange={toggleSnow} />
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
          <PopoverFooter className={styles.profileMenuFooter}>
            <Box className={styles.profileMenuFooterPlatforms}>
              <a href={instagramUrl} target="_blank">
                <FontAwesomeIcon
                  className={styles.profileMenuPlatformIcon}
                  icon={brands('instagram')}
                />
              </a>
              <a href={twitterUrl} target="_blank">
                <FontAwesomeIcon
                  className={styles.profileMenuPlatformIcon}
                  icon={brands('twitter')}
                />
              </a>
              <a href={githubUrl} target="_blank">
                <FontAwesomeIcon
                  className={styles.profileMenuPlatformIcon}
                  icon={brands('github')}
                />
              </a>
            </Box>
          </PopoverFooter>
        </PopoverContent>
      </Portal>
    </Popover>
  );
}
