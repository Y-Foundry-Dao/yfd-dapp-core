import { ComponentMeta, ComponentStory } from '@storybook/react';

import FooterBar from 'components/footer/footerBar/FooterBar';
import Logo from 'assets/yfd/logo-horizontal-orange-white.svg';
import socialInfo from 'utilities/socialInfo';

export default {
  title: 'footer/footerbar',
  component: FooterBar,
  args: {
    logo: Logo,
    alt: 'Logo',
    socialInfo: socialInfo
  },
  argTypes: {
    logo: {
      table: {
        disable: true
      }
    },
    socialInfo: {
      table: {
        disable: true
      }
    }
  }
} as ComponentMeta<typeof FooterBar>;

export const FooterTemplate: ComponentStory<typeof FooterBar> = (args) => (
  <FooterBar {...args} />
);
