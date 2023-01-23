import { useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { PopoverBody, Text, Flex, Box } from '@chakra-ui/react';
import styles from '@scss/app.module.scss';
import useProfile from '@hooks/useProfile';
import { addressConnectedAtom } from '@recoil/connected/address/atoms';
import { selectYFDConnected } from '@recoil/connected/balance/selectors';
import MyYFD from '@components/profile/MyYFD';
export default function MenuProfileBody() {
  const walletAddress = useRecoilValue(addressConnectedAtom);
  const profile = useProfile(walletAddress);

  return (
    <>
      <PopoverBody>
        <Flex>
          <Box>
            <MyYFD />
            <div className={styles.containerProfileMenuText}>
              <Text className={styles.containerProfileMenuTextTitle}>
                Testing Objectives
              </Text>
              <br />
              <hr />
              <br />
              <Text>Personalized Test Objectives will appear here.</Text>
              <br />
              <hr />
              <br />
            </div>
            <div className={styles.containerProfileMenuText}>
              <Text className={styles.containerProfileMenuTextTitle}>
                Y-Foundry
              </Text>
              <br />
              <hr />
              <br />
              <Text>Personalized Site Updates will appear here.</Text>
              <br />
              <hr />
              <br />
              <Text>
                Preferred Platform:{' '}
                {profile.platform_preference.charAt(0).toUpperCase() +
                  profile.platform_preference.slice(1)}
              </Text>
            </div>
          </Box>
        </Flex>
      </PopoverBody>
    </>
  );
}
