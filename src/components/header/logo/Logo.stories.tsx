import Logo from 'components/header/logo/Logo';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Navigation/YLogo',
  component: Logo,
  parameters: {
    docs: {
      description: {
        component:
          'This is a Logo component to be composed into the headerbar component'
      }
    }
  }
} as ComponentMeta<typeof Logo>;

export const YLogo: ComponentStory<typeof Logo> = (args) => <Logo />;
