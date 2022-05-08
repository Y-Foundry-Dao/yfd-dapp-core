import Burger from 'components/header/burger/Burger';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { useState } from 'react';
import { TemplateBurgerMenu } from 'components/header/burger/burgerMenu/BurgerMenu.stories';
import useOnClickOutside from 'hooks/useOnClickOutside';
import { useRef } from 'react';

export default {
  title: 'Navigation/Burger',
  component: Burger,
  args: {
    open: false
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
    }
  }
} as ComponentMeta<typeof Burger>;

export const BurgerTemplate: ComponentStory<typeof Burger> = (args) => {
  const [open, setOpen] = useState<boolean>(false);

  const burgerRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(burgerRef, () => setOpen(false));
  return <Burger />;
};

export const LandingPage: ComponentStory<typeof Burger> = (args) => {
  const [open, setOpen] = useState<boolean>(false);

  const burgerRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(burgerRef, () => setOpen(false));
  return <Burger />;
};
LandingPage.args = {
  navLinks: ['about', 'medium', 'join community', 'roadmap']
};
