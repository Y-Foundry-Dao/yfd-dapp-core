import BurgerMenu from 'components/header/burger/burgerMenu/BurgerMenu';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export default {
  title: 'Navigation/BurgerMenu',
  component: BurgerMenu,
  args: {
    open: false,
    setOpen: (open: boolean) => {
      !open;
    },
    navLinks: ['link', 'link 2', 'link 3', 'link 4']
  },
  argTypes: {
    setOpen: {
      table: {
        disable: true
      }
    }
  },

  parameters: {
    // The viewports object from the Essentials addon
    viewport: {
      // The viewports you want to use
      viewports: INITIAL_VIEWPORTS,
      // Your own default viewport
      defaultViewport: 'iphone5'
    },
    docs: {
      // Opt-out of inline rendering
      // inlineStories: false,
      iframeHeight: 600
    }
  }
} as ComponentMeta<typeof BurgerMenu>;

export const TemplateBurgerMenu: ComponentStory<typeof BurgerMenu> = (args) => {
  return <BurgerMenu {...args} />;
};
TemplateBurgerMenu.parameters = {
  docs: {
    disable: true
  }
};

export const LandingPageBurgerMenu: ComponentStory<typeof BurgerMenu> =
  TemplateBurgerMenu.bind({});

export const Open: ComponentStory<typeof BurgerMenu> = TemplateBurgerMenu.bind(
  {}
);

Open.args = {
  open: true
};
Open.argTypes = {
  open: {
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
Open.parameters = {
  docs: {
    disable: true
  }
};
