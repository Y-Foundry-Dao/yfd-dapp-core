import { useRecoilValue } from 'recoil';
import { PopoverBody, Text, Flex, Box } from '@chakra-ui/react';
import styles from '@scss/app.module.scss';
import useProfile from '@hooks/useProfile';
import { addressConnectedAtom } from '@recoil/connected/address/atoms';
export default function MenuProfileBody() {
  const walletAddress = useRecoilValue(addressConnectedAtom);
  const profile = useProfile(walletAddress);

  return (
    <>
      <PopoverBody>
        <Flex>
          <Box>
            <div className={styles.containerProfileMenuText}>
              <Text className={styles.containerProfileMenuTextTitle}>
                Testing Objectives
              </Text>
              <br />
              <Text>Personalized Test Objectives will appear here.</Text>
              <br />
            </div>
            <div className={styles.containerProfileMenuText}>
              <Text className={styles.containerProfileMenuTextTitle}>
                Y-Foundry
              </Text>
              <br />
              <Text>Personalized Site Updates will appear here.</Text>
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
