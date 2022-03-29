import { create } from '@storybook/theming';
import logo from '/public/logo-horizontal-orange-white.svg';

export default create({
  base: 'dark',

  // // UI
  appBg: '#040307',
  appContentBg: '#202833',
  appBorderColor: '#D7B9A3',
  appBorderRadius: 6,

  // // Toolbar default and active colors
  barTextColor: '#FCFEFF',
  barSelectedColor: '#D8552A',

  brandTitle: 'Y-Foundry DAO component library',
  brandUrl: 'https://yfoundry.io/',
  brandImage: logo
});
