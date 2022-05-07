import Button from 'components/basic/buttons/standard/Button';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Basics/Button',
  component: Button,
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/uirWIPkZVQ40MfmiG2O5Rh/YFD-Prototype?node-id=1422%3A4315'
    }
  },
  args: { disabled: false, children: 'Button' },
  argTypes: { onClick: { table: { disable: true } } }
} as ComponentMeta<typeof Button>;

export const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

export const Disabled: ComponentStory<typeof Button> = Template.bind({});

Disabled.args = { disabled: true };
Disabled.argTypes = {
  disabled: {
    table: {
      disable: true
    }
  }
};

export const OpenPosition: ComponentStory<typeof Button> = Template.bind({});

OpenPosition.args = { children: 'open position' };
OpenPosition.argTypes = { children: { table: { disable: true } } };

export const EnterButton: ComponentStory<typeof Button> = Template.bind({});

EnterButton.args = { children: 'enter' };
EnterButton.argTypes = { children: { table: { disable: true } } };
