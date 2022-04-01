import { DISCORD, TELEGRAM, TWITTER } from 'utilities/variables';
import SocialIcon from 'components/footer/socialIcon/SocialIcon';

const socialInfo = {
  discord: {
    link: DISCORD,
    icon: <SocialIcon social="discord" />
  },
  telegram: {
    link: TELEGRAM,
    icon: <SocialIcon social="telegram" />
  },
  twitter: {
    link: TWITTER,
    icon: <SocialIcon social="twitter" />
  }
};

export default socialInfo;
