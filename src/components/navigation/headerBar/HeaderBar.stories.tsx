import { ComponentStory, ComponentMeta } from '@storybook/react';
import HeaderBar from 'components/navigation/headerBar/HeaderBar';
import yLogo from 'assets/yfd/logo-orange.svg';

export default {
  title: 'Navigation/HeaderBar',
  component: HeaderBar,
  args: {
    id: 'home',
    src: yLogo,
    alt: 'Y Logo',
    navLinks: ['link', 'link 2', 'link 3', 'link 4']
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '-1rem' }}>
        <Story />
      </div>
    )
  ]
} as ComponentMeta<typeof HeaderBar>;

export const Template: ComponentStory<typeof HeaderBar> = (args) => {
  return <HeaderBar {...args} />;
};
Template.argTypes = {
  src: {
    table: {
      disable: true
    }
  }
};
