import { ComponentStory, ComponentMeta } from '@storybook/react';
import HeaderBar from 'components/navigation/headerBar/HeaderBar';
import yLogo from 'assets/yfd/logo-orange.svg';
import { useState } from 'react';

export default {
  title: 'Navigation/HeaderBar',
  component: HeaderBar,
  args: {
    id: 'home',
    src: yLogo,
    alt: 'Y Logo',
    navLinks: ['link', 'link 2', 'link 3', 'link 4'],
    open: false
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
  const [open, setOpen] = useState(false);
  return <HeaderBar {...args} open={open} setOpen={setOpen} />;
};
Template.argTypes = {
  id: {
    table: {
      disable: true
    }
  },
  src: {
    table: {
      disable: true
    }
  },
  setOpen: {
    table: {
      disable: true
    }
  }
};
