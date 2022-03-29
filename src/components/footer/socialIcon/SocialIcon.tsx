import DiscordLogo from 'components/footer/socialIcon/DiscordLogo';
import TelegramLogo from 'components/footer/socialIcon/TelegramLogo';
import TwitterLogo from 'components/footer/socialIcon/TwitterLogo';

interface Props {
  social: string;
}

function SocialIcon({ social }: Props) {
  return (
    <>
      {social == 'discord' ? <DiscordLogo /> : null}
      {social == 'telegram' ? <TelegramLogo /> : null}
      {social == 'twitter' ? <TwitterLogo /> : null}
    </>
  );
}

export default SocialIcon;
