import NavLink from 'components/navigation/navlink/NavLink';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Navigation/NavLink',
  component: NavLink,
  args: {
    text: 'Nav Link'
  }
} as ComponentMeta<typeof NavLink>;

export const Template: ComponentStory<typeof NavLink> = (args) => (
  <NavLink text={args.text} />
);

export const Default = Template.bind({});
Default.args = {
  text: 'My Item'
};
