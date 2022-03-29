import { ComponentMeta, ComponentStory } from '@storybook/react';

import SocialIcon from 'components/footer/socialIcon/SocialIcon';

export default {
  title: 'Footer/SocialIcon',
  component: SocialIcon
} as ComponentMeta<typeof SocialIcon>;

export const SocialIconTemplate: ComponentStory<typeof SocialIcon> = (args) => (
  <SocialIcon {...args} />
);

export const Discord: ComponentStory<typeof SocialIcon> =
  SocialIconTemplate.bind({});

Discord.args = {
  social: 'discord'
};

export const Twitter: ComponentStory<typeof SocialIcon> =
  SocialIconTemplate.bind({});

Twitter.args = {
  social: 'twitter'
};

export const Telegram: ComponentStory<typeof SocialIcon> =
  SocialIconTemplate.bind({});

Telegram.args = {
  social: 'telegram'
};
