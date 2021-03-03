const path = require('path');

module.exports = {
  stories: ['../src/**/*.mdx'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
  ],
  webpackFinal: async (config) => {
    // absolute import alias
    config.resolve.alias = {
      '~': path.resolve(__dirname, '../src'),
    };
    return config;
  },
};
