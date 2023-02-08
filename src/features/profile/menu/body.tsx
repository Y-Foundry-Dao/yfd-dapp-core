import { useRecoilValue, useRecoilValueLoadable } from 'recoil';
import {
  PopoverBody,
  Text,
  Flex,
  Box,
  useToast,
  Button,
  Spacer
} from '@chakra-ui/react';
import styles from '@scss/app.module.scss';
import useProfile from '@hooks/useProfile';
import { addressConnectedAtom } from '@recoil/connected/address/atoms';
import { Web3Address } from '@saas-ui/web3';
import {
  currentContractForgeAtom,
  currentContractGovTokenAtom
} from '@recoil/chainInfo/atoms';

export default function MenuProfileBody() {
  const walletAddress = useRecoilValue(addressConnectedAtom);
  const profile = useProfile(walletAddress);
  const forgeContract = useRecoilValue(currentContractForgeAtom);
  const govTokenContract = useRecoilValue(currentContractGovTokenAtom);
  const toast = useToast();

  return (
    <>
      <PopoverBody>
        <Box className={styles.containerProfileMenuText}>
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
        </Box>
        <Box>
          <fieldset className={styles.headingWrapper} role="presentation">
            <legend className={styles.headingLegend}>
              <h2>Forge</h2>
            </legend>
            <Web3Address
              as="span"
              title={forgeContract}
              address={forgeContract}
              startLength={6}
              endLength={20}
            />
            <br />
            <br />
            <Flex direction={'row'}>
              <Button
                className={styles.buttonSimple}
                onClick={() => {
                  navigator.clipboard.writeText(forgeContract);
                  toast({
                    title: 'Forge Contract Address Copied',
                    description: forgeContract,
                    status: 'info',
                    position: 'top',
                    duration: 9000,
                    isClosable: true,
                    containerStyle: {
                      fontSize: '0.8rem'
                    }
                  });
                }}
              >
                Copy
              </Button>
              <Spacer />
              <Button
                className={styles.buttonStandard}
                onClick={() => {
                  window.open(
                    `https://terrasco.pe/testnet/address/${forgeContract}`,
                    '_blank'
                  );
                }}
              >
                View
              </Button>
            </Flex>
          </fieldset>
          <fieldset className={styles.headingWrapper} role="presentation">
            <legend className={styles.headingLegend}>
              <h2>$YFD Token</h2>
            </legend>
            <Web3Address
              as="span"
              title={govTokenContract}
              address={govTokenContract}
              startLength={6}
              endLength={20}
            />
            <br />
            <br />
            <Flex direction={'row'}>
              <Button
                className={styles.buttonStandard}
                onClick={() => {
                  navigator.clipboard.writeText(govTokenContract);
                  toast({
                    title: '$YFD Token Address Copied',
                    description: govTokenContract,
                    status: 'info',
                    position: 'top',
                    duration: 9000,
                    isClosable: true,
                    containerStyle: {
                      fontSize: '0.8rem'
                    }
                  });
                }}
              >
                Copy
              </Button>
              <Spacer />
              <Button
                className={styles.buttonStandard}
                onClick={() => {
                  window.open(
                    `https://terrasco.pe/testnet/address/${govTokenContract}`,
                    '_blank'
                  );
                }}
              >
                View
              </Button>
            </Flex>
          </fieldset>
        </Box>
      </PopoverBody>
    </>
  );
}
