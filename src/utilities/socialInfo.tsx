import { discord, telegram, twitter } from 'utilities/variables';
import SocialIcon from 'components/footer/socialIcon/SocialIcon';

const socialInfo = {
  discord: {
    link: discord,
    icon: <SocialIcon social="discord" />
  },
  telegram: {
    link: telegram,
    icon: <SocialIcon social="telegram" />
  },
  twitter: {
    link: twitter,
    icon: <SocialIcon social="twitter" />
  }
};

export default socialInfo;
