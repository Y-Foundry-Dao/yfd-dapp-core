import { useRecoilValue } from 'recoil';
import {
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverCloseButton,
  Portal,
  Button
} from '@chakra-ui/react';
import styles from '@scss/app.module.scss';

import {
  PATH_PROFILE_PFP,
  PATH_PROFILE_PFP_SUFFIX,
  PATH_PROFILE_PFP_DEFAULT
} from 'utilities/variables';
import useProfile from '@hooks/useProfile';
import { addressConnectedAtom } from '@recoil/connected/address/atoms';

import MenuProfileFooter from './footer';
import MenuProfileBody from './body';

export default function MenuProfile() {
  const walletAddress = useRecoilValue(addressConnectedAtom);
  const profile = useProfile(walletAddress);
  const profilePfpUrl =
    PATH_PROFILE_PFP + walletAddress + PATH_PROFILE_PFP_SUFFIX;

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
            <MenuProfileBody />
          </PopoverBody>
          <MenuProfileFooter />
        </PopoverContent>
      </Portal>
    </Popover>
  );
}
