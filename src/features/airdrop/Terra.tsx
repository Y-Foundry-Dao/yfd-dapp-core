import styles from '@scss/app.module.scss';
import { Flex, Box, Spacer, Image } from '@chakra-ui/react';
import styleBar from '@scss/progressbar.module.scss';

export default function AirdropTerra() {
  return (
    <Box>
      <div className={styles['content-section']}>
        <fieldset className={styles.popoverActionsSection} role="presentation">
          <legend className={styles.headingLegend} role="presentation">
            <h2>Terra Airdrop</h2>
          </legend>
          <div>
            <h2>Claim your Terra $YFDTER using Coinhall Genie</h2>
            <button>Claim $YFDTER</button>
            <Image src="https://pbs.twimg.com/profile_images/1441198769889126400/0Z6Z3Z6-_400x400.jpg" />
          </div>
        </fieldset>
      </div>
    </Box>
  );
}
