import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  'stories': ['../src/stories/**/*.mdx', '../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  'framework': {
    'name': '@storybook/angular',
    'options': {}
  },
  'docs': {
    'autodocs': 'tag',
    'defaultName': 'Components'
  },
  'core': {
    'enableCrashReports': true
  },
  'addons': [
    '@chromatic-com/storybook',
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links'
  ]
};
export default config;
