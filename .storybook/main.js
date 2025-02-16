/** @type { import('@storybook/server-webpack5').StorybookConfig } */
const config = {
  // Change the place where storybook searched for stories.
  stories: [
    // Listing Varbase Components in the Storybook
    "../docroot/modules/contrib/varbase_components/components/**/*.stories.@(json|yml)",
    // -------------------------------------------------------------------------------
    // Uncomment the following line to start listing components Vartheme BS5 Starterkit.
    // "../docroot/themes/contrib/vartheme_ba5/components/**/*.stories.@(json|yml)",
    // -------------------------------------------------------------------------------
    // Uncomment the following line to start listing components from custom cloned generated theme
    // Change `mytheme` to the name of the custom theme.  
    // "../docroot/themes/custom/mytheme/components/**/*.stories.@(json|yml)",
    // -------------------------------------------------------------------------------
    // Uncomment the following line to start listing components from custom modules
    // "../docroot/modules/custom/my_custom_module/components/**/*.stories.@(json|yml)",
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@lullabot/storybook-drupal-addon',
    '@storybook/manager-api',
    '@storybook/theming',
    'storybook-addon-root-attribute/register'
  ],
  framework: {
    name: "@storybook/server-webpack5",
    options: {},
  },
  core: {
    builder: '@storybook/builder-webpack5'
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
