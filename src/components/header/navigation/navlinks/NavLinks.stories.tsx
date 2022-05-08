import NavLinks from 'components/header/navigation/navlinks/NavLinks';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Navigation/NavLinks',
  component: NavLinks
} as ComponentMeta<typeof NavLinks>;

export const NavTemplate: ComponentStory<typeof NavLinks> = (args) => {
  return <NavLinks />;
};

export const LandingPage: ComponentStory<typeof NavLinks> = NavTemplate.bind(
  {}
);
LandingPage.args = {
  navLinks: ['about', 'medium', 'join community', 'roadmap']
};
