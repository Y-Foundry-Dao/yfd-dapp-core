import { ComponentMeta, ComponentStory } from '@storybook/react';

import Logo from 'components/footer/logo/Logo';
import horizontalLogo from 'assets/yfd/logo-horizontal-orange-white.svg';

export default {
  title: 'footer/YFDLogo',
  component: Logo,
  argTypes: {
    src: {
      table: {
        disable: true
      }
    }
  }
} as ComponentMeta<typeof Logo>;

export const LongLogo: ComponentStory<typeof Logo> = (args) => <Logo />;

LongLogo.args = {
  src: horizontalLogo,
  alt: 'YFD Logo'
};
