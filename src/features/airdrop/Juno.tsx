import styles from '@scss/app.module.scss';
import { Flex, Box, Spacer } from '@chakra-ui/react';
import styleBar from '@scss/progressbar.module.scss';

export default function AirdropJuno() {
  return (
    <Box>
      <div className={styles['content-section']}>
        <fieldset className={styles.popoverActionsSection} role="presentation">
          <legend className={styles.headingLegend} role="presentation">
            <h2>Juno Airdrop</h2>
          </legend>
          <div>
            <h2>Claim your Juno</h2>
            <button>Claim</button>
            <img src="https://miro.medium.com/fit/c/110/110/1*EDnOn77npNc0Wgum6NDnaA.png" />
          </div>
        </fieldset>
      </div>
    </Box>
  );
}
