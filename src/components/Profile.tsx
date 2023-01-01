import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import useHandleClicks from '@hooks/useHandleClicks';
import BalanceYFD from './BalanceYFD';
import BalancefYFD from './BalancefYFD';
import { format } from 'date-fns';
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
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuOptionGroup,
  MenuDivider,
  Badge,
  Box,
  Spacer
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
import useWallet from '@hooks/useWallet';
import useProfile from '@hooks/useProfile';

export default function ProfileHeader() {
  const address = useWallet();
  const profile = useProfile(address) as any;
  console.log('loaded profile: ' + JSON.stringify(profile));

  const profileUrl = PATH_PROFILE + address + PATH_PROFILE_SUFFIX;
  const profilePfpUrl = PATH_PROFILE_PFP + address + PATH_PROFILE_PFP_SUFFIX;
  const instagramUrl =
    'https://www.instagram.com/' + profile.platforms.instagram;
  const twitterUrl = 'https://www.twitter.com/' + profile.platforms.twitter;
  const githubUrl = 'https://www.github.com/' + profile.platforms.github;

  const { handleClickStakeYFD } = useHandleClicks();

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
          <PopoverHeader>{profile.name}</PopoverHeader>
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
