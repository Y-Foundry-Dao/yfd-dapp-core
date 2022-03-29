import { ComponentMeta, ComponentStory } from '@storybook/react';

import SocialIcons from 'components/footer/socialIcons/SocialIcons';
import socialInfo from 'utilities/socialInfo';

export default {
  title: 'Footer/SocialIcons',
  component: SocialIcons
} as ComponentMeta<typeof SocialIcons>;

export const SocialIconsTemplate: ComponentStory<typeof SocialIcons> = (
  args
) => <SocialIcons {...args} />;

SocialIconsTemplate.args = {
  socialInfo: socialInfo
};
