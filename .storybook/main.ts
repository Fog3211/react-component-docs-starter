import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-styling",
    "@storybook/addon-actions",
    "@storybook/addon-interactions"
  ],
  docs: {
    autodocs: true,
  },
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  core: {
    builder: '@storybook/builder-vite', // 👈 The builder enabled here.
  },
  staticDirs: ['../docs-dist'],
};

export default config;