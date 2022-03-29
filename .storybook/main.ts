module.exports = {
  stories: [
    '../src/Intro.stories.mdx',
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
    'storybook-dark-mode',
    'storybook-addon-designs'
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5'
  }
};
