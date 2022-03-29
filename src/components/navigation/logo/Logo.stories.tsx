import Logo from 'components/navigation/logo/Logo';
import yLogo from 'assets/yfd/logo-orange.svg';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Navigation/YLogo',
  component: Logo,
  argTypes: {
    src: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          'This is a Logo component to be composed into the headerbar component'
      }
    }
  }
} as ComponentMeta<typeof Logo>;

export const YLogo: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;
YLogo.args = {
  src: yLogo,
  alt: 'Y logo'
};
