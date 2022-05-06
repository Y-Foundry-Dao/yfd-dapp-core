import { ComponentMeta, ComponentStory } from '@storybook/react';

import FooterBar from 'components/footer/footerBar/FooterBar';

export default {
  title: 'footer/footerbar',
  component: FooterBar
} as ComponentMeta<typeof FooterBar>;

export const FooterTemplate: ComponentStory<typeof FooterBar> = (args) => (
  <FooterBar />
);
